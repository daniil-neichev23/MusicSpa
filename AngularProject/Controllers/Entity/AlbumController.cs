﻿using AngularProject.CreationModelsRequest;
using AngularProject.DAL.Constants;
using AngularProject.Services.ModelsDTO;
using AngularProject.Services.ServiceStructureAbstractions;
using AngularProject.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Controllers.Entity
{
    [ApiController]
    [Authorize(Roles = StringsCommands.Admin)]
    [Route("api/[controller]")]
    public class AlbumController : ControllerBase
    {
        private readonly IAlbumServiceStructure _service;
        private readonly IMapper _mapper;
        public AlbumController(IAlbumServiceStructure albumService, IMapper mapper)
        {
            _service = albumService;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult Create(AlbumRequestWithBody element)
        {
            if (ModelState.IsValid)
            {
                return Ok(_service.Create(_mapper.Map<AlbumDTO>(element)));
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("Update")]
        public IActionResult Update([FromQuery]Guid id, [FromBody]AlbumRequestWithBody element)
        {
            if (ModelState.IsValid)
            {
                return Ok(_service.Update(id, _mapper.Map<AlbumDTO>(element)));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("Delete")]
        public IActionResult Delete(Guid? id)
        {
            if(id == null)
            {
                return BadRequest();
            }

            return Ok(_service.Delete(id));
        }

        [HttpGet]
        [Route("GetById")]
        public async Task<IActionResult> GetById(Guid? id)
        {
            if (ModelState.IsValid)
            {
                var result = await _service.GetById(id);
                return Ok(_mapper.Map<AlbumRequestWithBody>(result));
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("Read")]
        public IActionResult ReadList()
        {
            if (ModelState.IsValid)
            {
                var result = _mapper.Map<List<AlbumViewModel>>(_service.ReadList().ToList());
                return Ok(result);
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("ReadList")]
        public IActionResult ReadListWithForeign()
        {
            if (ModelState.IsValid)
            {
                var result = _mapper.Map<List<AlbumRequestWithBody>>(_service.ReadListWithForeign());
                return Ok(result);
            }

            return BadRequest();
        }
    }
}
