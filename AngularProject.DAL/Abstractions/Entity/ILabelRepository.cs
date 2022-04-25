using AngularProject.DAL.ModelsForDb;
using System.Collections.Generic;

namespace AngularProject.DAL.Abstractions.Entity
{
    public interface ILabelRepository
    {
        public IEnumerable<LabelEntity> ReadListWithForeign();

    }
}
