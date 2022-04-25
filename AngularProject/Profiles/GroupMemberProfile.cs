using AngularProject.CreationModelsRequest;
using AngularProject.Services.ModelsDTO;
using AngularProject.ViewModels;
using AutoMapper;

namespace AngularProject.Profiles
{
    public class GroupMemberProfile : Profile
    {
        public GroupMemberProfile()
        {
            CreateMap<GroupMemberDTO, GroupMemberViewModel>().ReverseMap();
            CreateMap<GroupMemberRequestWithBody, GroupMemberDTO>().ReverseMap();
        }
    }
}
