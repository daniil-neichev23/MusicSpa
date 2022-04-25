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
    public class AlbumService : IAlbumServiceStructure
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAlbumRepository _albumRepository;
        private readonly ILogger _log = Log.ForContext<AlbumService>();
        public AlbumService(IUnitOfWork unitOfWork, IAlbumRepository albumRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _albumRepository = albumRepository;
            _mapper = mapper;
        }

        public async Task Create(AlbumDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<AlbumEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}",ex);
            }
        }

        public async Task Delete(Guid? id)
        {
            try
            {
                await _unitOfWork.Repository.Delete<AlbumEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<AlbumDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<AlbumDTO>(await _unitOfWork.Repository.GetById<AlbumEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<AlbumDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<AlbumDTO>>(_unitOfWork.Repository.ReadList<AlbumEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<AlbumDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<AlbumDTO>>(_albumRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, AlbumDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<AlbumEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
    }
}
