using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class ReviewerConfiguration : IEntityTypeConfiguration<ReviewerEntity>
    {
        public void Configure(EntityTypeBuilder<ReviewerEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Joined).IsRequired();
        }
    }
}
