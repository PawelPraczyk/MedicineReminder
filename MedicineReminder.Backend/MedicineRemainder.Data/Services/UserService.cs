using MedicineReminder.Core.Models;
using MedicineReminder.Data.Dtos;
using MedicineReminder.Data.Repositories;
using System;

namespace MedicineReminder.Data.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserDto Get(string email)
        {
            return _userRepository.Get(email);
        }

        public void Login(string email, string password)
        {
            var user = _userRepository.Get(email);
            if(user == null)
            {
                throw new Exception("Invalid credentials.");
            }

            if(password == user.Password)
            {
                return;
            }

            throw new Exception("Invalid credentials!");
        }

        public void Register(UserDto _user)
        {
            var user = _userRepository.Get(_user.Email);
            if(user != null)
            {
                throw new Exception($"User with emial: ${_user.Email} alredy exists.");
            }
            var user1 = new User(_user.Email, _user.Password, _user.Name);
            _userRepository.Create(user1);
        }
    }
}
