using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class AlbumReviewConfiguration : IEntityTypeConfiguration<AlbumReviewEntity>
    {
        public void Configure(EntityTypeBuilder<AlbumReviewEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Ranking).IsRequired();
            builder.Property(p => p.Comment).HasMaxLength(50);
            builder.HasOne(p => p.Album)
                .WithMany(b => b.AlbumReviews)
                .HasForeignKey(p => p.AlbumId);
            builder.HasOne(p => p.Reviewer)
                .WithMany(b => b.AlbumReviews)
                .HasForeignKey(p => p.ReviewerId);
        }
    }
}
