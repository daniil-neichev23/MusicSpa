using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.Services.ModelsDTO
{
    public class UserDTO 
    {   
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }

        [BindNever]
        public string Role { get; set; }
    }
}
