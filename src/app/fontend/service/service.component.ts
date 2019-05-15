import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private route:ActivatedRoute , private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
