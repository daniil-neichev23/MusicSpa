using AngularProject.CreationModelsRequest;
using AngularProject.DAL;
using AngularProject.DAL.Constants;
using AngularProject.Services.ModelsDTO;
using AngularProject.Services.ServiceStructureAbstractions;
using AngularProject.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace AngularProject.Controllers.Authentication
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAuthenticationServiceStructure _authentication;
        private readonly IMapper _mapper;
        public AccountController(IAuthenticationServiceStructure auth, IMapper mapper)
        {
            _authentication = auth;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var tokenDescriptor = _authentication.Login(model).Result;
                return Ok(new { tokenDescriptor });
            }

            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        public IActionResult Register(UserRequestWithBody model)
        {
            if (ModelState.IsValid)
            {
                var p = _authentication.Register(_mapper.Map<UserDTO>(model));
                return Ok(p);
            }

            return BadRequest();
        }

        [Authorize(Roles = StringsCommands.Admin)]
        [HttpGet("{id}")]
        [Route("Read")]
        public IActionResult GetUserDetails([FromQuery]Guid id)
        {
            if (ModelState.IsValid)
            {
                var p =  _authentication.GetUserDetails(id);
                var result = _mapper.Map<UserViewModel>(p);
                return Ok(result);
            }

            return BadRequest();
        }
    }
}
