using System.Collections.Generic;

namespace AngularProject.CreationModelsRequest
{
    public class GenreRequestWithBody : EntityAbstraction
    {
        public string Name { get; set; }
        public ICollection<RecordingRequestWithBody> Recordings { get; set; }
    }
}
