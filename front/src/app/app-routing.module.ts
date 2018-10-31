import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { MoviesComponent } from 'src/app/movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'


const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
]


@NgModule({
    declarations:[
        MovieDetailComponent
    ],
    imports:[
        RouterModule.forRoot(routes),
        CommonModule,
        FormsModule
    ],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule {}