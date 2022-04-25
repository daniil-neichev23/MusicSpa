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
    public class ReviewerController : ControllerBase
    {
        private readonly IReviewerServiceStructure _service;
        private readonly IMapper _mapper;
        public ReviewerController(IReviewerServiceStructure service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult Create(ReviewerRequestWithBody element)
        {
            if (ModelState.IsValid)
            {
                return Ok(_service.Create(_mapper.Map<ReviewerDTO>(element)));
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("Update")]
        public IActionResult Update([FromQuery]Guid id, [FromBody]ReviewerRequestWithBody element)
        {
            if (ModelState.IsValid)
            {
                return Ok(_service.Update(id, _mapper.Map<ReviewerDTO>(element)));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("Delete")]
        public IActionResult Delete(Guid? id)
        {
            if (id == null)
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
                return Ok(_mapper.Map<ReviewerRequestWithBody>(await _service.GetById(id)));
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("Read")]
        public IActionResult ReadList()
        {
            if (ModelState.IsValid)
            {
                var result = _mapper.Map<List<ReviewerViewModel>>(_service.ReadList().ToList());
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
                var result = _service.ReadListWithForeign();
                return Ok(_mapper.Map<List<ReviewerRequestWithBody>>(result));
            }

            return BadRequest();
        }
    }
}
