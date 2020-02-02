import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/services/registration.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventList implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  eventList=[];
  constructor(private router: Router, private registerService:RegistartionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this.registerService.getEvents()
      .subscribe(res => {
        if(res.success) {
          this.eventList= res.data;
          this.collectionSize=this.eventList.length;
          this.eventList.forEach(row=>{
            if(row.startDate){
              row.startDate=this.dateFormat(row.startDate);
            }
            if(row.endDate){
              row.endDate=this.dateFormat(row.endDate);
            }
          })
        }
        }, (err) => {
          console.log(err);
        });
  }
  createEvent(){
    this.router.navigate(['/create-event']);

  }
  dateFormat(data){
    var year = data.year;
    var month = data.month; 
    var day = data.day;
    return moment([year, month, day]).format('YYYY-MM-DD');
  }

}

