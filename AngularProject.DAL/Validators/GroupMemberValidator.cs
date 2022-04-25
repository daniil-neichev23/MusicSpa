using AngularProject.DAL.ModelsForDb;
using FluentValidation;

namespace AngularProject.DAL.Validators
{
    public class GroupMemberValidator : AbstractValidator<GroupMemberEntity>
    {
        public GroupMemberValidator()
        {
            RuleFor(p => p.Joined).NotNull();
            RuleFor(p => p.Left).NotNull();
            RuleFor(p => p.MusicianId).NotNull();
            RuleFor(p => p.ArtistId).NotNull();
        }
    }
}
