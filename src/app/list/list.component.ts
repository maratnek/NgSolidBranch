import { Resource } from './../resource';
import { ClientsComponent } from './../clients/clients.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/filter';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tab = 0;
  names: string[] = [];
  types: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let resource = new Resource();
    this.names = resource.getNames();
    this.types = resource.getTypes();

    this.tab = 0;
    this.route.queryParams
      .pipe(filter(d => d.tab))
      .subscribe(param => this.tab = param.tab);
  }



}
