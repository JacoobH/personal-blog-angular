import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {
  flag = false;
  loginUsername: string;
  loginPassword: string;


  registerUsername:string;
  registerPassword:string;
  reRegisterPassword:string;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    // alert("aaa");
    this.userService.login(new User(username,password,null))
      .subscribe(flag => this.flag = flag,
          err => console.log("登陆错误"),
        () => this.loginJudge(this.flag));
  }

  loginJudge(flag: boolean){
    if (flag){
      this.router.navigateByUrl(`settings/${this.loginUsername}`)
    } else {
      alert("登陆失败");
    }
  }

  register(username: string, password: string){
    if (password === this.reRegisterPassword){
      this.userService.register(new User(username,password,null))
        .subscribe(()=>alert('注册成功'));
    } else {
      alert('两次密码输入不一致')
    }
  }

}
