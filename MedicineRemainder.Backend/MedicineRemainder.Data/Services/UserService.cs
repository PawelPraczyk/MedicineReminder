using MedicineRemainder.Core.Models;
using MedicineRemainder.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Data.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public void Register(string email, string name, string password)
        {
            var user = _userRepository.Get(email);
            if(user != null)
            {
                throw new Exception($"User with emial: ${email} alredy exists.");
            }
            user = new User(email, password, name);
            _userRepository.Create(user);
        }
    }
}
