using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class ReviewerValidator : AbstractValidator<ReviewerEntity>
    {
        public ReviewerValidator()
        {
            RuleFor(p => p.Joined).NotNull();
        }
    }
}
