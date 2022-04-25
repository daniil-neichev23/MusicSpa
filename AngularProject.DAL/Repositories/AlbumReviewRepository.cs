using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class AlbumReviewRepository : IAlbumReviewRepository
    {
        private readonly AppDbContext _context;
        public AlbumReviewRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<AlbumReviewEntity> ReadListWithForeign()
        {
            return _context.AlbumReviews.AsNoTracking().Include(p => p.Album).Include(p => p.Reviewer);
        }

    }
}
