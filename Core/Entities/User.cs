﻿using Microsoft.AspNetCore.Identity;

namespace Core.Entities


{
    public class User : IdentityUser
    {
        public DateTime CreatedTimeUtc { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        //public 
    }
}
