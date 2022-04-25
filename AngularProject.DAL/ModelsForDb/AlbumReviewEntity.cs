using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.DAL.ModelsForDb
{
    public class AlbumReviewEntity : EntityAbstraction
    {
        public Guid ReviewerId { get; set; }
        public Guid AlbumId { get; set; }
        [Range(1,10)]
        public int Ranking { get; set; }
        public string Comment { get; set; }
        public AlbumEntity Album { get; set; }
        public ReviewerEntity Reviewer { get; set; }
    }
}
