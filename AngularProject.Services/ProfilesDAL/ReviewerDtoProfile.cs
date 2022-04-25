using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class ReviewerDtoProfile : Profile
    {
        public ReviewerDtoProfile()
        {
            CreateMap<ReviewerEntity, ReviewerDTO>().ReverseMap();
        }
    }
    //public class ReviewerDTOConverter : ITypeConverter<Reviewer, ReviewerDTO>
    //{
    //    public ReviewerDTO Convert(Reviewer source, ReviewerDTO destination, ResolutionContext context)
    //    {
    //        return new ReviewerDTO
    //        {
    //            Id = source.Id,
    //            Joined = source.Joined,
    //            TrackReviews = source.TrackReviews,
    //            AlbumReviews = source.AlbumReviews
    //        };
    //    }
    //}
}
