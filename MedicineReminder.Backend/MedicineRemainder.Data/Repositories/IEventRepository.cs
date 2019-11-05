using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;

namespace MedicineReminder.Data.Repositories
{
    public interface IEventRepository
    {
        void Create(Event _event);
        EventDto Get(Guid id);
        IEnumerable<Event> Get();
        void Remove(Guid id);
        void Update(UpdateEventDto updateEventDto);
    }
}
