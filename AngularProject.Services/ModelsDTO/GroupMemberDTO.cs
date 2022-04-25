using System;

namespace AngularProject.Services.ModelsDTO
{
    public class GroupMemberDTO : EntityDTO
    {
        public Guid MusicianId { get; set; }
        public Guid ArtistId { get; set; }
        public bool Joined { get; set; }
        public bool Left { get; set; }
        public ArtistDTO Artist { get; set; }
        public MusicianDTO Musician { get; set; }
    }
}
