import { Component, OnInit } from '@angular/core';
import {Song} from '../model/song';
import {SongPlaylistService} from '../service/song-playlist.service';

@Component({
  selector: 'app-playlist2308',
  templateUrl: './playlist2308.component.html',
  styleUrls: ['./playlist2308.component.css']
})
export class Playlist2308Component implements OnInit {
  playlist: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.playlist = this.songService.playlist;
  }
}
