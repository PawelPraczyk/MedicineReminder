using System;
using System.Collections.Generic;
using System.Text;
using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using MedicineReminder.Data.Repositories;

namespace MedicineReminder.Data.Services
{
    public class MedicineService : IMedicineService
    {
        private readonly IMedicineRepository _medicineRepository;

        public MedicineService( IMedicineRepository medicineRepository )
        {
            _medicineRepository = medicineRepository;
        }

        public void Add(MedicineDto medicineDto)
        {
            var medicine = new Medicine(medicineDto.Name, medicineDto.Description);
            _medicineRepository.Create(medicine);
        }
    }
}
