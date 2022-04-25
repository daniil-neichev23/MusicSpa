using AngularProject.DAL.ModelsForDb;
using System.Collections.Generic;

namespace AngularProject.DAL.Abstractions.Entity
{
    public interface IReviewerRepository
    {
        public IEnumerable<ReviewerEntity> ReadListWithForeign();

    }
}
