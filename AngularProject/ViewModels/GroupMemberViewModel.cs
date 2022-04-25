using System;

namespace AngularProject.ViewModels
{
    public class GroupMemberViewModel
    {
        public Guid Id { get; set; }
        public bool Joined { get; set; }
        public bool Left { get; set; }
    }
}
