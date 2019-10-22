using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicineRemainder.Data.Dtos;
using MedicineRemainder.Data.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MedicineRemainder.Api.Controllers
{
    [Route("api/medicines")]
    public class MedicineController : ControllerBase
    {
        private readonly IMedicineService _medicineService;

        public MedicineController(IMedicineService medicineService)
        {
            _medicineService = medicineService;
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] MedicineDto medicineDto)
        {
            _medicineService.Add(medicineDto);
        }
    }
}
