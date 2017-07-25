import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MusicComponent } from './music.component';
import { PlayingComponent } from './playing/playing.component';
import { AlbumsComponent } from './albums/albums.component';
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
        path: "albums",
        component: AlbumsComponent
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