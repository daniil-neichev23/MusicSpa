using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class ReviewerRepository : IReviewerRepository
    {
        private readonly AppDbContext _context;
        public ReviewerRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<ReviewerEntity> ReadListWithForeign()
        {
            return _context.Reviewers.AsNoTracking().Include(p => p.AlbumReviews).Include(p => p.TrackReviews);
        }

    }
}
