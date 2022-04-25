using AngularProject.DAL.ModelsForDb;
using AngularProject.Services.ModelsDTO;
using AutoMapper;

namespace AngularProject.DAL.ProfilesDAL
{
    public class LabelDtoProfile : Profile
    {
        public LabelDtoProfile()
        {
            CreateMap<LabelEntity, LabelDTO>().ReverseMap();
        }
    }
    //public class LabelDTOConverter : ITypeConverter<Label, LabelDTO>
    //{
    //    public LabelDTO Convert(Label source, LabelDTO destination, ResolutionContext context)
    //    {
    //        return new LabelDTO
    //        {
    //            Id = source.Id,
    //            Name = source.Name,
    //            Albums = source.Albums
    //        };
    //    }
    //}
}
