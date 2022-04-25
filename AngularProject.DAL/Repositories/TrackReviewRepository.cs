using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class TrackReviewRepository : ITrackReviewRepository
    {
        private readonly AppDbContext _context;
        public TrackReviewRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<TrackReviewEntity> ReadListWithForeign()
        {
            return _context.TrackReviews.AsNoTracking().Include(p => p.Reviewer).Include(p => p.Recording);
        }

    }
}
