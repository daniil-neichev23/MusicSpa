using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class RecordingDtoProfile : Profile
    {
        public RecordingDtoProfile()
        {
            CreateMap<RecordingEntity, RecordingDTO>().ReverseMap();
        }
    }
    //public class RecordingDTOConverter : ITypeConverter<Recording, RecordingDTO>
    //{
    //    public RecordingDTO Convert(Recording source, RecordingDTO destination, ResolutionContext context)
    //    {
    //        return new RecordingDTO
    //        {
    //            Id = source.Id,
    //            Title = source.Title,
    //            TrackNumber = source.TrackNumber,
    //            Length = source.Length,
    //            Album = source.Album,
    //            AlbumId = source.AlbumId,
    //            Genre = source.Genre,
    //            GenreId = source.GenreId,
    //            TrackReviews = source.TrackReviews
    //        };
    //    }
    //}
}
