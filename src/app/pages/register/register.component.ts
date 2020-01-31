import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { RegistartionService } from 'src/app/services/registration.service';
import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm;
  constructor(public resgisterService:RegistartionService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      address: new FormGroup({
        location:new FormControl(''),
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      }),
      aboutMe:new FormControl(''),
      terms:new FormControl(false),
    });
  }

  register(){
    this.resgisterService.register(this.registrationForm.value)
      .subscribe(res => {
        if(res.success) {
          this.toastr.success(res.msg);
          this.router.navigate(['/login']);
        }else if(!res.success) {
          this.toastr.warning(res.msg);
        }
        }, (err) => {
          console.log(err);
        });
  }
}
