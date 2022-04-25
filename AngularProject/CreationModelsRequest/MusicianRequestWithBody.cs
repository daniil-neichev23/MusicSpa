using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularProject.CreationModelsRequest
{
    public class MusicianRequestWithBody:EntityAbstraction
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        [Range(typeof(DateTime), "01/01/1800", "01/01/2015")]
        public DateTime BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public ICollection<GroupMemberRequestWithBody> GroupMembers { get; set; }
    }
}
