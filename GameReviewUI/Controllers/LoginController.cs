using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GameReviewUI.Models;
//using AutoMapper;

namespace GameReviewUI.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/login")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public void TestFunction(LoginViewModel loginViewModel)
        {
            Console.WriteLine(loginViewModel.Username + ", " + loginViewModel.Password + " functie wordt aangeroepen! :D");
        }
    }
}
