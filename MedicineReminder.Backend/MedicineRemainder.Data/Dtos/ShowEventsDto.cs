using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Dtos
{
    public class ShowEventsDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }
    }
}
