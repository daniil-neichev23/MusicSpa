using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class RecordingValidator : AbstractValidator<RecordingEntity>
    {
        public RecordingValidator()
        {
            RuleFor(p => p.Title).NotNull().NotEmpty();
            RuleFor(p => p.Title).Length(1, 50);
            RuleFor(p => p.AlbumId).NotNull();
            RuleFor(p => p.GenreId).NotNull();
            RuleFor(p => p.TrackNumber).NotNull().InclusiveBetween(1, 25);
        }
    }
}
