using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.DAL.ModelsForDb
{
    public class UserEntity 
    {
        [Key]
        public Guid Id { get; set; }

        [MaxLength(30)]
        [Required]
        public string Name { get; set; }

        [MinLength(11)]
        [MaxLength(40)]
        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [MinLength(6)]
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }

        [BindNever]
        [MaxLength(15)]
        public string Role { get; set; }
    }
}
