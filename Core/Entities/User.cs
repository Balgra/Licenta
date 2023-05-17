namespace Core.Entities
{
    public class User : BaseEntity
    {
        public DateTime CreatedTimeUtc { get; set; }
        public DateTime? UpdatedTimeUtc { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        //public 
    }
}
