import { Resource } from './../resource';
import { ClientsService } from './../service/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  clients: number[] = [0, 0, 0, 0];
  transCount: number = 0;
  names: string[] = [];
  types: string[] = [];

  constructor(private service: ClientsService) { }

  ngOnInit() {
    let resource = new Resource();
    this.names = resource.getNames();
    this.types = resource.getTypes();
    this.initData();
  }

  initData() {
    this.service.getClients()
    .subscribe((d: any) => {
      this.transCount = d.data.length;
      for (const iter of d.data) {
        switch (iter.type) {
          case this.types[0]:
            this.clients[0]++;
            break;

          case this.types[1]:
            this.clients[1]++;
            break;

          case this.types[2]:
            this.clients[2]++;
            break;

          case this.types[3]:
            this.clients[3]++;
            break;
          default:
            console.log('default', iter.type);
            break;
        }

      }

    });
  }

}
