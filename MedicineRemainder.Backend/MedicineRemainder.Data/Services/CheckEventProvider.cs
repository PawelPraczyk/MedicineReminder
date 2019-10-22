using MedicineRemainder.Data.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicineRemainder.Data.Services
{
    public class CheckEventProvider
    {
        private readonly MedicineRemainderContext _medicineRemainderContext;

        public async Task CheckForRemainder()
        {
            while(true)
            {
                var date = DateTime.Now;
                var rangePositive = date.AddMinutes(1);
                var rangeNegative = date.AddMinutes(-1);
                if (_medicineRemainderContext.Events.Any(g => g.RemaindDate <= rangePositive && g.Date >= rangeNegative))
                {

                }

                await Task.Delay(1000);
            }
        }
    }
}
