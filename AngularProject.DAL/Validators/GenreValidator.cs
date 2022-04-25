using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class GenreValidator : AbstractValidator<GenreEntity>
    {
        public GenreValidator()
        {
            RuleFor(p => p.Name).NotNull().NotEmpty();
            RuleFor(p => p.Name).Length(1, 20);
        }
    }
}
