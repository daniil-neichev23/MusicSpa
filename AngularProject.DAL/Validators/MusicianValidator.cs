using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class MusicianValidator : AbstractValidator<MusicianEntity>
    {
        public MusicianValidator()
        {
            RuleFor(p => p.LastName).NotNull().NotEmpty();
            RuleFor(p => p.LastName).Length(1, 50);
            RuleFor(p => p.FirstName).NotNull().NotEmpty();
            RuleFor(p => p.FirstName).Length(1, 50);
            RuleFor(p => p.BirthDate).NotNull();
        }
    }
}
