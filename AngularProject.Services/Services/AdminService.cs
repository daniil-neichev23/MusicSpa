using AngularProject.DAL.Abstractions;
using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AngularProject.Services.ServiceStructureAbstractions;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Serilog;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.Services
{
    public class AdminService : IAdminServiceStructure
    {
        private readonly IAdminRepository _admin;
        private readonly IMapper _mapper;
        private readonly ILogger _log = Log.ForContext<AdminService>();
        public AdminService(IAdminRepository admin, IMapper mapper)
        {
            _admin = admin;
            _mapper = mapper;
        }
        public async Task UpdateRole(Guid id, JsonPatchDocument<UserDTO> element)
        {
            try
            {
                await _admin.UpdateRole(id, _mapper.Map<JsonPatchDocument<UserEntity>>(element));
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
            }
            catch (ArgumentException ex)
            {
                _log.Error($"{ex}", ex);
            }
        }
        public IEnumerable<UserDTO> GetAllUsers()
        {
            try
            {
                return _mapper.Map<List<UserDTO>>(_admin.GetAllUsers());
            }
            catch (ArgumentNullException ex)
            {
                _log.Error($"{ex}", ex);
                return null;
            }
        }
    }
}
