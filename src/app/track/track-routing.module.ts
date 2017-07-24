import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MutazBarshimComponent } from './mutaz-barshim/mutaz-barshim.component';
import { StefanHolmComponent } from './stefan-holm/stefan-holm.component';
import { MyJourneyComponent } from './my-journey/my-journey.component';
import { TrackComponent} from './track.component';


const trackRoutes: Routes = [{
    path: "track",
    component: TrackComponent,
    children: [{
        path: "",
        redirectTo: "/track/my-journey",
        pathMatch:'full'
    },{
        path: "my-journey",
        component: MyJourneyComponent
    },{
        path: "mutaz-barshim",
        component: MutazBarshimComponent
    }, {
        path: "stefan-holm",
        component: StefanHolmComponent
    }]}
]

@NgModule({
    imports: [RouterModule.forChild(trackRoutes)],
    exports: [RouterModule]
})
export class TrackRoutingModule { }