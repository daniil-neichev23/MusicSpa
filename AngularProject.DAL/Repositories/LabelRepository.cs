using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class LabelRepository : ILabelRepository
    {
        private readonly AppDbContext _context;
        public LabelRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<LabelEntity> ReadListWithForeign()
        {
            return _context.Labels.AsNoTracking().Include(p => p.Albums);
        }

    }
}
