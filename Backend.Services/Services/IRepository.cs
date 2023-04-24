using Backend.Services.Entities;

namespace Backend.Services.Services
{
    public interface IRepository<TEntity> where TEntity : Offer
    {
        Task AddAsync(TEntity entity);
        Task DeleteAsync(TEntity entity);
        Task<ICollection<TEntity>> GetAsync();
    }
}

