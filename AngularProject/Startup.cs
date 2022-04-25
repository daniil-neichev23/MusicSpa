    using AngularProject.DAL;
using AngularProject.DAL.Abstractions;
using AngularProject.DAL.Constants;
using AngularProject.DAL.Data;
using AngularProject.DAL.ProfilesDAL;
using AngularProject.DAL.Validators;
using AngularProject.Profiles;
using AngularProject.Services;
using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace AngularProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connection));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = AuthOptions.ISSUER,

                    ValidateAudience = true,
                    ValidAudience = AuthOptions.AUDIENCE,
                    ValidateLifetime = true,

                    IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                    ValidateIssuerSigningKey = true,
                };
            });
            services.AddCustomServices();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AlbumProfile());
                mc.AddProfile(new AlbumReviewProfile());
                mc.AddProfile(new ArtistProfile());
                mc.AddProfile(new GenreProfile());
                mc.AddProfile(new GroupMemberProfile());
                mc.AddProfile(new LabelProfile());
                mc.AddProfile(new MusicianProfile());
                mc.AddProfile(new RecordingProfile());
                mc.AddProfile(new ReviewerProfile());
                mc.AddProfile(new TrackReviewProfile());
                mc.AddProfile(new UserProfile());
                mc.AddProfile(new AlbumDtoProfile());
                mc.AddProfile(new AlbumReviewDtoProfile());
                mc.AddProfile(new ArtistDtoProfile());
                mc.AddProfile(new GenreDtoProfile());
                mc.AddProfile(new GroupMemberDtoProfile());
                mc.AddProfile(new LabelDtoProfile());
                mc.AddProfile(new MusicianDtoProfile());
                mc.AddProfile(new RecordingDtoProfile());
                mc.AddProfile(new ReviewerDtoProfile());
                mc.AddProfile(new TrackReviewDtoProfile());
                mc.AddProfile(new UserDtoProfile());
            });

            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);
            services.AddControllersWithViews().AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddFluentValidation(fv =>
                {
                    fv.ImplicitlyValidateChildProperties = true;
                    fv.ImplicitlyValidateRootCollectionElements = true;

                    fv.RegisterValidatorsFromAssemblyContaining<AlbumValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<ArtistValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<AlbumReviewValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<GenreValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<LabelValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<GroupMemberValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<MusicianValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<RecordingValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<ReviewerValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<TrackReviewValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<UserValidator>();
                });
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
