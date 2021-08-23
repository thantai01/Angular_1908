import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Timeline2208Component} from './timeline2208/timeline2208.component';
import {Playlist2308Component} from './playlist2308/playlist2308.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';

const routes: Routes = [{
  path: 'timelines',
  component: Timeline2208Component,
}, {
  path: 'youtube',
  component: Playlist2308Component,
}, {
  path: 'youtube',
  component: Playlist2308Component,
  children: [{
    path: ':id',
    component: YoutubePlaylistComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
