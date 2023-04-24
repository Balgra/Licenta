namespace Backend.Services.Entities
{
    public class User
    {
        public int Id { get; set; }
        public DateTime CreatedTimeUtc { get; set; }
        public DateTime? UpdatedTimeUtc { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
