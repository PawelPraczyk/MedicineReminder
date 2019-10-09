using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Core.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }
    }
}
