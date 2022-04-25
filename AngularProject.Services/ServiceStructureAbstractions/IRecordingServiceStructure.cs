using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IRecordingServiceStructure
    {
        public Task Create(RecordingDTO element);
        public Task Update(Guid id, RecordingDTO element);
        public Task Delete(Guid? id);
        public Task<RecordingDTO> GetById(Guid? id);
        public IEnumerable<RecordingDTO> ReadList();
        public IEnumerable<RecordingDTO> ReadListWithForeign();

    }
}
