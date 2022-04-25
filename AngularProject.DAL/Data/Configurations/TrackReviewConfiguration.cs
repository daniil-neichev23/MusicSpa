using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class TrackReviewConfiguration : IEntityTypeConfiguration<TrackReviewEntity>
    {
        public void Configure(EntityTypeBuilder<TrackReviewEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Comment).HasMaxLength(500).IsRequired();
            builder.Property(p => p.Ranking).IsRequired();
            builder.HasOne(p => p.Reviewer)
                .WithMany(b => b.TrackReviews)
                .HasForeignKey(p => p.ReviewerId);
            builder.HasOne(p => p.Recording)
                .WithMany(b => b.TrackReviews)
                .HasForeignKey(p => p.RecordingId);
        }
    }
}
