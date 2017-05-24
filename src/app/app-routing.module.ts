import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MusicComponent } from './music/music.component';
import { TrackComponent } from './track/track.component';
import { GamingComponent } from './gaming/gaming.component';


const appRoutes: Routes = [
  {path: "", redirectTo: "/home", pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "music", component: MusicComponent},
  {path: "gaming", component: GamingComponent},
  {path: "track", component: TrackComponent},
  {path: "feedback", component: FeedbackComponent} 
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
