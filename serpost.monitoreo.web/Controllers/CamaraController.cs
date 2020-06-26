using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using serpost.monitoreo.core.Entities;
using serpost.monitoreo.core.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serpost.monitoreo.web.Controllers
{
    [Route("[controller]")]
    
    [ApiController]
    [Authorize]
    public class CamaraController : ControllerBase
    {

        private readonly IRepositoryCamara _iRepoCamara;
        public CamaraController(IRepositoryCamara iRepoCamara)
            {
            _iRepoCamara = iRepoCamara;
        }
        // GET: api/<CamaraController>
        
        [HttpGet("user")]
        public async Task<IActionResult>   GetPerUser()
        {
            var temp = await  _iRepoCamara.GetCamaraPerUser(User.Identity.Name);
            return Ok(temp);
        }

        // GET api/<CamaraController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CamaraController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CamaraController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CamaraController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
