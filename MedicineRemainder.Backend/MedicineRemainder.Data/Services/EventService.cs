using System;
using MedicineRemainder.Core.Models;
using MedicineRemainder.Data.Dtos;
using MedicineRemainder.Data.Repositories;

namespace MedicineRemainder.Data.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRespository;

        public EventService(IEventRepository eventRepository)
        {
            _eventRespository = eventRepository;
        }

        public void AddEvent(EventDto eventDto)
        {
            var _event = new Event(eventDto.Name, eventDto.Message, eventDto.RemaindDate);
            _eventRespository.Create(_event);
        }

        public void EditEvent(UpdateEventDto updateEventDto)
        {
            _eventRespository.Update(updateEventDto);
        }

        public EventDto GetEvent(Guid id)
        {
            return _eventRespository.Get(id);
        }

        public void RemoveEvent(Guid id)
        {
            _eventRespository.Remove(id);
        }
    }
}
