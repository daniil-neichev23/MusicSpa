using AngularProject.DAL;
using AngularProject.DAL.Abstractions.Auth;
using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AngularProject.Services.ServiceStructureAbstractions;
using AutoMapper;
using Serilog;
using System;
using System.Threading.Tasks;

namespace AngularProject.Services.Services
{
    public class AuthenticationService : IAuthenticationServiceStructure
    {
        private readonly IAuthenticationRepository _authentication;
        private readonly IMapper _mapper;
        private readonly ILogger _log = Log.ForContext<AuthenticationService>();

        public AuthenticationService(IAuthenticationRepository authentication, IMapper mapper)
        {
            _authentication = authentication;
            _mapper = mapper;
        }

        public async Task<string> Login(LoginViewModel model)
        {
            try
            {
                return await _authentication.Login(model);
            }
            catch (ArgumentException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
            
        }

        public async Task Register(UserDTO model) 
        {
            try
            {
                await _authentication.Register(_mapper.Map<UserEntity>(model));
            }
            catch (ArgumentException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
        public UserDTO GetUserDetails(Guid id)
        {
            try
            {
                return _mapper.Map<UserDTO>(_authentication.GetUserDetails(id));
            }
            catch(ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
    }
}
