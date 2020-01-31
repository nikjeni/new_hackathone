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
  basicFlag: boolean = false;
  locationFlag: boolean = false;
  descFlag: boolean = false;
  photosFlag: boolean = false;
  public eventBasicForm: FormGroup;
  eventName;
  eventLocation;
  url:any ='';
  model: NgbDateStruct;
  date: {year: number, month: number};
inputStartDate='';
inputEndDate='';
nameOfEvent='';
startOfEvent='';
endOfEvent='';



  constructor(private router: Router,  private formBuilder: FormBuilder,private registerService:RegistartionService,
    private toastr: ToastrService,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.eventBasicForm = this.formBuilder.group({
      eventName: new FormControl('', Validators.required),
      eventCountry:new FormControl('', Validators.required),
      eventCity: new FormControl('', Validators.required),
      startModel: new FormControl(this.model, Validators.required),
      endModel: new FormControl(this.model, Validators.required),
      eventDescription: new FormControl('', Validators.required),
      eventProblemStatement: new FormControl('', Validators.required),
    });
  }

  onSubMenuClick(menu) {
    if (menu == 'basic') {
      this.basicFlag = true;
      this.locationFlag = false;
      this.descFlag = false;
      this.photosFlag = false;
    } else
      if (menu == 'location') {
        this.basicFlag = false;
        this.locationFlag = true;
        this.descFlag = false;
        this.photosFlag = false;
      } else
        if (menu == 'desc') {
          this.basicFlag = false;
          this.locationFlag = false;
          this.descFlag = true;
          this.photosFlag = false;
        } else
          if (menu == 'photo') {
            this.basicFlag = false;
            this.locationFlag = false;
            this.descFlag = false;
            this.photosFlag = true;
          }
  }

  onSubmit(formValue) {
    console.log(formValue);
    this.nameOfEvent = formValue.value.eventName;
    this.startOfEvent = formValue.value.startModel;
    this.endOfEvent = formValue.value.endModel;
    this.createEvent();
  }

 createEvent(){
  this.registerService.createEvent(this.eventBasicForm.value)
  .subscribe(res => {
    if(res.success) {
      this.toastr.success(res.msg);
    this.router.navigate(['/dashboard']);
    }else if(!res.success) {
      this.toastr.warning(res.msg);
    }
    }, (err) => {
      console.log(err);
    });
 }

  onSelectFile(event){
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event)=>{ // called once readAsDataURL is completed
        this.url = event.target["result"];
    }
    }
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  eventStartDate(){
    this.inputStartDate='';
    let str = "";
    str = this.eventBasicForm.get("startModel").value["day"] +"/"+this.eventBasicForm.get("startModel").value["month"] +"/"+this.eventBasicForm.get("startModel").value["year"];
    this.inputStartDate = str
  }
  eventEndDate(){
    this.inputEndDate='';
    let str = "";
    str = this.eventBasicForm.get("endModel").value["day"] +"/"+this.eventBasicForm.get("endModel").value["month"] +"/"+this.eventBasicForm.get("endModel").value["year"];
    this.inputEndDate = str
  }

  onNext(value){
    if(value=='basic'){
      this.basicFlag = false;
      this.locationFlag = true;
      this.descFlag = false;
      this.photosFlag = false;
    } else
    if (value == 'location') {
      this.basicFlag = false;
      this.locationFlag = false;
      this.descFlag = true;
      this.photosFlag = false;
    } else
      if (value == 'desc') {
        this.basicFlag = false;
        this.locationFlag = false;
        this.descFlag = false;
        this.photosFlag = true;
      } 
     
  }

}