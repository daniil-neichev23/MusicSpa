using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;

namespace AngularProject.DAL.ProfilesDAL
{
    public class UserDtoProfile: Profile
    {
        public UserDtoProfile()
        {
            CreateMap<UserEntity, UserDTO>().ReverseMap();
            CreateMap<JsonPatchDocument<UserEntity>, JsonPatchDocument<UserDTO>>().ReverseMap();
            CreateMap<Operation<UserEntity>, Operation<UserDTO>>().ReverseMap();
        }   
    }
}
