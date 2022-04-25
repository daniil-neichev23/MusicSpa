using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class ArtistDtoProfile : Profile
    {
        public ArtistDtoProfile()
        {
            CreateMap<ArtistEntity, ArtistDTO>().ReverseMap();
        }
    }
    //public class ArtistDTOConverter : ITypeConverter<Artist, ArtistDTO>
    //{
    //    public ArtistDTO Convert(Artist source, ArtistDTO destination, ResolutionContext context)
    //    {
    //        return new ArtistDTO
    //        {
    //            Id = source.Id,
    //            Name = source.Name,
    //            GroupMembers = source.GroupMembers,
    //            Albums = source.Albums
    //        };
    //    }
    //}
}
