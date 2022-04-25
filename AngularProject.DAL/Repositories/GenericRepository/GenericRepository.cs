using AngularProject.DAL.Abstractions;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.DAL.Repositories.GenericRepository
{
    public class GenericRepository : IRepository 
    {
        private readonly IMapper _mapper;
        private readonly AppDbContext _context;
        public GenericRepository(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task Create<TInput>(TInput element) where TInput : EntityAbstraction
        {
            await _context.Set<TInput>().AddAsync(element);
            await _context.SaveChangesAsync();
        }

        public async Task Delete<TInput>(Guid? id) where TInput : EntityAbstraction
        {
            var entity = await GetById<TInput>(id);
            _context.Set<TInput>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<TInput> GetById<TInput>(Guid? id) where TInput : EntityAbstraction
        {
            return await _context.Set<TInput>()
               .FindAsync(id);
        }
        public IEnumerable<TInput> ReadList<TInput>() where TInput : EntityAbstraction
        {
            return _context.Set<TInput>().AsNoTracking();
        }
        public async Task Update<TInput>(TInput element) where TInput : EntityAbstraction
        {
            _context.Set<TInput>().Update(element);
            await _context.SaveChangesAsync();
        }
         TOutput Map<TInput, TOutput>(TInput element) where TInput : EntityAbstraction where TOutput : EntityAbstraction
        {
            return _mapper.Map<TInput, TOutput>(element);
        }

         TOutput MapBack<TInput, TOutput>(TInput element) where TInput : EntityAbstraction where TOutput : EntityAbstraction
        {
            return _mapper.Map<TInput, TOutput>(element);
        }
    }
}
