using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface ITrackReviewServiceStructure
    {
        public Task Create(TrackReviewDTO element);
        public Task Update(Guid id, TrackReviewDTO element);
        public Task Delete(Guid? id);
        public Task<TrackReviewDTO> GetById(Guid? id);
        public IEnumerable<TrackReviewDTO> ReadList();
        public IEnumerable<TrackReviewDTO> ReadListWithForeign();

    }
}
