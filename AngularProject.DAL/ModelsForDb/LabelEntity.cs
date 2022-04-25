using System.Collections.Generic;

namespace AngularProject.DAL.ModelsForDb
{
    public class LabelEntity : EntityAbstraction
    {
        public string Name { get; set; }
        public ICollection<AlbumEntity> Albums { get; set; }
    }
}
