using ExternalDevice.ViewModels;
using MedicineReminder.Core.Models;
using MedicineReminder.Data.Database;
using MedicineReminder.Data.Dtos;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MedicineReminder.Data.Services
{
    public class CheckEventProvider : IHostedService
    {
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly MainViewModel _model = new MainViewModel();

        public CheckEventProvider(IServiceScopeFactory scopeFactory)
        {
            _scopeFactory = scopeFactory;
          //  _model = model;
        }
        //private readonly INotificationService _notificationService;
        private Timer _timer;

        //public CheckEventProvider(INotificationService notificationService)
        //{
        //    _notificationService = notificationService;
        //}

        public void CheckForRemainder(object state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var _medicineReminderContext = scope.ServiceProvider.GetRequiredService<MedicineReminderContext>();

                var date = DateTime.Now;
                var rangePositive = date.AddSeconds(1);
                var rangeNegative = date.AddSeconds(-1);
                if (_medicineReminderContext.Events.Any(g => g.RemaindDate <= rangePositive && g.RemaindDate >= rangeNegative))
                {
                    var remaid = _medicineReminderContext.Events.Single(g => g.RemaindDate <= rangePositive && g.RemaindDate >= rangeNegative);
                    _model.Vibrate();
                    _medicineReminderContext.Add(new Notification(remaid.Name, remaid.Message));
                    _medicineReminderContext.SaveChanges();
                }
            }
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(CheckForRemainder, null, 0, 1000);
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
