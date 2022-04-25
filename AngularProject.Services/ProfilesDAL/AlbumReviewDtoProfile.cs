using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class AlbumReviewDtoProfile:Profile
    {
        public AlbumReviewDtoProfile()
        {
            CreateMap<AlbumReviewEntity, AlbumReviewDTO>().ReverseMap();
        }
    }
    //public class AlbumReviewDTOConverter : ITypeConverter<AlbumReview, AlbumReviewDTO>
    //{
    //    public AlbumReviewDTO Convert(AlbumReview source, AlbumReviewDTO destination, ResolutionContext context)
    //    {
    //        return new AlbumReviewDTO
    //        {
    //            Id = source.Id,
    //            Ranking = source.Ranking,
    //            Comment = source.Comment,
    //            Album = source.Album,
    //            Reviewer = source.Reviewer,
    //            ReviewerId = source.ReviewerId
    //        };
    //    }
    //}
}
