using AngularProject.DAL.ModelsForDb;
using System.Collections.Generic;

namespace AngularProject.DAL.Abstractions.Entity
{
    public interface IGroupMemberRepository
    {
        public IEnumerable<GroupMemberEntity> ReadListWithForeign();

    }
}
