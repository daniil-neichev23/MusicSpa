using System;

namespace AngularProject.DAL.Abstractions
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository Repository { get; }
    }
}
