import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/services/registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserList implements OnInit {
  page = 1;
  pageSize = 10;
  userSize = 0;
  adminSize=0;
  userList=[];
  adminList=[];
  constructor(private router: Router, private registerService:RegistartionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.registerService.getUsers()
      .subscribe(res => {
        if(res.success) {
          this.userList= res.data.userList;
          this.adminList= res.data.adminList;
          this.adminSize=this.adminList.length;
          this.userSize = this.userList.length;
        }
        }, (err) => {
          console.log(err);
        });
  }
  addAdmin(){
    this.router.navigate(['/add-user']);

  }
  deactiveUser(event){
    event.active =!event.active;
    let update={
      username:event.username,email:event.email,
      active:event.active
    }
    this.registerService.deactiveUser(update)
      .subscribe(res => {
        if(res.success) {
          this.toastr.success(res.msg);
        }else{
          this.toastr.warning(res.msg);
        }
        }, (err) => {
          console.log(err);
        });
  }
  
}

