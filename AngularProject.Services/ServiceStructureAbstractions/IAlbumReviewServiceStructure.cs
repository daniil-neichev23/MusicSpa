using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IAlbumReviewServiceStructure
    {
        public Task Create(AlbumReviewDTO element);
        public Task Update(Guid id , AlbumReviewDTO element);
        public Task Delete(Guid? id);
        public Task<AlbumReviewDTO> GetById(Guid? id);
        public IEnumerable<AlbumReviewDTO> ReadList();
        public IEnumerable<AlbumReviewDTO> ReadListWithForeign();

    }
}
