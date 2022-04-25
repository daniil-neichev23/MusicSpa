using System;

namespace AngularProject.DAL.ModelsForDb
{
    public class GroupMemberEntity : EntityAbstraction
    {
        public Guid MusicianId { get; set; }
        public Guid ArtistId { get; set; }
        public bool Joined { get; set; }
        public bool Left { get; set; }
        public ArtistEntity Artist { get; set; }
        public MusicianEntity Musician { get; set; }
    }
}
