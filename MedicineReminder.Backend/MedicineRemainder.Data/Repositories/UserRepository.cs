using MedicineReminder.Core.Models;
using MedicineReminder.Data.Database;
using MedicineReminder.Data.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MedicineReminder.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        // here should be db context 
        private readonly MedicineReminderContext _medicineRemainderContext;

        public UserRepository(MedicineReminderContext medicineRemainderContext)
        {
            _medicineRemainderContext = medicineRemainderContext;
        }

        public void Create(User user)
        {
            _medicineRemainderContext.Add(user);
            _medicineRemainderContext.SaveChanges();
        }

        public UserDto Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public UserDto Get(string email)
        {
            if (String.IsNullOrEmpty(email))
            {
                throw new Exception("Email need to have value!");
            }
            var user = _medicineRemainderContext.Users.SingleOrDefault(x => x.Email == email.ToLowerInvariant());
            return new UserDto
            {
                Email = user.Email,
                Password = user.Password,
                Name = user.Name
            };
        }

        public void Remove(Guid id)
        {
            var user = _medicineRemainderContext.Users.SingleOrDefault(x => x.Id == id);
            if (user != null)
            {
                _medicineRemainderContext.Remove(user);
            }
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
