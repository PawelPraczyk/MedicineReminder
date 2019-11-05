using System;
using System.Collections.Generic;
using System.Linq;
using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using MedicineReminder.Data.Repositories;

namespace MedicineReminder.Data.Services
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

        public IEnumerable<ShowEventsDto> GetEvents()
        {
            IEnumerable<Event> events = _eventRespository.Get();
            var showEventsDto = new List<ShowEventsDto>();
            showEventsDto = events.Select(x => new ShowEventsDto()
            {
                Id = x.Id,
                Name = x.Name,
                Message = x.Message,
                Date = x.RemaindDate
            }).ToList();

            return showEventsDto;
        }

        public void RemoveEvent(Guid id)
        {
            _eventRespository.Remove(id);
        }
    }
}
