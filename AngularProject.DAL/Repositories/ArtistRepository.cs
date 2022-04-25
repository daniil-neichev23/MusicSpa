using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class ArtistRepository : IArtistRepository
    {
        private readonly AppDbContext _context;
        public ArtistRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<ArtistEntity> ReadListWithForeign()
        {
            return _context.Artists.AsNoTracking().Include(p => p.Albums).Include(p => p.GroupMembers);
        }
    }
}
