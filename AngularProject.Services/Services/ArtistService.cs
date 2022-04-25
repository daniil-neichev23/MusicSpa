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
    public class ArtistService : IArtistServiceStructure
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger _log = Log.ForContext<ArtistService>();
        private readonly IArtistRepository _artistRepository;

        public ArtistService(IUnitOfWork unitOfWork, IArtistRepository artistRepository,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _artistRepository = artistRepository;
            _mapper = mapper;
        }

        public async Task Create(ArtistDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Create(_mapper.Map<ArtistEntity>(element));
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
                await _unitOfWork.Repository.Delete<ArtistEntity>(id);
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }

        public async Task<ArtistDTO> GetById(Guid? id)
        {
            try
            {
                return _mapper.Map<ArtistDTO>(await _unitOfWork.Repository.GetById<ArtistEntity>(id));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public IEnumerable<ArtistDTO> ReadList()
        {
            try
            {
                return _mapper.Map<List<ArtistDTO>>(_unitOfWork.Repository.ReadList<ArtistEntity>());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
        public IEnumerable<ArtistDTO> ReadListWithForeign()
        {
            try
            {
                return _mapper.Map<List<ArtistDTO>>(_artistRepository.ReadListWithForeign());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }

        public async Task Update(Guid id ,ArtistDTO element)
        {
            try
            {
                await _unitOfWork.Repository.Update(_mapper.Map<ArtistEntity>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
    }
}
