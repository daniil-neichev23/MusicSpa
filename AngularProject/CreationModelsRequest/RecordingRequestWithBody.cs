using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.CreationModelsRequest
{
    public class RecordingRequestWithBody : EntityAbstraction
    {
        public Guid AlbumId { get; set; }
        public int TrackNumber { get; set; }
        public string Title { get; set; }
        public Guid GenreId { get; set; }
        public GenreRequestWithBody Genre { get; set; }
        [Range(10, 8640)]
        public int Length { get; set; }
        public ICollection<TrackReviewRequestWithBody> TrackReviews { get; set; }
        public AlbumRequestWithBody Album { get; set; }
    }
}
