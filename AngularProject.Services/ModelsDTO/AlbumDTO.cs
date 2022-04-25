using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.Services.ModelsDTO
{
    public class AlbumDTO : EntityDTO
    {
        public string Title { get; set; }
        public Guid ArtistId { get; set; }
        [Range(1800, 2021)]
        public int Year { get; set; }
        public Guid LabelId { get; set; }
        public ICollection<AlbumReviewDTO> AlbumReviews { get; set; }
        public ICollection<RecordingDTO> Recordings { get; set; }
        public LabelDTO Label { get; set; }
        public ArtistDTO Artist { get; set; }
    }
}
