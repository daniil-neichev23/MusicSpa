using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class AlbumValidator : AbstractValidator<AlbumEntity>
    {
        public AlbumValidator()
        {
            RuleFor(p => p.Title).NotNull().NotEmpty();
            RuleFor(p => p.Title).Length(1,50);
            RuleFor(p => p.ArtistId).NotNull();
            RuleFor(p => p.LabelId).NotNull();
            RuleFor(p => p.Year).InclusiveBetween(1800,2021);
        }
    }
}
