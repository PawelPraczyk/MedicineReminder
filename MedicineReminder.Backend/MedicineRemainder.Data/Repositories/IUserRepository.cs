﻿using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Repositories
{
    public interface IUserRepository
    {
        UserDto Get(Guid id);
        UserDto Get(string email);
        void Create(User user);
        void Remove(Guid id);
    }
}
