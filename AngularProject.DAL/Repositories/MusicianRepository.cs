using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class MusicianRepository : IMusicianRepository
    {
        private readonly AppDbContext _context;
        public MusicianRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<MusicianEntity> ReadListWithForeign()
        {
            return _context.Musicians.AsNoTracking().Include(p => p.GroupMembers);
        }

    }
}
