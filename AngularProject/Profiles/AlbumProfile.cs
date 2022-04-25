using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class AlbumProfile : Profile
    {
        public AlbumProfile()
        {
            CreateMap<AlbumDTO, AlbumViewModel>().ReverseMap();
            CreateMap<AlbumRequestWithBody, AlbumDTO>().ReverseMap();
        }
    }
}
