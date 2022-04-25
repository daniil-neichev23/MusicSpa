using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class AlbumDtoProfile : Profile
    {
        public AlbumDtoProfile()
        {
            CreateMap<AlbumEntity, AlbumDTO>().ReverseMap();
        }
    }
    //public class AlbumDTOConverter : ITypeConverter<Album, AlbumDTO>
    //{
    //    public AlbumDTO Convert(Album source, AlbumDTO destination, ResolutionContext context)
    //    {
    //        return new AlbumDTO
    //        {
    //            Id = source.Id,
    //            Title = source.Title,
    //            Year = source.Year,
    //            ArtistId = source.ArtistId,
    //            LabelId = source.LabelId,
    //            Artist=source.Artist,
    //            Label = source.Label,
    //            Recordings=source.Recordings,
    //            AlbumReviews=source.AlbumReviews
    //        };
    //    }
    //}
}
