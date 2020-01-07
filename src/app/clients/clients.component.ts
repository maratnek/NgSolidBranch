import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from './../service/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @Input() clientType: string;

  data: any[] = [];

  constructor(private service: ClientsService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.service.getClients()
      .subscribe((d: any) => {
        this.data = d.data;
        this.data = this.data.filter(d => {
          // console.log(d.type, this.clientType.toLowerCase());
          d.amount = this.getRandomInt();
          if (d.type === this.clientType.toLowerCase()) {
            return d;
          }
        });
      });
    return this.data;
  }

  getRandomInt() {
    let min = 0;
    let max = 1000000;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
