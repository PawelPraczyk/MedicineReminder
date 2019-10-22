using MedicineRemainder.Core.Models;
using MedicineRemainder.Data.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MedicineRemainder.Data.Repositories
{
    public class MedicineRepository : IMedicineRepository
    {
        private readonly MedicineRemainderContext _medicineRemainderContext;

        public MedicineRepository(MedicineRemainderContext medicineRemainderContext)
        {
            _medicineRemainderContext = medicineRemainderContext;
        }

        public void Create(Medicine medicine)
        {
            _medicineRemainderContext.Add(medicine);
            _medicineRemainderContext.SaveChanges();
        }

        public Medicine Get(Guid id)
        {
            var medicine = _medicineRemainderContext.Medicines.SingleOrDefault(x => x.Id == id);

            if(medicine != null)
            {
                return medicine;
            }
            else
            {
                throw new Exception($"Medicine with id {id} not found!");
            }
        }

        public void Remove(Guid id)
        {
            var medicine = _medicineRemainderContext.Medicines.SingleOrDefault(x => x.Id == id);

            if (medicine != null)
            {
                _medicineRemainderContext.Remove(medicine);
            }
            else
            {
                throw new Exception($"Medicine with id {id} not found!");
            }
        }
    }
}
