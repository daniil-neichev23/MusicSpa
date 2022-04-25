using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class TrackReviewDtoProfile : Profile
    {
        public TrackReviewDtoProfile()
        {
            CreateMap<TrackReviewEntity, TrackReviewDTO>().ReverseMap();
        }
    }
    //public class TrackReviewDTOConverter : ITypeConverter<TrackReview, TrackReviewDTO>
    //{
    //    public TrackReviewDTO Convert(TrackReview source, TrackReviewDTO destination, ResolutionContext context)
    //    {
    //        return new TrackReviewDTO
    //        {
    //            Id = source.Id,
    //            Ranking = source.Ranking,
    //            Comment = source.Comment,
    //            Recording = source.Recording,
    //            RecordingId = source.RecordingId,
    //            Reviewer = source.Reviewer,
    //            ReviewerId = source.ReviewerId
    //        };
    //    }
    //}
}
