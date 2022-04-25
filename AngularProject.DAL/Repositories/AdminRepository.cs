using AngularProject.DAL.Abstractions;
using AngularProject.DAL.Constants;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.DAL.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly AppDbContext _context;
        public AdminRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<UserEntity> GetAllUsers()
        {
            return _context.Users.AsNoTracking();
        }

        public async Task UpdateRole(Guid id, JsonPatchDocument<UserEntity> element)
        {
            var getUser = await _context.Users.FirstOrDefaultAsync(user=> user.Id == id);

            if (getUser != null)
            {

                if(element!= null)
                {
                    bool flag = Enum.IsDefined(typeof(Roles), element.Operations.Select(p => p.value)
                        .ElementAt(0).ToString().TrimStart('/'));

                    if (flag)
                    {
                        element.ApplyTo(getUser);
                        await _context.SaveChangesAsync();
                    }

                }
            }
            else
            {
                throw new ArgumentNullException(StringsCommands.UserDoesNotExistException);
            }
        }
    }
}
