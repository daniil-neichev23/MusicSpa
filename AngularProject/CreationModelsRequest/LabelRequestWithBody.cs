using System.Collections.Generic;

namespace AngularProject.CreationModelsRequest
{
    public class LabelRequestWithBody : EntityAbstraction
    {
        public string Name { get; set; }
        public ICollection<AlbumRequestWithBody> Albums { get; set; }
    }
}
