
using Microsoft.AspNetCore.Mvc;
using Core.Data;
using Core.Entities;
using Core.Models;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using Core.Requests;
using System.Text;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IConfiguration _configuration;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AuthController(ApplicationDbContext dbContext,
            IConfiguration configuration, UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _dbContext = dbContext;
            _configuration = configuration;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        private string GeneratePassword(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&?%$@";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[(new Random()).Next(s.Length)]).ToArray());
        }

        [HttpPost("register")]
        public async Task<IActionResult> AddUser(AddOrUpdateUser cmd)
        {
            var existingUser = await _userManager.FindByEmailAsync(cmd.Email);

            if (existingUser is null)
            {

                var newUser = new ApplicationUser()
                {
                    FirstName = cmd.FirstName,
                    LastName = cmd.LastName,
                    Email = cmd.Email,
                    UserName = cmd.Email,
                    EmailConfirmed = true
                };

                var generatedPassword = GeneratePassword(32);
                var result = await _userManager.CreateAsync(newUser, generatedPassword);

                if (!result.Succeeded)
                {
                    throw new ValidationException(string.Join(", ", result.Errors.Select(p => p.Description)));
                }

                if (!await _roleManager.RoleExistsAsync(cmd.Role))
                {
                    var newRole = new IdentityRole { Name = cmd.Role };
                    await _roleManager.CreateAsync(newRole);
                }

                var rolesResult = await _userManager.AddToRoleAsync(newUser, cmd.Role);

                return Ok(generatedPassword);
            }


            return BadRequest();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginUser User)
        {

            var user = await _userManager.FindByEmailAsync(User.Email);
            if (user is null)
                throw new ValidationException("AAAAUser does not exist or wrong password!");

            var isValidPassword = await _userManager.CheckPasswordAsync(user, User.password);
            if (!isValidPassword)
                throw new ValidationException("AAAUser does not exist or wrong password!");

            var roles = await _userManager.GetRolesAsync(user);

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var claims = new List<Claim>
                {
                    new Claim("UserId", user.Id),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(ClaimTypes.Name, user.FirstName + " " + user.LastName)
                };
            foreach (var role in roles)
                claims.Add(new Claim(ClaimTypes.Role, role));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                   SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(tokenHandler.WriteToken(token));
        }
    }
}
