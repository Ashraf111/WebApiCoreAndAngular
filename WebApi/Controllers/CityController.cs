using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Data;
//using WebApi.Models;

namespace WebApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CityController : ControllerBase
  {
    private readonly DataContext dc;
    public CityController(DataContext dc)
    {
      this.dc = dc;
    }

    [HttpGet]
    public IActionResult GetCities()
    {
      var cities = dc.Cities.ToList();
      return Ok(cities);
    }

    [HttpGet("{id}")]
    public IEnumerable<string> City(int id)
    {
      return new string[] { "ab" };
    }

  }
}