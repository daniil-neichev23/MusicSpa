using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.Services.ModelsDTO
{
    public class TrackReviewDTO : EntityDTO
    {
        public Guid ReviewerId { get; set; }
        public Guid RecordingId { get; set; }
        [Range(1,10)]
        public int Ranking { get; set; }
        public string Comment { get; set; }
        public ReviewerDTO Reviewer { get; set; }
        public RecordingDTO Recording { get; set; }
    }
}
