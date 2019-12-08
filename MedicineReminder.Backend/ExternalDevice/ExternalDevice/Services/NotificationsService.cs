using ExternalDevice.Models;
using ExternalDevice.RestClient;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ExternalDevice.Services
{
    public class NotificationsService
    {
        public async Task<List<Notifications>> GetNotifications()
        {
            RestClient<Notifications> restClient = new RestClient<Notifications>();

            var list = await restClient.GetAsync();
            return list;
        }
    }
}
