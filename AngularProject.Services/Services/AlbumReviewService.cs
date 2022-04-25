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
    public class AlbumReviewService : IAlbumReviewServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAlbumReviewRepository _albumReviewRepository;
        private readonly ILogger _log = Log.ForContext<AlbumReviewService>();
        private readonly IMapper _mapper;
        public AlbumReviewService(IUnitOfWork unitOfWork, IAlbumReviewRepository albumReviewRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _albumReviewRepository = albumReviewRepository;
            _mapper = mapper;
        }

        public async Task Create(AlbumReviewDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<AlbumReviewEntity>(element));
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
                await _unitOfWork.Repository.Delete<AlbumReviewEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<AlbumReviewDTO> GetById(Guid? id)
        {
            try
            {
                var result = await _unitOfWork.Repository.GetById<AlbumReviewEntity>(id);
                return _mapper.Map<AlbumReviewDTO>(result);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<AlbumReviewDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<AlbumReviewDTO>>(_unitOfWork.Repository.ReadList<AlbumReviewEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<AlbumReviewDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<AlbumReviewDTO>>(_albumReviewRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, AlbumReviewDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<AlbumReviewEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
    }
}
