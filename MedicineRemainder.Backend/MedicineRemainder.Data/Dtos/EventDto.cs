using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Data.Dtos
{
    public class EventDto
    {
        public string Name { get; set; }
        public string Message { get; set; }
        public DateTime RemaindDate { get; set; }
    }
}
