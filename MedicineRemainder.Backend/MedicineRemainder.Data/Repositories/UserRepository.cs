using MedicineRemainder.Core.Models;
using MedicineRemainder.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MedicineRemainder.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        // here should be db context 
        private static ISet<User> _users = new HashSet<User>();

        public void Create(User user)
        {
            _users.Add(user);
        }

        public User Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public User Get(string email)
        {
            var user = _users.Single(x => x.Email == email.ToLowerInvariant());
            if (user != null)
            {
                return user;
            }
            else
            {
                throw new Exception(String.Format("User with {0} email doesnt exist!", email));
            }
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
