using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IArtistServiceStructure
    {
        public Task Create(ArtistDTO element);
        public Task Update(Guid id, ArtistDTO element);
        public Task Delete(Guid? id);
        public Task<ArtistDTO> GetById(Guid? id);
        public IEnumerable<ArtistDTO> ReadList();
        public IEnumerable<ArtistDTO> ReadListWithForeign();

    }
}
