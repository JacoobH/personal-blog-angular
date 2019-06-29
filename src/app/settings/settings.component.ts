import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {User} from '../user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  username = this.route.snapshot.paramMap.get('username');
  user: User;
  fileToUpload: File = null;
  url = '';
  constructor(public http: HttpClient,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserInformation()
  }

  getUserInformation(){
    this.userService.getInformation(new User(this.username, null,null))
      .subscribe(user => this.user = user,
        error1 => alert(this.user.username),
        ()=>this.user.photoFileName = '../../assets/userImg/'+ this.user.photoFileName);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload); // 将图片转成dataUri
    reader.onload = (event: any) => { // called once readAsDataURL is completed
      console.log(event);
      this.user.photoFileName = event.target.result;
    }
  }

  postFile(username:string, password:string, fileToUpload: File){
    const endpoint = 'http://localhost:8080/user/modify';
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('uploadPhoto', fileToUpload, fileToUpload.name);
    this.http.post(endpoint, formData).subscribe(() => alert('修改成功'));
  }

}
