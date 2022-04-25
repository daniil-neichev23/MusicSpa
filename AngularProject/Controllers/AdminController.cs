using AngularProject.CreationModelsRequest;
using AngularProject.DAL.Constants;
using AngularProject.Services.ModelsDTO;
using AngularProject.Services.ServiceStructureAbstractions;
using AngularProject.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularProject.Controllers
{
    [ApiController]
    [Authorize(Roles = StringsCommands.Admin)]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminServiceStructure _admin;
        private readonly IMapper _mapper;
        public AdminController(IAdminServiceStructure admin, IMapper mapper)
        {
            _admin = admin;
            _mapper = mapper;
        }

        [HttpPatch("{id}")]
        [Route("UpdateUser")]
        public IActionResult UpdateRole([FromQuery]Guid id, [FromBody] JsonPatchDocument<UserRequestWithBody> model)
        {
            if (ModelState.IsValid)
            {
                return Ok(_admin.UpdateRole(id, _mapper.Map<JsonPatchDocument<UserDTO>>(model)));
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("RoleList")]
        public IActionResult GetRoleList()
        {
            if (ModelState.IsValid)
            {
                var res = Enum.GetValues(typeof(Roles)).Cast<Roles>().Select(v => v.ToString()).ToList();
                return Ok(res);
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("UserList")]
        public IActionResult GetAllUsers()
        {
            if (ModelState.IsValid)
            {
                var result = _admin.GetAllUsers();
                return Ok(_mapper.Map<List<UserViewModel>>(result.ToList()));
            }

            return BadRequest();
        }
    }
}
