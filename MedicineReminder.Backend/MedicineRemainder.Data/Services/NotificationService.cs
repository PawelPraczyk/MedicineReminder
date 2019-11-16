using System;
using System.Collections.Generic;
using System.Linq;
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

        public IEnumerable<NotificationDto> GetAll()
        {
            var notifications = _notificationRepository.Get();
            var notificationDto = new List<NotificationDto>();

            notificationDto = notifications.Select(x => new NotificationDto()
            {
                Description = x.Description,
                Name = x.Name
            }).ToList();

            return notificationDto;
        }

        public void RegisterNotification(NotificationDto notificationDto)
        {
            var notification = new Notification(notificationDto.Name, notificationDto.Description);
            _notificationRepository.Create(notification);
        }

        public void RemoveNotification(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
