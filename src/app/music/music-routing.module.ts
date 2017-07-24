import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MusicComponent } from './music.component';
import { PlayingComponent } from './playing/playing.component';
import { ArtistsComponent } from './artists/artists.component';
import { SongsComponent } from './songs/songs.component';


const musicRoutes: Routes = [{
    path: "music",
    component: MusicComponent,
    children: [{
        path: "",
        redirectTo: "/music/playing",
        pathMatch:'full'
    },{
        path: "playing",
        component: PlayingComponent
    },{
        path: "artists",
        component: ArtistsComponent
    }, {
        path: "songs",
        component: SongsComponent
    }]}
]

@NgModule({
    imports: [RouterModule.forChild(musicRoutes)],
    exports: [RouterModule]
})
export class MusicRoutingModule { }