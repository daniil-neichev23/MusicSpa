using System.Collections.Generic;

namespace AngularProject.CreationModelsRequest
{
    public class ReviewerRequestWithBody : EntityAbstraction
    {
        public bool Joined { get; set; }
        public ICollection<AlbumReviewRequestWithBody> AlbumReviews { get; set; }
        public ICollection<TrackReviewRequestWithBody> TrackReviews { get; set; }
    }
}
