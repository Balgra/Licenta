using Core.Entities;

namespace backend.DTOs
{
    public class OfferToReturnDto
    {
        public int Id { get; set; }
        public string? AuthorName { get; set; }
        public string Description { get; set; }
        public DateTime Created { get; set; }

        public string? Company_Name { get; set; }
        public string Company_Email { get; set; }

        public string Transaction { get; set; }

        public DateTime? Deadline { get; set; }



    }
}
