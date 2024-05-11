﻿using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyApi.DTO;
using MyApi.Model.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MyApi.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using MyApi.Model.Repositories;
namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfCode unit;

        public UserController(IUnitOfCode unit)
        {
            this.unit = unit;
        }


        #region Confirm Email
        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string email, string token)
        {
            var user = unit.UserManager.Users.FirstOrDefault(e => e.Email == email);
            if (user == null)
                return NotFound("Invalid User");
            var result = await unit.UserManager.ConfirmEmailAsync(user, token);
            if (result.Succeeded)
                return Ok("Email Confirmed successfully");
            return BadRequest(result.Errors.FirstOrDefault());
        }
        #endregion

        #region Send Email Confirmation
        [HttpGet("SendEmailConfirmation")]
        public async Task<IActionResult> SendconfirmEmail(string email)
        {
            var user = unit.UserManager.Users.FirstOrDefault(e => e.Email == email);
            if (user == null)
                return NotFound();
            var token = await unit.UserManager.GenerateEmailConfirmationTokenAsync(user);
            // crete link that lead to endpoint ConfirmEmail 
            var link = Url.Action("ConfirmEmail", "User", new { email = email, token = token }, Request.Scheme, Request.Host.ToString());
            Email Reciever = new Email()
            {
                To = email,
                Title = "Confirm Email",
                Body = link
            };
            EmailService.SendEmail(Reciever);
            return Ok();


        }
        #endregion

        #region Register
        [HttpPost("Register")]

        public async Task<IActionResult> Register([FromForm] RegisterationDTO registerationDTO)
        {
            if (ModelState.IsValid)
            {
                var user = Mapper.RegisDTO2User(registerationDTO);

                var result = await unit.UserManager.CreateAsync(user, registerationDTO.Password);
                if (result.Succeeded)
                {
                    //confirm email
                    SendconfirmEmail(user.Email);
                    return Ok();
                }
                else
                {
                    DocumentServices.DeleteFile(user.ImageUrl);
                    return BadRequest(result.Errors.FirstOrDefault());
                }
            }
            return BadRequest(ModelState);
        }
        #endregion

        #region Login
        [HttpPost("Login")]
        [EnableCors]
        public async Task<IActionResult> Login([FromForm] LoginDTO loginDTO)
        {
            if (ModelState.IsValid == false)
                return Unauthorized(ModelState);
            var user = await unit.UserManager.FindByNameAsync(loginDTO.UserName);

            if (user == null)
                return NotFound("Username not found");
            if (user.EmailConfirmed == false)
                return NotFound("Email not confirmed");

            bool check = await unit.UserManager.CheckPasswordAsync(user, loginDTO.Password);
            if (check == false)
                return NotFound("Password is wrong");

            var token = Tokenizer.GenerateToken(loginDTO, unit);
            return Ok(token);
        }
        #endregion


        #region Get User Info
        [HttpGet("GetUserInfo")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetUserInfo()
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            var user = unit.UserManager.Users.Include(e => e.UserGroups).ThenInclude(e => e.Cource).FirstOrDefault(e => e.UserName == userName);
            if (user == null)
                return NotFound();
            var userDTO = Mapper.User2UserDTO(user);
            return Ok(userDTO);
        }
        #endregion

        #region update user info
        [HttpGet("GetRoles")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetRole(int CourceId)
        {
            var userame = UserServices.WhoAmI(User.Claims);
            if (userame == null)
                return Unauthorized();

            var US = unit.UserGroup.GetByUserAndCource(userame, CourceId);
            if (US == null)
                return Ok(4);
            return Ok(US.rule);

        }
<<<<<<< HEAD
        #endregion
=======
        
>>>>>>> 00cf06d7ae8e5687ae9aaf56081cae36b7a9d54f

        


    }
}
