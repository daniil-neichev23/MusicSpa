using System.Collections.Generic;

namespace AngularProject.DAL.ModelsForDb
{
    public class ArtistEntity : EntityAbstraction
    { 
        public string Name { get; set; }
        public ICollection<AlbumEntity> Albums { get; set; }
        public ICollection<GroupMemberEntity> GroupMembers { get; set; }
    }
}
