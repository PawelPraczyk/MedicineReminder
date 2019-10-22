using MedicineRemainder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Data.Services
{
    public interface IMedicineService
    {
        void Add(MedicineDto medicineDto);
    }
}
