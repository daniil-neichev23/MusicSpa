using AngularProject.Services.ModelsDTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IGroupMemberServiceStructure
    {
        public Task Create(GroupMemberDTO element);
        public Task Update(Guid id, GroupMemberDTO element);
        public Task Delete(Guid? id);
        public Task<GroupMemberDTO> GetById(Guid? id);
        public IEnumerable<GroupMemberDTO> ReadList();
        public IEnumerable<GroupMemberDTO> ReadListWithForeign();

    }
}
