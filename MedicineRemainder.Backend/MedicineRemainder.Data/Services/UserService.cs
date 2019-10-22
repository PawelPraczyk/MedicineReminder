﻿using MedicineRemainder.Core.Models;
using MedicineRemainder.Data.Dtos;
using MedicineRemainder.Data.Repositories;
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

        public void Register(UserDto _user)
        {
            var user = _userRepository.Get(_user.Email);
            if(user != null)
            {
                throw new Exception($"User with emial: ${_user.Email} alredy exists.");
            }
            user = new User(_user.Email, _user.Password, _user.Name);
            _userRepository.Create(user);
        }
    }
}