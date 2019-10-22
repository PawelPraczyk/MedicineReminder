using MedicineRemainder.Core.Models;
using MedicineRemainder.Data.Dtos;
using System;

namespace MedicineRemainder.Data.Repositories
{
    public interface IEventRepository
    {
        void Create(Event _event);
        EventDto Get(Guid id);
        void Remove(Guid id);
        void Update(UpdateEventDto updateEventDto);
    }
}
