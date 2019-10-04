import { SliderComponent } from './slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WatchComponent } from './watch/watch.component';
import { ProjectsComponent } from './projects/projects.component';
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

import { NotYetComponent } from './not-yet/not-yet.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsTabComponent } from './news-tab/news-tab.component';
import { ProjectsItemComponent } from './projects-item/projects-item.component';
import { SoundComponent } from './sound/sound.component';
import { ProjectsInfoComponent } from './projects-info/projects-info.component';
import { Card2Component } from './card2/card2.component';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { CouruselComponent } from './courusel/courusel.component';
import { CouruselItemComponent } from './courusel-item/courusel-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    ContactComponent,
    WatchComponent,
    ProjectsComponent,
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
    NotYetComponent,
    NewsItemComponent,
    NewsTabComponent,
    ProjectsItemComponent,
    SoundComponent,
    ProjectsInfoComponent,
    Card2Component,
    CouruselComponent,
    CouruselItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }