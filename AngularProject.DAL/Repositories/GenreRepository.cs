using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AngularProject.DAL.Repositories
{
    public class GenreRepository : IGenreRepository
    {
        private readonly AppDbContext _context;
        public GenreRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<GenreEntity> ReadListWithForeign()
        {
            return _context.Genres.AsNoTracking().Include(p => p.Recordings);
        }

    }
}
