using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class ReviewerProfile : Profile
    {
        public ReviewerProfile()
        {
            CreateMap<ReviewerDTO, ReviewerViewModel>().ReverseMap();
            CreateMap<ReviewerRequestWithBody, ReviewerDTO>().ReverseMap();
        }
    }
}
