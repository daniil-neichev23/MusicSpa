using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IAlbumServiceStructure
    {
        public Task Create(AlbumDTO element);
        public Task Update(Guid id, AlbumDTO element);
        public Task Delete(Guid? id);
        public Task<AlbumDTO> GetById(Guid? id);
        public IEnumerable<AlbumDTO> ReadList();
        public IEnumerable<AlbumDTO> ReadListWithForeign();
    }
}
