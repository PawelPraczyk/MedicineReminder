﻿using MedicineRemainder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Data.Services
{
    public interface IUserService
    {
        void Register(UserDto user);
    }
}