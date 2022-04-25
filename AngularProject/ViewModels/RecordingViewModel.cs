using System;

namespace AngularProject.ViewModels
{
    public class RecordingViewModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public int TrackNumber { get; set; }
        public int Length { get; set; }
    }
}
