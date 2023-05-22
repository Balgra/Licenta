using AutoMapper;
using backend.DTOs;
using Core.Entities;

namespace backend.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Offer, OfferToReturnDto>()
                .ForMember(d => d.Description, o => o.MapFrom(S => S.Description.Id))
                .ForMember(d => d.Transaction, o => o.MapFrom(S => S.Transaction.Id));
         }
    }
}
