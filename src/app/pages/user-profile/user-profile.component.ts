import { Component, OnInit } from '@angular/core';
import { RegistartionService } from 'src/app/services/registration.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public loginUserInfo:any;
  public profileInfo:any;

  constructor(private registrationService:RegistartionService,private toastr: ToastrService) { }

  ngOnInit() {
    this.profileInfo = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        location:new FormControl(''),
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      }),
      aboutMe:new FormControl('')
    });
   this.loginUserInfo = this.registrationService.getUserInfo();
   this.profileInfo.patchValue(this.loginUserInfo);

  }
  updateProfile(){
    this.registrationService.updateProfile(this.profileInfo.value)
    .subscribe(res => {
      if(res.success) {
        let data = res.data;
        this.loginUserInfo.firstName =data.firstName;
        this.loginUserInfo.lastName =data.lastName;
        this.loginUserInfo.aboutMe =data.aboutMe;
        this.loginUserInfo.address =data.address;
        this.loginUserInfo.role =data.role;
        this.registrationService.setUserInfo(this.loginUserInfo);
        this.toastr.success(res.msg);
      }else if(!res.success) {
        this.toastr.warning(res.msg);
      }
      }, (err) => {
        console.log(err);
      });
}
  }


