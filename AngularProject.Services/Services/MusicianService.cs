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
    public class MusicianService : IMusicianServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IMusicianRepository _musicianRepository;
        private readonly ILogger _log = Log.ForContext<MusicianService>();
        public MusicianService(IUnitOfWork unitOfWork, IMusicianRepository musicianRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _musicianRepository = musicianRepository;
        }

        public async Task Create(MusicianDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<MusicianEntity>(element));
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
                await _unitOfWork.Repository.Delete<MusicianEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<MusicianDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<MusicianDTO>(await _unitOfWork.Repository.GetById<MusicianEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<MusicianDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<MusicianDTO>>(_unitOfWork.Repository.ReadList<MusicianEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<MusicianDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<MusicianDTO>>(_musicianRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, MusicianDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<MusicianEntity>(element));
            }
            catch (ArgumentNullException ex) { _log.Error($"{ex}", ex); }
        }
    }
}
