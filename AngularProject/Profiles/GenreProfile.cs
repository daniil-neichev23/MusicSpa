using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class GenreProfile : Profile
    {
        public GenreProfile()
        {
            CreateMap<GenreDTO, GenreViewModel>().ReverseMap();
            CreateMap<GenreRequestWithBody, GenreDTO>().ReverseMap();
        }
    }
}
