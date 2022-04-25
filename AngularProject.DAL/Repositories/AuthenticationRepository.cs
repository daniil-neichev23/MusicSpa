using AngularProject.DAL.Abstractions.Auth;
using AngularProject.DAL.Constants;
using AngularProject.DAL.Data;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace AngularProject.DAL.Repositories
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly AppDbContext _context;
        public AuthenticationRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<string> Login(LoginViewModel model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user != null && user.Password == GetHash(model.Password))
            {
                var tokenDescriptor = GetToken(model.Email, GetHash(model.Password));
                if(tokenDescriptor == null)
                {
                    throw new ArgumentNullException(StringsCommands.UserDoesNotExistException);
                }
                else
                {
                    return tokenDescriptor;
                }
            }
            else
            {
                throw new ArgumentException(StringsCommands.UsernamePasswordException);
            }
        }

        public async Task Register(UserEntity model)
        {
            if (model.Id == Guid.Empty)
            {
                model.Id = Guid.NewGuid();
            }

            model.Role = Roles.User.ToString();
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user != null)
            {
                throw new ArgumentException(StringsCommands.UserExistsException);
            }
            else
            {
                model.Password = GetHash(model.Password);
                var result = await _context.Users.AddAsync(model);
                await _context.SaveChangesAsync();
            }
        }
        public UserEntity GetUserDetails(Guid id)
        {
            var user =  _context.Users.FirstOrDefault(p=>p.Id == id);

            if(user== null)
            {
                throw new ArgumentNullException(StringsCommands.UserDoesNotExistException);
            }
            else
            {
                return user;
            }
        }

        private string GetToken(string userName, string password)
        {
            var identity = GetIdentity(userName, password);

            if (identity == null)
            {
                return null;
            }

            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(),
                                    SecurityAlgorithms.HmacSha256)
                );


            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
        private ClaimsIdentity GetIdentity(string userName, string password)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == userName && x.Password == password);

            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Name),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
                };
                var claimsIdentity =
                    new ClaimsIdentity(claims, StringsCommands.Token, ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }
            return null;
        }
        public string GetHash(string password)
        {
            using (var hash = SHA256.Create())
            {
                return string.Concat(hash.ComputeHash(Encoding.UTF8.GetBytes(password)).Select(x => x.ToString("X2")));
            }
        }
        public async Task<bool> IsAdmin(IEnumerable<Claim> claims)
        {
            if (!IsAuthorized(claims))
                return false;
            var userName = claims.ToList()[0].Value;
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userName);
            if (user.Role == "Admin") return true;
            return false;
        }

        public bool IsAuthorized(IEnumerable<Claim> claims)
        {
            if (claims != null && claims.Count() != 0) return true;
            return false;
        }
    }
}
