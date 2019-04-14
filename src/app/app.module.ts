import { SliderComponent } from './slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GelleryComponent } from './gellery/gellery.component';
import { WatchComponent } from './watch/watch.component';
import { ProjectsComponent } from './projects/projects.component';
import { SchedultComponent } from './schedult/schedult.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ToTopComponent } from './to-top/to-top.component';
import { AboutHomeComponent } from './about-home/about-home.component';
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
import { NewAwardComponent } from './new-award/new-award.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { CardComponent } from './card/card.component';
import { NoyYetComponent } from './noy-yet/noy-yet.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    ContactComponent,
    GelleryComponent,
    WatchComponent,
    ProjectsComponent,
    SchedultComponent,
    AboutComponent,
    GalleryComponent,
    SliderComponent,
    ToTopComponent,
    AboutHomeComponent,
    BioComponent,
    CVComponent,
    AwardsComponent,
    ReviewsComponent,
    PortraitsComponent,
    StageComponent,
    BackstageComponent,
    OperaComponent,
    PersonalComponent,
    FestivalComponent,
    FestivalPhotosComponent,
    MusicComponent,
    RecordingsComponent,
    NewAwardComponent,
    NewReviewComponent,
    CardComponent,
    NoyYetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }