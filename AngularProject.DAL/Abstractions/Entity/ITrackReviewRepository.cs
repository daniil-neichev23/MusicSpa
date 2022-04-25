using AngularProject.DAL.ModelsForDb;
using System.Collections.Generic;

namespace AngularProject.DAL.Abstractions.Entity
{
    public interface ITrackReviewRepository
    {
        public IEnumerable<TrackReviewEntity> ReadListWithForeign();

    }
}
