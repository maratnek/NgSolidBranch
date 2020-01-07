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
  list: string [] = ['Income', 'Outcome', 'Loan', 'Investment'];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.tab = 0;
    this.route.queryParams
      .pipe(filter(d => d.tab))
      .subscribe(param => this.tab = param.tab);
  }



}
