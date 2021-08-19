import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistList: Artist[] = [{
    name: 'Bruno Mars',
    imageURL: 'https://file.tinnhac.com/resize/600x-/music/2017/04/29/imagegen-dfb8.jpg',
  }, {
    name: 'Maroon 5',
    imageURL: 'https://top.trangdangtin.com/htdocs/images/news/2021/04/08/800/webp/606e6f5064d76_m1.webp'
  }, {
    name: 'Taylor Swift',
    imageURL: 'https://vanhoavagiaitri.com/wp-content/uploads/2021/06/taylor-swift-devushka-vzgliad-sergi-ulybka-makiiazh-guby-kra.jpg',
  }, {
    name: 'Katy Perry',
    imageURL: 'https://vcdn-giaitri.vnecdn.net/2019/07/30/D4Jv6pOUwAEo-e8-5972-1564451805.jpg'
  }, {
    name: 'Eminem',
    imageURL: 'https://static.tuoitre.vn/tto/r/2017/06/29/eminem-014-1498724304.jpg'
  }, {
    name: 'Britney Spears',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg'
  }, {
    name: 'Adele',
    imageURL: 'https://nld.mediacdn.vn/2018/10/7/13-vnqt-1538923990791989506202.jpg',
  }, {
    name: 'Justin Bieber',
    imageURL: 'https://cdn.tgdd.vn/Files/2016/04/21/818934/jb.jpg',
  }, {
    name: 'Lady Gaga',
    imageURL: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2020/05/11/lady-gaga-be-lai-ngoan-muc1589169541.jpg',
  }, {
    name: 'Justin Timberlake',
    imageURL: 'https://static01.nyt.com/images/2021/02/12/arts/12justin-item/12justin-item-mobileMasterAt3x.jpg',
  }, {
    name: 'One Direction',
    imageURL: 'https://vcdn1-giaitri.vnecdn.net/2015/03/31/one-direction-press-2013-65-4742-1427799460.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=KcjH7gSMQA4M3g2WbVA8eQ',
  }, {
    name: 'Selena Gomez',
    imageURL: 'https://trangtin60s.com/wp-content/uploads/2021/03/1.2.jpg',
  }];



  constructor() { }

  ngOnInit(): void {
  }

}
