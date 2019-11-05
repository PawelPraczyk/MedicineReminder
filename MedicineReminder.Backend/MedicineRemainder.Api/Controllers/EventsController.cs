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
            return new JsonResult(_eventService.GetEvent(id));
        }

        [HttpGet]
        public IActionResult GetEvents()
        {
            return new JsonResult(_eventService.GetEvents());
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
