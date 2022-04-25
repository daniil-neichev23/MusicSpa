using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class AlbumReviewValidator : AbstractValidator<AlbumReviewEntity>
    {
        public AlbumReviewValidator()
        {
            RuleFor(p => p.Comment).Length(1, 50);
            RuleFor(p => p.ReviewerId).NotNull();
            RuleFor(p => p.AlbumId).NotNull();
            RuleFor(p => p.Ranking).InclusiveBetween(1, 5);
        }
    }
}
