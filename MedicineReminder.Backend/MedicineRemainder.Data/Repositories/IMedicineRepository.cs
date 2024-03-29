﻿using MedicineReminder.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Repositories
{
    public interface IMedicineRepository
    {
        void Create(Medicine medicine);
        Medicine Get(Guid id);
        void Remove(Guid id);
    }
}
