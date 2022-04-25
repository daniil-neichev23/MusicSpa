using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class MusicianProfile : Profile
    {
        public MusicianProfile()
        {
            CreateMap<MusicianDTO, MusicianViewModel>().ReverseMap();
            CreateMap<MusicianRequestWithBody, MusicianDTO>().ReverseMap();
        }
    }
}
