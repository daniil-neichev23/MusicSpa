using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.DAL.ModelsForDb
{
    public class RecordingEntity : EntityAbstraction
    {
        public Guid AlbumId { get; set; }
        public int TrackNumber { get; set; }
        public string Title { get; set; }
        public Guid GenreId { get; set; }
        public GenreEntity Genre { get; set; }
        [Range(10, 8640)]
        public int Length { get; set; }
        public ICollection<TrackReviewEntity> TrackReviews { get; set; }
        public AlbumEntity Album { get; set; }
    }
}
