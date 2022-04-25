using System.ComponentModel.DataAnnotations;

namespace AngularProject.DAL
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Please enter your Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter your password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
