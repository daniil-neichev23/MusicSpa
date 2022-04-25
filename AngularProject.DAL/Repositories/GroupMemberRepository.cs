using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class GroupMemberRepository : IGroupMemberRepository
    {
        private readonly AppDbContext _context;
        public GroupMemberRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<GroupMemberEntity> ReadListWithForeign()
        {
            return _context.GroupMembers.AsNoTracking().Include(p => p.Artist).Include(p => p.Musician);
        }

    }
}
