using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Services
{
    public interface IMedicineService
    {
        void Add(MedicineDto medicineDto);
    }
}
