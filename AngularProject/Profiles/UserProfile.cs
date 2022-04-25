using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;

namespace AngularProject.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDTO, UserViewModel>().ReverseMap();
            CreateMap<UserRequestWithBody, UserDTO>().ReverseMap();
            CreateMap<JsonPatchDocument<UserRequestWithBody>, JsonPatchDocument<UserDTO>>().ReverseMap(); 
            CreateMap<Operation<UserRequestWithBody>, Operation<UserDTO>>().ReverseMap();
        }
    }
}
