using System;

namespace MedicineReminder.Core.Models
{
    public class Notification
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Notification(string name, string description)
        {
            Name = name;
            Description = description;
        }
    }
}
