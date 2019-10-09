using MedicineRemainder.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Data.Services
{
    public interface IUserService
    {
        void Register(string email, string name, string password);
    }
}
