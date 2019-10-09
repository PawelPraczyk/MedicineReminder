using MedicineRemainder.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Core.Repositories
{
    public interface IUserRepository
    {
        User Get(Guid id);
        User Get(string email);
        void Create(User user);
        void Update(User user);
        void Remove(Guid id);
    }
}
