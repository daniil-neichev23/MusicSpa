using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class RecordingRepository : IRecordingRepository
    {
        private readonly AppDbContext _context;
        public RecordingRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<RecordingEntity> ReadListWithForeign()
        {
            return _context.Recordings.AsNoTracking().Include(p => p.Album).Include(p => p.Genre)
                .Include(p => p.TrackReviews);
        }

    }
}
