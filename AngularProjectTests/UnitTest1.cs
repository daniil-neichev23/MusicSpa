using AngularProject.Services.ModelsDTO;
using AngularProject.Services.Services;
using AngularProject.Services.ServiceStructureAbstractions;
using Moq;
using System;
using System.Collections.Generic;
using Xunit;

namespace AngularProjectTests
{
    public class UnitTest1
    {
        [Fact]
        public void GetAlbums_All_ReturnsArtists()
        {
            //Arrange
            var mock = new Mock<IArtistServiceStructure>();
            mock.Setup(element => element.ReadList()).Returns(new List<ArtistDTO>());
            ArtistService service = new ArtistService( null, mock.Object, null);

            //Act
            var result = service.ReadList();


            string result = await emp.GetEmployeeById(1);
            Assert.Equal("JK", result);
        }
        private static IEnumerable<ArtistDTO> Multiple()
        {
            var r = new List<ArtistDTO>();
            r.Add(new ArtistDTO()
            {
                Id = new Guid(),
                Name = "P"
            });
            r.Add(new ArtistDTO()
            {
                Id = new Guid(),
                Name = "Test Two"
            });
            r.Add(new ArtistDTO()
            {
                Id = new Guid(),
                Name = "Test Three"
            });
            return r;
        }
    }
}
