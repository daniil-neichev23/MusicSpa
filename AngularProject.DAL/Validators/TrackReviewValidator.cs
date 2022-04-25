using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class TrackReviewValidator : AbstractValidator<TrackReviewEntity>
    {
        public TrackReviewValidator()
        {
            RuleFor(p => p.Comment).Length(1, 50);
            RuleFor(p => p.RecordingId).NotNull();
            RuleFor(p => p.ReviewerId).NotNull();
            RuleFor(p => p.Ranking).InclusiveBetween(1, 5);
        }
    }
}
