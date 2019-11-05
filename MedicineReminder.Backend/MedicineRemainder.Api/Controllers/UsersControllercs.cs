using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicineReminder.Data.Dtos;
using MedicineReminder.Data.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MedicineReminder.Api.Controllers
{
    [Route("api/users")]
    public class UsersControllercs : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersControllercs(IUserService userService)
        {
            _userService = userService;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Register([FromBody] UserDto user)
        {
            _userService.Register(user);
            return Ok();
        }

        [HttpGet("{email}")]
        public IActionResult GetUser(string email)
        {
            return new JsonResult(_userService.Get(email));
        }
    }
}
