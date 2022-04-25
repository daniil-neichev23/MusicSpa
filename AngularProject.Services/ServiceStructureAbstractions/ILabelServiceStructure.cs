using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface ILabelServiceStructure
    {
        public Task Create(LabelDTO element);
        public Task Update(Guid id , LabelDTO element);
        public Task Delete(Guid? id);
        public Task<LabelDTO> GetById(Guid? id);
        public IEnumerable<LabelDTO> ReadList();
        public IEnumerable<LabelDTO> ReadListWithForeign();

    }
}
