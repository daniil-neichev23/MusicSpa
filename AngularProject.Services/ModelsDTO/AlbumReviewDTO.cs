using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.Services.ModelsDTO
{
    public class AlbumReviewDTO : EntityDTO
    {
        public Guid ReviewerId { get; set; }
        public Guid AlbumId { get; set; }
        [Range(1,10)]
        public int Ranking { get; set; }
        public string Comment { get; set; }
        public AlbumDTO Album { get; set; }
        public ReviewerDTO Reviewer { get; set; }
    }
}
