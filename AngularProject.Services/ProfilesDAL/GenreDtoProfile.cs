using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class GenreDtoProfile : Profile
    {
        public GenreDtoProfile()
        {
            CreateMap<GenreEntity, GenreDTO>().ReverseMap();
        }
    }
    //public class GenreDTOConverter : ITypeConverter<Genre, GenreDTO>
    //{
    //    public GenreDTO Convert(Genre source, GenreDTO destination, ResolutionContext context)
    //    {
    //        return new GenreDTO
    //        {
    //            Id = source.Id,
    //            Name = source.Name,
    //            Recordings = source.Recordings
    //        };
    //    }
    //}
}
