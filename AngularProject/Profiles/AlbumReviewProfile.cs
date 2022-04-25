using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class AlbumReviewProfile : Profile
    {
        public AlbumReviewProfile()
        {
            CreateMap<AlbumReviewDTO, AlbumReviewViewModel>().ReverseMap();
            CreateMap<AlbumReviewRequestWithBody, AlbumReviewDTO>().ReverseMap();
        }
    }
}
