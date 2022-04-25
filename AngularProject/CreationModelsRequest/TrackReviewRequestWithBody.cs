using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.CreationModelsRequest
{
    public class TrackReviewRequestWithBody : EntityAbstraction
    {
        public Guid ReviewerId { get; set; }
        public Guid RecordingId { get; set; }
        [Range(1, 10)]
        public int Ranking { get; set; }
        public string Comment { get; set; }
        public ReviewerRequestWithBody Reviewer { get; set; }
        public RecordingRequestWithBody Recording { get; set; }
    }
}
