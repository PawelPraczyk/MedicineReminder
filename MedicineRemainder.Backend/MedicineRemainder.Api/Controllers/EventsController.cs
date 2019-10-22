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
    [Route("api/events")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }
        // POST api/<controller>
        [HttpPost]
        public IActionResult Add([FromBody] EventDto eventDto)
        {
            _eventService.AddEvent(eventDto);
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetEvent(Guid id)
        {
            var eventDto = _eventService.GetEvent(id);
            return new JsonResult(eventDto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _eventService.RemoveEvent(id);
            return Ok();
        }
        
        [HttpPut]
        public IActionResult Update([FromBody] UpdateEventDto updateEventDto)
        {
            _eventService.EditEvent(updateEventDto);
            return Ok();
        }

    }
}
