using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace AngularProject.DAL.Constants
{
    public class AuthOptions
    {
        public const string ISSUER = "AngularProject_JWT_Server";
        public const string AUDIENCE = "AngularProject_JWT_Client";
        const string KEY = "papa_v_zdanii_na_zadanii23";
        public const int LIFETIME = 1;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
