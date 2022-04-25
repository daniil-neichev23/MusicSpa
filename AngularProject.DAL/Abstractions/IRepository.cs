using AngularProject.DAL.ModelsForDb;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.DAL.Abstractions
{
    public interface IRepository
    {
        public IEnumerable<TInput> ReadList<TInput>() where TInput : EntityAbstraction;
        //public Task Create<TInput, TOutput>(TInput element) where TInput : Entity where TOutput : EntityDTO;
        public Task Create<TInput>(TInput element) where TInput : EntityAbstraction;
        public Task Update<TInput>(TInput element) where TInput : EntityAbstraction;
        public Task Delete<TInput>(Guid? id) where TInput : EntityAbstraction;
        public Task<TInput> GetById<TInput>(Guid? id) where TInput : EntityAbstraction;
    }
}
