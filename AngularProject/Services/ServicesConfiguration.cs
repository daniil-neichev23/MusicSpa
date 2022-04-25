using AngularProject.DAL.Abstractions;
using AngularProject.DAL.Abstractions.Auth;
using AngularProject.DAL.Abstractions.Entity;
using AngularProject.DAL.Repositories;
using AngularProject.DAL.Repositories.GenericRepository;
using AngularProject.Services.Services;
using AngularProject.Services.ServiceStructureAbstractions;
using Microsoft.Extensions.DependencyInjection;

namespace AngularProject.Services
{
    public static class ServicesConfiguration
    {
        public static void AddCustomServices(this IServiceCollection services)
        {
            //services.AddScoped<IAuthorization, AuthorizationService>();
            services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
            services.AddScoped<IAuthenticationServiceStructure, AuthenticationService>();
            services.AddScoped<IRepository, GenericRepository>();
            services.AddScoped<IArtistServiceStructure, ArtistService>();
            services.AddScoped<IAdminServiceStructure, AdminService>();
            services.AddScoped<IAlbumServiceStructure, AlbumService>();
            services.AddScoped<IAlbumReviewServiceStructure, AlbumReviewService>();
            services.AddScoped<IGenreServiceStructure, GenreService>();
            services.AddScoped<IGroupMemberServiceStructure, GroupMemberService>();
            services.AddScoped<ILabelServiceStructure, LabelService>();
            services.AddScoped<IMusicianServiceStructure, MusicianService>();
            services.AddScoped<IRecordingServiceStructure, RecordingService>();
            services.AddScoped<IReviewerServiceStructure, ReviewerService>();
            services.AddScoped<ITrackReviewServiceStructure, TrackReviewService>();
            services.AddScoped<IAlbumRepository, AlbumRepository>();
            services.AddScoped<IArtistRepository, ArtistRepository>();
            services.AddScoped<IAdminRepository, AdminRepository>();
            services.AddScoped<IAlbumReviewRepository, AlbumReviewRepository>();
            services.AddScoped<IGenreRepository, GenreRepository>();
            services.AddScoped<IGroupMemberRepository, GroupMemberRepository>();
            services.AddScoped<IMusicianRepository, MusicianRepository>();
            services.AddScoped<ILabelRepository, LabelRepository>();
            services.AddScoped<IRecordingRepository, RecordingRepository>();
            services.AddScoped<IReviewerRepository, ReviewerRepository>();
            services.AddScoped<ITrackReviewRepository, TrackReviewRepository>();
        }
    }
}
