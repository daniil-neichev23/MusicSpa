using System;

namespace AngularProject.CreationModelsRequest
{
    public class GroupMemberRequestWithBody : EntityAbstraction
    {
        public Guid MusicianId { get; set; }
        public Guid ArtistId { get; set; }
        public bool Joined { get; set; }
        public bool Left { get; set; }
        public ArtistRequestWithBody Artist { get; set; }
        public MusicianRequestWithBody Musician { get; set; }
    }
}
