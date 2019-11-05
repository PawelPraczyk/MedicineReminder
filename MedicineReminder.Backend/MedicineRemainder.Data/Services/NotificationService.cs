using System;
using System.Collections.Generic;
using System.Text;
using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using MedicineReminder.Data.Repositories;

namespace MedicineReminder.Data.Services
{
    public class NotificationService : INotificationService
    {
        private readonly INotificationRepository _notificationRepository;

        public NotificationService(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }

        public void RegisterNotification(NotificationDto notificationDto)
        {
            var notification = new Notification(notificationDto.Name, notificationDto.Description);
            _notificationRepository.Create(notification);
        }
    }
}
