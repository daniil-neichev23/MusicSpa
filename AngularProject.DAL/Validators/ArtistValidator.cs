using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class ArtistValidator : AbstractValidator<ArtistEntity>
    {
        public ArtistValidator()
        {
            RuleFor(p => p.Name).NotNull().NotEmpty();
            RuleFor(p => p.Name).Length(1, 50);
        }
    }
}
