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
    public class ReviewerService : IReviewerServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IReviewerRepository _reviewerRepository;
        private readonly ILogger _log = Log.ForContext<ReviewerService>();
        public ReviewerService(IUnitOfWork unitOfWork, IReviewerRepository reviewerRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _reviewerRepository = reviewerRepository;
            _mapper = mapper;
        }

        public async Task Create(ReviewerDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<ReviewerEntity>(element));
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
                await _unitOfWork.Repository.Delete<ReviewerEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<ReviewerDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<ReviewerDTO>(await _unitOfWork.Repository.GetById<ReviewerEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<ReviewerDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<ReviewerDTO>>(_unitOfWork.Repository.ReadList<ReviewerEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<ReviewerDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<ReviewerDTO>>(_reviewerRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, ReviewerDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<ReviewerEntity>(element));
            }
            catch (ArgumentNullException ex) { _log.Error($"{ex}", ex); }
        }
    }
}
