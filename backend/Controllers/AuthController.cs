
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Xml;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Core.Requests;
using Core.Data;
using Core.Entities;

namespace backend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly SHA256 _sha256;
        private readonly IConfiguration _configuration;
        public AuthController(ApplicationDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _sha256 = SHA256.Create();
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _dbContext.Users.ToListAsync();

            return Ok(users);
        }

        [HttpPost("register")]
        public async Task<IActionResult> AddUser(AddUserRequest User)
        {
            var userEmail = await _dbContext.Users.Where(u => u.Email == User.Email).FirstOrDefaultAsync();
            var userUsername = await _dbContext.Users.Where(u => u.Username == User.Username).FirstOrDefaultAsync();

            if (userEmail != null)
            {
                return BadRequest(new { errorMessage = "Email already in use" });
            }

            if (userUsername != null)
            {
                return BadRequest(new { errorMessage = "Username is already taken" });
            }

            var result = new User() { Username = User.Username, Email = User.Email, Password = Convert.ToHexString(_sha256.ComputeHash(Encoding.UTF8.GetBytes(User.Password))) };
            await _dbContext.Users.AddAsync(result);
            await _dbContext.SaveChangesAsync();

            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest User)
        {
            var user = await _dbContext.Users.Where(u => u.Username == User.Username && u.Password == Convert.ToHexString(_sha256.ComputeHash(Encoding.UTF8.GetBytes(User.Password)))).FirstOrDefaultAsync();

            if (user == null)
                return BadRequest(new { error = "User does not exist or wrong password!" });

            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

            var tokenHandler = new JwtSecurityTokenHandler();
            var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim("userId", user.Id.ToString())
                };
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                   SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            return Ok(new { Token = token });
        }
   


    }
}
