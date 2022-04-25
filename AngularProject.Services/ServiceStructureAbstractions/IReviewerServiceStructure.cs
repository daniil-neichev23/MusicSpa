using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IReviewerServiceStructure
    {
        public Task Create(ReviewerDTO element);
        public Task Update(Guid id, ReviewerDTO element);
        public Task Delete(Guid? id);
        public Task<ReviewerDTO> GetById(Guid? id);
        public IEnumerable<ReviewerDTO> ReadList();
        public IEnumerable<ReviewerDTO> ReadListWithForeign();

    }
}
