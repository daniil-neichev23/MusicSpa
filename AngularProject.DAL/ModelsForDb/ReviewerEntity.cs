using System.Collections.Generic;

namespace AngularProject.DAL.ModelsForDb
{
    public class ReviewerEntity : EntityAbstraction
    {
        public bool Joined { get; set; }
        public ICollection<AlbumReviewEntity> AlbumReviews { get; set; }
        public ICollection<TrackReviewEntity> TrackReviews { get; set; }
    }
}
