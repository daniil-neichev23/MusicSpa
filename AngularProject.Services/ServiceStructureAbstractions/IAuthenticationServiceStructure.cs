using AngularProject.DAL;
using AngularProject.Services.ModelsDTO;
using System;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IAuthenticationServiceStructure
    {
        public Task<string> Login(LoginViewModel model);
        public Task Register(UserDTO model);
        public UserDTO GetUserDetails(Guid id);
    }
}
