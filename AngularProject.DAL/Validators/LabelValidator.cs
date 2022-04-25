using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class LabelValidator : AbstractValidator<LabelEntity>
    {
        public LabelValidator()
        {
            RuleFor(p => p.Name).NotNull().NotEmpty();
            RuleFor(p => p.Name).Length(1, 50);
        }
    }
}
