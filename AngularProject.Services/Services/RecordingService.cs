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
    public class RecordingService : IRecordingServiceStructure 
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IRecordingRepository _recordingRepository;
        private readonly ILogger _log = Log.ForContext<RecordingService>();
        public RecordingService(IUnitOfWork unitOfWork, IRecordingRepository recordingRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _recordingRepository = recordingRepository;
        }

        public async Task Create(RecordingDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<RecordingEntity>(element));
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
                await _unitOfWork.Repository.Delete<RecordingEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<RecordingDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<RecordingDTO>(await _unitOfWork.Repository.GetById<RecordingEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<RecordingDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<RecordingDTO>>(_unitOfWork.Repository.ReadList<RecordingEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<RecordingDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<RecordingDTO>>(_recordingRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, RecordingDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<RecordingEntity>(element));
            }
            catch (ArgumentNullException ex) { _log.Error($"{ex}", ex); }
        }
    }
}
