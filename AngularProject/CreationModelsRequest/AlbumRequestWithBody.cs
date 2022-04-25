using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.CreationModelsRequest
{
    public class AlbumRequestWithBody : EntityAbstraction
    {
        public string Title { get; set; }
        public Guid ArtistId { get; set; }
        [Range(1800, 2021)]
        public int Year { get; set; }
        public Guid LabelId { get; set; }
        public ICollection<AlbumReviewRequestWithBody> AlbumReviews { get; set; }
        public ICollection<RecordingRequestWithBody> Recordings { get; set; }
        public LabelRequestWithBody Label { get; set; }
        public ArtistRequestWithBody Artist { get; set; }
    }
}
