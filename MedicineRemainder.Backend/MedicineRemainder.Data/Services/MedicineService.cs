using System;
using System.Collections.Generic;
using System.Text;
using MedicineRemainder.Core.Models;
using MedicineRemainder.Data.Dtos;
using MedicineRemainder.Data.Repositories;

namespace MedicineRemainder.Data.Services
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
