import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { UserService } from './_services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AlbumCreateComponent } from './admin/album-crud/album-create.component';
import { AdminComponent } from './admin/admin.component';
import { AlbumService } from './_services/entity-services/album-service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";  
import { MatCardModule } from '@angular/material/card';  
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatMenuModule } from '@angular/material/menu';  
import { MatNativeDateModule } from '@angular/material/core';  
import { MatIconModule } from '@angular/material/icon';  
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatTooltipModule } from '@angular/material/tooltip';  
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatRadioModule } from '@angular/material/radio';  
import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatSelectModule } from '@angular/material/select';  
import { MatSnackBarModule } from '@angular/material/snack-bar';  
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';  
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { NgMarqueeModule } from 'ng-marquee';
import { AlbumListComponent } from './admin/album-crud/album-list.component';
import { AlbumUpdateComponent } from './admin/album-crud/album-update.component';
import { ArtistService } from './_services/entity-services/artist-service';
import { LabelService } from './_services/entity-services/label-service';
import { ArtistListComponent } from './admin/artist-crud/artist-list.component';
import { ArtistCreateComponent } from './admin/artist-crud/artist-create.component';
import { ArtistUpdateComponent } from './admin/artist-crud/artist-update.component';
import { LabelCreateComponent } from './admin/label-crud/label-create.component';
import { LabelListComponent } from './admin/label-crud/label-list.component';
import { LabelUpdateComponent } from './admin/label-crud/label-update.component';
import { AlbumReviewService } from './_services/entity-services/album-review-service';
import { GenreService } from './_services/entity-services/genre-service';
import { GroupMemberService } from './_services/entity-services/group-member-service';
import { MusicianService } from './_services/entity-services/musician-service';
import { RecordingService } from './_services/entity-services/recording-service';
import { ReviewerService } from './_services/entity-services/reviewer-service';
import { TrackReviewService } from './_services/entity-services/track-review-service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlbumReviewCreateComponent } from './admin/album-review-crud/album-review-create.component';
import { AlbumReviewUpdateComponent } from './admin/album-review-crud/album-review-update.component';
import { AlbumReviewListComponent } from './admin/album-review-crud/album-review-list.component';
import { GenreUpdateComponent } from './admin/genre-crud/genre-update.component';
import { GenreCreateComponent } from './admin/genre-crud/genre-create.component';
import { GenreListComponent } from './admin/genre-crud/genre-list.component';
import { GroupMemberUpdateComponent } from './admin/group-member-crud/group-member-update.component';
import { GroupMemberCreateComponent } from './admin/group-member-crud/group-member-create.component';
import { GroupMemberListComponent } from './admin/group-member-crud/group-member-list.component';
import { MusicianUpdateComponent } from './admin/musician-crud/musician-update.component';
import { MusicianCreateComponent } from './admin/musician-crud/musician-create.component';
import { MusicianListComponent } from './admin/musician-crud/musician-list.component';
import { RecordingCreateComponent } from './admin/recording-crud/recording-create.component';
import { RecordingListComponent } from './admin/recording-crud/recording-list.component';
import { RecordingUpdateComponent } from './admin/recording-crud/recording-update.component';
import { ReviewerCreateComponent } from './admin/reviewer-crud/reviewer-create.component';
import { ReviewerListComponent } from './admin/reviewer-crud/reviewer-list.component';
import { ReviewerUpdateComponent } from './admin/reviewer-crud/reviewer-update.component';
import { TrackReviewCreateComponent } from './admin/track-review-crud/track-review-create.component';
import { TrackReviewListComponent } from './admin/track-review-crud/track-review-list.component';
import { TrackReviewUpdateComponent } from './admin/track-review-crud/track-review-update.component';
import { AdminService } from './_services/admin-service';
import { UserChangeComponent } from './admin/user-changes/user-change.component';
import { UserListComponent } from './admin/user-changes/user-list.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UserListComponent,
    UserChangeComponent,
    AppComponent,
    AlbumCreateComponent,
    AlbumListComponent,
    AlbumReviewUpdateComponent,
    AlbumReviewCreateComponent,
    AlbumReviewListComponent,
    GenreUpdateComponent,
    GenreCreateComponent,
    GenreListComponent,
    GroupMemberUpdateComponent,
    GroupMemberCreateComponent,
    GroupMemberListComponent,
    MusicianUpdateComponent,
    MusicianCreateComponent,
    MusicianListComponent,
    AlbumUpdateComponent,
    ArtistListComponent,
    ArtistCreateComponent,
    ArtistUpdateComponent,
    LabelCreateComponent,
    LabelListComponent,
    LabelUpdateComponent,
    RecordingCreateComponent,
    RecordingListComponent,
    RecordingUpdateComponent,
    ReviewerCreateComponent,
    ReviewerListComponent,
    ReviewerUpdateComponent,
    TrackReviewCreateComponent,
    TrackReviewListComponent,
    TrackReviewUpdateComponent,
    // AlbumFormComponent,
    AdminComponent,
    NavMenuComponent,
     HomeComponent,
    // CounterComponent,
    // FetchDataComponent,
     LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    // .withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule,  
    MatCheckboxModule,  
    MatSelectModule,  
    MatSnackBarModule,  
    MatTableModule,  
    CdkTableModule,  
    MatPaginatorModule,
    NgMarqueeModule,
    NgbModule,
    ToastrModule.forRoot({
      progressBar:true
    }),
    BsDatepickerModule.forRoot(),
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent, pathMatch: 'full' },
    //   { path: 'counter', component: CounterComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    //   {path:'user',component:UserComponent},
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent },
    // ])
  ],
  providers: [UserService,  AlbumService,
     ArtistService, LabelService, AlbumReviewService, GenreService,
     GroupMemberService, MusicianService, RecordingService, ReviewerService, TrackReviewService,
     AdminService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
