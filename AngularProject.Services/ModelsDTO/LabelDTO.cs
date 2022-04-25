using System.Collections.Generic;

namespace AngularProject.Services.ModelsDTO
{
    public class LabelDTO : EntityDTO
    {
        public string Name { get; set; }
        public ICollection<AlbumDTO> Albums { get; set; }
    }
}
