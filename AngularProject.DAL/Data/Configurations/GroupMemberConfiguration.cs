using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularProject.DAL.Data.Configurations
{
    public class GroupMemberConfiguration : IEntityTypeConfiguration<GroupMemberEntity>
    {
        public void Configure(EntityTypeBuilder<GroupMemberEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Joined).IsRequired();
            builder.Property(p => p.Left).IsRequired();
            builder.HasOne(p => p.Artist)
                .WithMany(b => b.GroupMembers)
                .HasForeignKey(p => p.ArtistId);
            builder.HasOne(p => p.Musician)
                 .WithMany(b => b.GroupMembers)
                 .HasForeignKey(p => p.MusicianId);
        }
    }
}
