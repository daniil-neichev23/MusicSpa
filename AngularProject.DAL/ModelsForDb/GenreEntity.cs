using System.Collections.Generic;

namespace AngularProject.DAL.ModelsForDb
{
    public class GenreEntity : EntityAbstraction
    {
        public string Name { get; set; }
        public ICollection<RecordingEntity> Recordings { get; set; }
    }
}
