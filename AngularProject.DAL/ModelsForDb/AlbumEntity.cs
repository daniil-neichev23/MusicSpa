using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.DAL.ModelsForDb
{
    public class AlbumEntity : EntityAbstraction
    {
        public string Title { get; set; }
        public Guid ArtistId { get; set; }
        [Range(1800, 2021)]
        public int Year { get; set; }
        public Guid LabelId { get; set; }
        public ICollection<AlbumReviewEntity> AlbumReviews { get; set; }
        public ICollection<RecordingEntity> Recordings { get; set; }
        public LabelEntity Label { get; set; }
        public ArtistEntity Artist { get; set; }
    }
}
