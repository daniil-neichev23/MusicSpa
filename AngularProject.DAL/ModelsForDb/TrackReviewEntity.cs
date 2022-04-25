using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.DAL.ModelsForDb
{
    public class TrackReviewEntity : EntityAbstraction
    {
        public Guid ReviewerId { get; set; }
        public Guid RecordingId { get; set; }
        [Range(1,10)]
        public int Ranking { get; set; }
        public string Comment { get; set; }
        public ReviewerEntity Reviewer { get; set; }
        public RecordingEntity Recording { get; set; }
    }
}
