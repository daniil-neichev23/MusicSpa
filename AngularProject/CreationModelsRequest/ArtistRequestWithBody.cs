using System.Collections.Generic;

namespace AngularProject.CreationModelsRequest
{
    public class ArtistRequestWithBody : EntityAbstraction
    {
        public string Name { get; set; }
        public ICollection<AlbumRequestWithBody> Albums { get; set; }
        public ICollection<GroupMemberRequestWithBody> GroupMembers { get; set; }
    }
}
