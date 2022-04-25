using System.Collections.Generic;

namespace AngularProject.Services.ModelsDTO
{
    public class GenreDTO : EntityDTO
    {
        public string Name { get; set; }
        public ICollection<RecordingDTO> Recordings { get; set; }
    }
}
