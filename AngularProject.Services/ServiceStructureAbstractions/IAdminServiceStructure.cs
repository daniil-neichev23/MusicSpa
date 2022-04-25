using AngularProject.Services.ModelsDTO;
using Microsoft.AspNetCore.JsonPatch;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.Services.ServiceStructureAbstractions
{
    public interface IAdminServiceStructure
    {
        public Task UpdateRole(Guid id, JsonPatchDocument<UserDTO> element);
        public IEnumerable<UserDTO> GetAllUsers();
    }
}
