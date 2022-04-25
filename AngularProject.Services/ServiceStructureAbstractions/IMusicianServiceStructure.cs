using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IMusicianServiceStructure
    {
        public Task Create(MusicianDTO element);
        public Task Update(Guid id, MusicianDTO element);
        public Task Delete(Guid? id);
        public Task<MusicianDTO> GetById(Guid? id);
        public IEnumerable<MusicianDTO> ReadList();
        public IEnumerable<MusicianDTO> ReadListWithForeign();

    }
}
