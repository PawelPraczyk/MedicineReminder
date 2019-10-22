using MedicineReminder.Data.Dtos;
using System;

namespace MedicineReminder.Data.Services
{
    public interface IEventService
    {
        void AddEvent(EventDto eventDto);
        void RemoveEvent(Guid id);
        EventDto GetEvent(Guid id);
        void EditEvent(UpdateEventDto updateEventDto);
    }
}
