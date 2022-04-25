using AngularProject.DAL.Abstractions;
using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AngularProject.Services.ServiceStructureAbstractions;
using AutoMapper;
using Serilog;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.Services
{
    public class GenreService : IGenreServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IGenreRepository _genreRepository;
        private readonly ILogger _log = Log.ForContext<GenreService>();
        public GenreService(IUnitOfWork unitOfWork, IGenreRepository genreRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _genreRepository = genreRepository;
        }

        public async Task Create(GenreDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<GenreEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task Delete(Guid? id)
        {
            try
            {
                await _unitOfWork.Repository.Delete<GenreEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<GenreDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<GenreDTO>(await _unitOfWork.Repository.GetById<GenreEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<GenreDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<GenreDTO>>(_unitOfWork.Repository.ReadList<GenreEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<GenreDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<GenreDTO>>(_genreRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, GenreDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<GenreEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
    }
}
