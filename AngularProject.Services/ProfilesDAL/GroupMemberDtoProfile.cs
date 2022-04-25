using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class GroupMemberDtoProfile :Profile
    {
        public GroupMemberDtoProfile()
        {
            CreateMap<GroupMemberEntity, GroupMemberDTO>().ReverseMap();
        }
    }
    //public class GroupMemberDTOConverter : ITypeConverter<GroupMember, GroupMemberDTO>
    //{
    //    public GroupMemberDTO Convert(GroupMember source, GroupMemberDTO destination, ResolutionContext context)
    //    {
    //        return new GroupMemberDTO
    //        {
    //            Id = source.Id,
    //            Joined = source.Joined,
    //            Left = source.Left,
    //            ArtistId = source.ArtistId,
    //            Musician = source.Musician,
    //            Artist = source.Artist,
    //            MusicianId = source.MusicianId
    //        };
    //    }
    //}
}
