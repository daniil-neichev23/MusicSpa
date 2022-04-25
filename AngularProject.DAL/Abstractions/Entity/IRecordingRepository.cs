using AngularProject.DAL.ModelsForDb;
using System.Collections.Generic;

namespace AngularProject.DAL.Abstractions.Entity
{
    public interface IRecordingRepository
    {
        public IEnumerable<RecordingEntity> ReadListWithForeign();
    }
}
