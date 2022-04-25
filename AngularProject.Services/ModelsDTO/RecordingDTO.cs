using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.Services.ModelsDTO
{
    public class RecordingDTO : EntityDTO
    {
        public Guid AlbumId { get; set; }
        public int TrackNumber { get; set; }
        public string Title { get; set; }
        public Guid GenreId { get; set; }
        public GenreDTO Genre { get; set; }
        [Range(10, 8640)]
        public int Length { get; set; }
        public ICollection<TrackReviewDTO> TrackReviews { get; set; }
        public AlbumDTO Album { get; set; }
    }
}
