using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Repositories
{
    public interface INotificationRepository
    {
        void Create(Notification notification);
        NotificationDto Get(Guid id);
        IEnumerable<Notification> Get();
        void Remove(Guid id);
    }
}
