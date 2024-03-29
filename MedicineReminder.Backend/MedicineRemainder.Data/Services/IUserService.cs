﻿using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Services
{
    public interface IUserService
    {
        void Register(UserDto user);
        void Login(string email, string password);
        UserDto Get(string email);
    }
}
