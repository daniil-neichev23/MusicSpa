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
    public class LabelService : ILabelServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILabelRepository _labelRepository;
        private readonly ILogger _log = Log.ForContext<LabelService>();
        public LabelService(IUnitOfWork unitOfWork, ILabelRepository labelRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _labelRepository = labelRepository;
        }

        public async Task Create(LabelDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<LabelEntity>(element));
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
                await _unitOfWork.Repository.Delete<LabelEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<LabelDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<LabelDTO>(await _unitOfWork.Repository.GetById<LabelEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<LabelDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<LabelDTO>>(_unitOfWork.Repository.ReadList<LabelEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<LabelDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<LabelDTO>>(_labelRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, LabelDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<LabelEntity>(element));
            }
            catch (ArgumentNullException ex) { _log.Error($"{ex}", ex); }
        }
    }
}
