using AngularProject.DAL.Constants;
using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class UserValidator : AbstractValidator<UserEntity>
    {
        public UserValidator()
        {
            RuleFor(p => p.Name).NotNull().Length(1,50).NotEmpty();
            RuleFor(p => p.Email).NotEmpty().WithMessage(StringsCommands.EmailRequired).EmailAddress()
                .WithMessage(StringsCommands.InvalidEmail);
            RuleFor(p => p.Password).NotNull().Length(6, 70).NotEmpty();
            RuleFor(p => p.PhoneNumber).NotNull();
            RuleFor(p => p.Role).NotNull().NotEmpty();
        }
    }
}
