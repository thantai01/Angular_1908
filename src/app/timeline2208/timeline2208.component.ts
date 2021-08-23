import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-timeline2208',
  templateUrl: './timeline2208.component.html',
  styleUrls: ['./timeline2208.component.css']
})
export class Timeline2208Component implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
