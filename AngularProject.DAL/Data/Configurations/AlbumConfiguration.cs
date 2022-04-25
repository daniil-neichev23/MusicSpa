using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class AlbumConfiguration : IEntityTypeConfiguration<AlbumEntity>
    {
        public void Configure(EntityTypeBuilder<AlbumEntity> builder)
        {
            builder
                .HasKey(b => b.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Title).HasMaxLength(100).IsRequired();
            builder.Property(p => p.ArtistId).IsRequired();
            builder.Property(p => p.LabelId).IsRequired();
            builder.HasOne(p => p.Label)
                .WithMany(b => b.Albums)
                .HasForeignKey(p => p.LabelId);
            builder.HasOne(p => p.Artist)
                .WithMany(b => b.Albums)
                .HasForeignKey(p => p.ArtistId);
        }
    }
}
