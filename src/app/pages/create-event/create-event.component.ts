import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { RegistartionService } from 'src/app/services/registration.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
 
  eventForm:any;

  constructor(private router: Router, private registerService:RegistartionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.eventForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      startDate: new FormControl('',{validators: [Validators.required]}),
      endDate: new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required]),
      rules:new FormControl('',[Validators.required]),
    });
  }
  saveEvent(){
    this.registerService.createEvent(this.eventForm.value)
      .subscribe(res => {
        if(res.success) {
          this.toastr.success(res.msg);
          this.router.navigate(['/event-list']);
        }else if(!res.success) {
          this.toastr.warning(res.msg);
        }
        }, (err) => {
          console.log(err);
        });
  }

}
