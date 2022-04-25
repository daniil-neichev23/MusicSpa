using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class RecordingProfile : Profile
    {
        public RecordingProfile()
        {
            CreateMap<RecordingDTO, RecordingViewModel>().ReverseMap();
            CreateMap<RecordingRequestWithBody, RecordingDTO>().ReverseMap();
        }
    }
}
