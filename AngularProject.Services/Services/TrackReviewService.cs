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
    public class TrackReviewService : ITrackReviewServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ITrackReviewRepository _trackReviewRepository;
        private readonly ILogger _log = Log.ForContext<TrackReviewService>();
        public TrackReviewService(IUnitOfWork unitOfWork, ITrackReviewRepository trackReviewRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _trackReviewRepository = trackReviewRepository;
        }

        public async Task Create(TrackReviewDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<TrackReviewEntity>(element));
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
                await _unitOfWork.Repository.Delete<TrackReviewEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<TrackReviewDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<TrackReviewDTO>(await _unitOfWork.Repository.GetById<TrackReviewEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<TrackReviewDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<TrackReviewDTO>>(_unitOfWork.Repository.ReadList<TrackReviewEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<TrackReviewDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<TrackReviewDTO>>(_trackReviewRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, TrackReviewDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<TrackReviewEntity>(element));
            }
            catch (ArgumentNullException ex) { _log.Error($"{ex}", ex); }
        }
    }
}
