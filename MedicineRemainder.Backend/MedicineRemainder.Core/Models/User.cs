using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Core.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public List<Event> Events { get; set; }

        public User(string email, string password, string name)
        {
            Id = Guid.NewGuid();
            Email = email;
            Password = password;
            Name = name;
        }
    }
}
