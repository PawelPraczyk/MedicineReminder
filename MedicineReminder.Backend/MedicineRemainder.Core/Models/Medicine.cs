using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Core.Models
{
    public class Medicine
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public String Description { get; set; }

        public Medicine(string name, String description)
        {
            Name = name;
            Description = description;
        }
    }
}
