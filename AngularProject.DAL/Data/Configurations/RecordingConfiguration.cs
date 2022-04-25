using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class RecordingConfiguration : IEntityTypeConfiguration<RecordingEntity>
    {
        public void Configure(EntityTypeBuilder<RecordingEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.AlbumId).IsRequired();
            builder.Property(p => p.TrackNumber).IsRequired();
            builder.Property(p => p.Title).HasMaxLength(100).IsRequired();
            builder.Property(p => p.GenreId).IsRequired();
            builder.Property(p => p.Length).IsRequired();
            builder.HasOne(p => p.Genre)
                .WithMany(b => b.Recordings)
                .HasForeignKey(p => p.GenreId);
            builder.HasOne(p => p.Album)
                .WithMany(b => b.Recordings)
                .HasForeignKey(p => p.AlbumId);
        }
    }
}
