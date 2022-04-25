using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class ArtistProfile : Profile
    {
        public ArtistProfile()
        {
            CreateMap<ArtistDTO, ArtistViewModel>().ReverseMap();
            CreateMap<ArtistRequestWithBody, ArtistDTO>().ReverseMap();
        }
    }
}
