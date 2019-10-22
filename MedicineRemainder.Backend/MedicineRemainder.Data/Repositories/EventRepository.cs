using MedicineRemainder.Core.Models;
using MedicineRemainder.Data.Database;
using MedicineRemainder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MedicineRemainder.Data.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly MedicineRemainderContext _medicineRemainderContext;

        public EventRepository(MedicineRemainderContext medicineRemainderContext)
        {
            _medicineRemainderContext = medicineRemainderContext;
        }

        public void Create(Event _event)
        {
            _medicineRemainderContext.Add(_event);
            _medicineRemainderContext.SaveChanges();
        }

        public EventDto Get(Guid id)
        {
            var _event = _medicineRemainderContext.Events.SingleOrDefault(x => x.Id == id);
            if (_event != null)
            {
                return new EventDto
                {
                    Message = _event.Message,
                    Name = _event.Name,
                    RemaindDate = _event.RemaindDate
                };
            } else
            {
                throw new Exception($"Couldn't find the event with {id} id");
            }
        }

        public void Remove(Guid id)
        {
            var _event = _medicineRemainderContext.Events.SingleOrDefault(x => x.Id == id);
            if (_event != null)
            {
                _medicineRemainderContext.Remove(_event);
            }
            else
            {
                throw new Exception($"Couldn't find the event with {id} id");
            }
        }

        public void Update(UpdateEventDto updateEventDto)
        {
            var _event = _medicineRemainderContext.Events.SingleOrDefault(x => x.Id == updateEventDto.Id);
            if (_event != null)
            {
                _event.Message = updateEventDto.Message;
                _event.Name = updateEventDto.Name;
                _event.RemaindDate = updateEventDto.RemaindDate;
            }
            else
            {
                throw new Exception($"Couldn't find the event with {updateEventDto.Id} id");
            }
        }
    }
}
