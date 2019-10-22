using MedicineReminder.Data.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicineReminder.Data.Services
{
    public class CheckEventProvider
    {
        private readonly MedicineReminderContext _medicineReminderContext;

        public async Task CheckForRemainder()
        {
            while(true)
            {
                var date = DateTime.Now;
                var rangePositive = date.AddMinutes(1);
                var rangeNegative = date.AddMinutes(-1);
                if (_medicineReminderContext.Events.Any(g => g.RemaindDate <= rangePositive && g.Date >= rangeNegative))
                {

                }

                await Task.Delay(1000);
            }
        }
    }
}
