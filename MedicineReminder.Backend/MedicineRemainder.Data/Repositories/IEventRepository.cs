using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using System;

namespace MedicineReminder.Data.Repositories
{
    public interface IEventRepository
    {
        void Create(Event _event);
        EventDto Get(Guid id);
        void Remove(Guid id);
        void Update(UpdateEventDto updateEventDto);
    }
}
