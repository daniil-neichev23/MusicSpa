using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class TrackReviewProfile : Profile
    {
        public TrackReviewProfile()
        {
            CreateMap<TrackReviewDTO, TrackReviewViewModel>().ReverseMap();
            CreateMap<TrackReviewRequestWithBody, TrackReviewDTO>().ReverseMap();
        }
    }
}
