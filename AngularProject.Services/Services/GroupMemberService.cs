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
    public class GroupMemberService : IGroupMemberServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IGroupMemberRepository _groupMemberRepository;
        private readonly ILogger _log = Log.ForContext<GroupMemberService>();
        public GroupMemberService(IUnitOfWork unitOfWork, IGroupMemberRepository groupMemberRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _groupMemberRepository = groupMemberRepository;
        }

        public async Task Create(GroupMemberDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<GroupMemberEntity>(element));
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
                await _unitOfWork.Repository.Delete<GroupMemberEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<GroupMemberDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<GroupMemberDTO>(await _unitOfWork.Repository.GetById<GroupMemberEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<GroupMemberDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<GroupMemberDTO>>(_unitOfWork.Repository.ReadList<GroupMemberEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<GroupMemberDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<GroupMemberDTO>>(_groupMemberRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id, GroupMemberDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<GroupMemberEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
    }
}
