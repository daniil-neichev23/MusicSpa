using AngularProject.DAL.ModelsForDb;
using System;
using System.Threading.Tasks;

namespace AngularProject.DAL.Abstractions.Auth
{
    public interface IAuthenticationRepository
    {
        public Task<string> Login(LoginViewModel model);
        public Task Register(UserEntity model);
        public UserEntity GetUserDetails(Guid id);
    }
}
