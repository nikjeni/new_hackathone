import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegistartionService } from 'src/app/services/registration.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginFrom:any;
  constructor(public resgisterService:RegistartionService,private toastr: ToastrService,private router: Router) {}

  ngOnInit() {
    this.loginFrom = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      rememberMe:new FormControl(false),
    });
  }
  ngOnDestroy() {
  }
  register(){
    this.router.navigate(['/register']);
  }
  login(){
    this.resgisterService.login(this.loginFrom.value)
      .subscribe(res => {
        if(res.success) {
          this.toastr.success(res.msg);
          this.resgisterService.setUserInfo(res.data);
          this.resgisterService.setUserToken(res.token);
          this.router.navigate(['/dashboard']);
        } else if(!res.success) {
          this.toastr.warning(res.msg);
        }
        }, (err) => {
          this.toastr.error('Please try after sometime.');
        });
  }
}
