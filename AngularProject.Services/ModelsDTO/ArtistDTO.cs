using System.Collections.Generic;

namespace AngularProject.Services.ModelsDTO
{
    public class ArtistDTO : EntityDTO
    { 
        //public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<AlbumDTO> Albums { get; set; }
        public ICollection<GroupMemberDTO> GroupMembers { get; set; }
    }
}
