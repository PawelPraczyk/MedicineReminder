using System;
using System.Collections.Generic;
using System.Text;
using MedicineReminder.Core.Models;
using MedicineReminder.Data.Database;
using MedicineReminder.Data.Dtos;

namespace MedicineReminder.Data.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly MedicineReminderContext _medicineReminderContext;

        public NotificationRepository(MedicineReminderContext medicineReminderContext)
        {
            _medicineReminderContext = medicineReminderContext;
        }

        public void Create(Notification notification)
        {
            _medicineReminderContext.Add(notification);
            _medicineReminderContext.SaveChanges();
        }

        public NotificationDto Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Notification> Get()
        {
            throw new NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
