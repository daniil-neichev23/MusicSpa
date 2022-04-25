using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class LabelProfile : Profile
    {
        public LabelProfile()
        {
            CreateMap<LabelDTO, LabelViewModel>().ReverseMap();
            CreateMap<LabelRequestWithBody, LabelDTO>().ReverseMap();
        }
    }
}
