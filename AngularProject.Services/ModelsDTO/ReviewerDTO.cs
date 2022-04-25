using System.Collections.Generic;

namespace AngularProject.Services.ModelsDTO
{
    public class ReviewerDTO : EntityDTO
    {
        public bool Joined { get; set; }
        public ICollection<AlbumReviewDTO> AlbumReviews { get; set; }
        public ICollection<TrackReviewDTO> TrackReviews { get; set; }
    }
}
