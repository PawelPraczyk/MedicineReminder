using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Core.Models
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }
        public DateTime RemaindDate { get; set; }

        public Event(string name, string message, DateTime remaindDate)
        {
            Name = name;
            Message = message;
            RemaindDate = remaindDate;
            Date = DateTime.Now;
        }
    }
}
