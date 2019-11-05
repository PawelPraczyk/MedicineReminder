using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;

namespace MedicineReminder.Data.Services
{
    public interface IEventService
    {
        void AddEvent(EventDto eventDto);
        void RemoveEvent(Guid id);
        EventDto GetEvent(Guid id);
        IEnumerable<ShowEventsDto> GetEvents();
        void EditEvent(UpdateEventDto updateEventDto);
    }
}
