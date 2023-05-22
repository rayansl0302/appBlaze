import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  email :any;
  user: any;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem('user')!)
      this.email = this.user.email

  }
 sair(){
    this.authService.logout()
  }
}
