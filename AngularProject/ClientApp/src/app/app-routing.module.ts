import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserChangeComponent } from "./admin/user-changes/user-change.component";
import { AdminComponent } from "./admin/admin.component";
import { AlbumCreateComponent } from "./admin/album-crud/album-create.component";
import { AlbumListComponent } from "./admin/album-crud/album-list.component";
import { AlbumUpdateComponent } from "./admin/album-crud/album-update.component";
import { AlbumReviewCreateComponent } from "./admin/album-review-crud/album-review-create.component";
import { AlbumReviewListComponent } from "./admin/album-review-crud/album-review-list.component";
import { AlbumReviewUpdateComponent } from "./admin/album-review-crud/album-review-update.component";
import { ArtistCreateComponent } from "./admin/artist-crud/artist-create.component";
import { ArtistListComponent } from "./admin/artist-crud/artist-list.component";
import { ArtistUpdateComponent } from "./admin/artist-crud/artist-update.component";
import { GenreCreateComponent } from "./admin/genre-crud/genre-create.component";
import { GenreListComponent } from "./admin/genre-crud/genre-list.component";
import { GenreUpdateComponent } from "./admin/genre-crud/genre-update.component";
import { GroupMemberCreateComponent } from "./admin/group-member-crud/group-member-create.component";
import { GroupMemberListComponent } from "./admin/group-member-crud/group-member-list.component";
import { GroupMemberUpdateComponent } from "./admin/group-member-crud/group-member-update.component";
import { LabelCreateComponent } from "./admin/label-crud/label-create.component";
import { LabelListComponent } from "./admin/label-crud/label-list.component";
import { LabelUpdateComponent } from "./admin/label-crud/label-update.component";
import { MusicianCreateComponent } from "./admin/musician-crud/musician-create.component";
import { MusicianListComponent } from "./admin/musician-crud/musician-list.component";
import { MusicianUpdateComponent } from "./admin/musician-crud/musician-update.component";
import { RecordingCreateComponent } from "./admin/recording-crud/recording-create.component";
import { RecordingListComponent } from "./admin/recording-crud/recording-list.component";
import { RecordingUpdateComponent } from "./admin/recording-crud/recording-update.component";
import { ReviewerCreateComponent } from "./admin/reviewer-crud/reviewer-create.component";
import { ReviewerListComponent } from "./admin/reviewer-crud/reviewer-list.component";
import { ReviewerUpdateComponent } from "./admin/reviewer-crud/reviewer-update.component";
import { TrackReviewCreateComponent } from "./admin/track-review-crud/track-review-create.component";
import { TrackReviewListComponent } from "./admin/track-review-crud/track-review-list.component";
import { TrackReviewUpdateComponent } from "./admin/track-review-crud/track-review-update.component";
// import { AlbumFormComponent } from "./admin/album-crud/album-form.component";
import { AuthGuard } from "./auth/auth.guard";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./user/login/login.component";
import { RegisterComponent } from "./user/register/register.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./admin/user-changes/user-list.component";

const routes: Routes = [
    {path:'', redirectTo:'/user/login', pathMatch: 'full'},
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    {path:'user', redirectTo:'user/login'},
    {
    path:'user',component:UserComponent,
    children: [
    {path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    ]},
    {
    path:'admin',redirectTo:"admin/album-list",
    },
    { path:'admin', component:AdminComponent,
    children: [
    { path: 'album-list', component: AlbumListComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'role-change/:userId', component: UserChangeComponent },
    { path:'album-list/create', component: AlbumCreateComponent},
    { path:'album-list/update/:albumId', component: AlbumUpdateComponent},
    { path: 'artist-list', component: ArtistListComponent },
    { path:'artist-list/create', component: ArtistCreateComponent},
    { path:'artist-list/update/:artistId', component: ArtistUpdateComponent},
    { path: 'label-list', component: LabelListComponent },
    { path:'label-list/create', component: LabelCreateComponent},
    { path:'label-list/update/:labelId', component: LabelUpdateComponent},
    { path: 'genre-list', component: GenreListComponent },
    { path:'genre-list/create', component: GenreCreateComponent},
    { path:'genre-list/update/:genreId', component: GenreUpdateComponent},
    { path: 'group-member-list', component: GroupMemberListComponent },
    { path:'group-member-list/create', component: GroupMemberCreateComponent},
    { path:'group-member-list/update/:groupMemberId', component: GroupMemberUpdateComponent},
    { path: 'musician-list', component: MusicianListComponent },
    { path:'musician-list/create', component: MusicianCreateComponent},
    { path:'musician-list/update/:musicianId', component: MusicianUpdateComponent},
    { path: 'album-review-list', component: AlbumReviewListComponent },
    { path:'album-review-list/create', component: AlbumReviewCreateComponent},
    { path:'album-review-list/update/:albumReviewId', component: AlbumReviewUpdateComponent},
    { path: 'recording-list', component: RecordingListComponent },
    { path:'recording-list/create', component: RecordingCreateComponent},
    { path:'recording-list/update/:albumReviewId', component: RecordingUpdateComponent},
    { path: 'track-review-list', component: TrackReviewListComponent },
    { path:'track-review-list/create', component: TrackReviewCreateComponent},
    { path:'track-review-list/update/:albumReviewId', component: TrackReviewUpdateComponent},
    { path: 'reviewer-list', component: ReviewerListComponent },
    { path:'reviewer-list/create', component: ReviewerCreateComponent},
    { path:'reviewer-list/update/:albumReviewId', component: ReviewerUpdateComponent},
    ]
},
{path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }