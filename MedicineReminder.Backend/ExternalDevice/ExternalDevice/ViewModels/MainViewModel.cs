using ExternalDevice.Models;
using ExternalDevice.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;

namespace ExternalDevice.ViewModels
{
    public class MainViewModel 
    {
        //private List<Notifications> _notificationsList;

        //public List<Notifications> NotificationsList
        //{
        //    get { return _notificationsList; }
        //    set
        //    {
        //        _notificationsList = value;
        //        OnPropertyChanged();
        //    }
        //}

        //public void Handle_Clicked()
        //{
        //    InitializeDataAsync();
        //}

        //public MainViewModel()
        //{
        //    InitializeDataAsync();
        //}

        //private async Task InitializeDataAsync()
        //{
        //    var notificationsService = new NotificationsService();

        //    NotificationsList = await notificationsService.GetNotifications();
        //}

        //public event PropertyChangedEventHandler PropertyChanged;

        //protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        //{
        //    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        //}
        public void Vibrate()
        {
            try
            {
                // Or use specified time
                var duration = TimeSpan.FromSeconds(5);
                Vibration.Vibrate(duration);
            }
            catch (FeatureNotSupportedException ex)
            {
                // Feature not supported on device
            }
            catch (Exception ex)
            {
                // Other error has occurred.
            }
        }
    }
}
