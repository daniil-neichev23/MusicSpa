using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class AlbumRepository : IAlbumRepository
    {
        private readonly AppDbContext _context;
        public AlbumRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<AlbumEntity> ReadListWithForeign()
        {
            return _context.Albums.AsNoTracking().Include(p => p.Artist).Include(p=>p.Label)
                .Include(p => p.Recordings).Include(p => p.AlbumReviews);
        }
    }
}
