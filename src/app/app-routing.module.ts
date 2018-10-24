import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SchedultComponent } from './schedult/schedult.component';
import { WatchComponent } from './watch/watch.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BioComponent } from './bio/bio.component';
import { CVComponent } from './cv/cv.component';
import { AwardsComponent } from './awards/awards.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { StageComponent } from './stage/stage.component';
import { BackstageComponent } from './backstage/backstage.component';
import { OperaComponent } from './opera/opera.component';
import { PersonalComponent } from './personal/personal.component';
import { FestivalComponent } from './festival/festival.component';
import { FestivalPhotosComponent } from './festival-photos/festival-photos.component';
import { MusicComponent } from './music/music.component';
import { RecordingsComponent } from './recordings/recordings.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "About", redirectTo: "/About/Bio", pathMatch: "full" },
  {
    path: "About", component: AboutComponent,
    children: [
      { path: "Bio", component: BioComponent },
      { path: "CV", component: CVComponent },
      { path: "Awards", component: AwardsComponent },
      { path: "Reviews", component: ReviewsComponent }
    ]
  },
  { path: "Gallery", redirectTo: "/Gallery/Portraits", pathMatch: "full" },
  {
    path: "Gallery", component: GalleryComponent,
    children: [
      { path: "Portraits", component: PortraitsComponent },
      { path: "Stage", component: StageComponent },
      { path: "Backstage", component: BackstageComponent },
      { path: "Opera", component: OperaComponent },
      { path: "Personal", component: PersonalComponent }
    ]
  },
  {
    path: "Projects", component: ProjectsComponent,
    children: [
      { path: "Festival", component: FestivalComponent },
      { path: "FestivalPhotos", component: FestivalPhotosComponent }
    ]
  },
  { path: "Contact", component: ContactComponent },
  { path: "Schedult", component: SchedultComponent },
  { path: "Watch&Listen", component: WatchComponent,
  children: [
    { path: "Music", component: MusicComponent },
    { path: "Recordings", component: RecordingsComponent }
  ]
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
