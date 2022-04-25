using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IGenreServiceStructure
    {
        public Task Create(GenreDTO element);
        public Task Update(Guid id, GenreDTO element);
        public Task Delete(Guid? id);
        public Task<GenreDTO> GetById(Guid? id);
        public IEnumerable<GenreDTO> ReadList();
        public IEnumerable<GenreDTO> ReadListWithForeign();

    }
}
