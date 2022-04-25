using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class MusicianConfiguration : IEntityTypeConfiguration<MusicianEntity>
    {
        public void Configure(EntityTypeBuilder<MusicianEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.LastName).HasMaxLength(50).IsRequired();
            builder.Property(p => p.FirstName).HasMaxLength(50).IsRequired();
        }
    }
}
