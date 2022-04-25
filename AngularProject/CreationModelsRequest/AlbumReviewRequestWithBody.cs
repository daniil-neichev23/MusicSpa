using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.CreationModelsRequest
{
    public class AlbumReviewRequestWithBody : EntityAbstraction
    {
        public Guid ReviewerId { get; set; }
        public Guid AlbumId { get; set; }
        [Range(1, 10)]
        public int Ranking { get; set; }
        public string Comment { get; set; }
        public AlbumRequestWithBody Album { get; set; }
        public ReviewerRequestWithBody Reviewer { get; set; }
    }
}
