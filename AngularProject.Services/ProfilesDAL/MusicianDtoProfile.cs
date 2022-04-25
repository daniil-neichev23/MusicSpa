using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class MusicianDtoProfile : Profile
    {
        public MusicianDtoProfile()
        {
            CreateMap<MusicianEntity, MusicianDTO>().ReverseMap();
        }
    }
    //public class MusicianDTOConverter : ITypeConverter<Musician, MusicianDTO>
    //{
    //    public MusicianDTO Convert(Musician source, MusicianDTO destination, ResolutionContext context)
    //    {
    //        return new MusicianDTO
    //        {
    //            Id = source.Id,
    //            FirstName = source.FirstName,
    //            LastName = source.LastName,
    //            BirthDate = source.BirthDate,
    //            BirthPlace = source.BirthPlace,
    //            GroupMembers = source.GroupMembers
    //        };
    //    }
    //}
}
