using AngularProject.DAL.Data.Configurations;
using AngularProject.DAL.ModelsForDb;
using Microsoft.EntityFrameworkCore;

namespace AngularProject.DAL.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<AlbumEntity> Albums { get; set; }
        public DbSet<AlbumReviewEntity> AlbumReviews { get; set; }
        public DbSet<ArtistEntity> Artists { get; set; }
        public DbSet<GenreEntity> Genres { get; set; }
        public DbSet<GroupMemberEntity> GroupMembers { get; set; }
        public DbSet<LabelEntity> Labels { get; set; }
        public DbSet<RecordingEntity> Recordings { get; set; }
        public DbSet<ReviewerEntity> Reviewers { get; set; }
        public DbSet<TrackReviewEntity> TrackReviews { get; set; }
        public DbSet<MusicianEntity> Musicians { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new AlbumConfiguration().Configure(modelBuilder.Entity<AlbumEntity>());
            new AlbumReviewConfiguration().Configure(modelBuilder.Entity<AlbumReviewEntity>());
            new ArtistConfiguration().Configure(modelBuilder.Entity<ArtistEntity>());
            new GenreConfiguration().Configure(modelBuilder.Entity<GenreEntity>());
            new GroupMemberConfiguration().Configure(modelBuilder.Entity<GroupMemberEntity>());
            new LabelConfiguration().Configure(modelBuilder.Entity<LabelEntity>());
            new MusicianConfiguration().Configure(modelBuilder.Entity<MusicianEntity>());
            new RecordingConfiguration().Configure(modelBuilder.Entity<RecordingEntity>());
            new ReviewerConfiguration().Configure(modelBuilder.Entity< ReviewerEntity>());
            new TrackReviewConfiguration().Configure(modelBuilder.Entity<TrackReviewEntity>());
            new UserConfiguration().Configure(modelBuilder.Entity<UserEntity>());
        }
    }
}
