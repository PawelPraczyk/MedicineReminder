using System;
using System.Collections.Generic;
using System.Linq;
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
            _medicineReminderContext.Notifications.Add(notification);
            _medicineReminderContext.SaveChanges();
        }

        public NotificationDto Get(Guid id)
        {
            var notification = _medicineReminderContext.Notifications.SingleOrDefault(x => x.Id == id);
            if (notification == null)
            {
                throw new Exception($"Couldnt find notification with {id} id!");
            }
            return new NotificationDto
            {
                Name = notification.Name,
                Description = notification.Description
            };
        }

        public IEnumerable<Notification> Get()
        {
            return _medicineReminderContext.Notifications.ToList();
        }

        public void Remove(Guid id)
        {
            var notification = _medicineReminderContext.Notifications.SingleOrDefault(x => x.Id == id);
            if (notification == null)
            {
                throw new Exception($"Couldnt find notification with {id} id!");
            }

            _medicineReminderContext.Notifications.Remove(notification);
            _medicineReminderContext.SaveChanges();
        }
    }
}
