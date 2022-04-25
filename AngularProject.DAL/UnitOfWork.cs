using AngularProject.DAL.Abstractions;
using AngularProject.DAL.Data;
using System;

namespace AngularProject.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private bool disposed = false;
        private readonly AppDbContext _context;
        public IRepository Repository { get; }
        public UnitOfWork(AppDbContext context, IRepository repository)
        {
            _context = context;
            Repository = repository;
        }

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
                this.disposed = true;
            }
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
