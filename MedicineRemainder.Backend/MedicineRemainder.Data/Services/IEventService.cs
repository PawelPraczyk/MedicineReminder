using MedicineRemainder.Data.Dtos;
using System;

namespace MedicineRemainder.Data.Services
{
    public interface IEventService
    {
        void AddEvent(EventDto eventDto);
        void RemoveEvent(Guid id);
        EventDto GetEvent(Guid id);
        void EditEvent(UpdateEventDto updateEventDto);
    }
}
