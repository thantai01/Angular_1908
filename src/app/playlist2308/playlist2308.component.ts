import { Component, OnInit } from '@angular/core';
import {SongPlaylistService} from '../service/song-playlist.service';
import {Song} from '../song';

@Component({
  selector: 'app-playlist2308',
  templateUrl: './playlist2308.component.html',
  styleUrls: ['./playlist2308.component.css']
})
export class Playlist2308Component implements OnInit {
  playlist: Song[] = [];
  constructor(private songService: SongPlaylistService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.playlist = this.songService.playlist;
  }
}
