using AngularProject.DAL.ModelsForDb;
using Microsoft.AspNetCore.JsonPatch;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularProject.DAL.Abstractions
{
    public interface IAdminRepository
    {
        //public Task UpdateRole(Guid id, UserEntity element);
        public Task UpdateRole(Guid id, JsonPatchDocument<UserEntity> element);
        public IEnumerable<UserEntity> GetAllUsers();
    }
}
