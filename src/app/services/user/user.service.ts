import { Injectable } from '@angular/core';
import { User } from '../../user';
import { HttpBase } from '../../http-base';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class UserService {

  constructor(
    private httpBase: HttpBase,
    private router: Router,    
    private toastr: ToastrService,    
  ) { }

  
  registerCallback(resp){
    !resp  ? (
      this.toastr.error('Please provide correct data.')
      
    ) : (
    this.router.navigate(['login'])
     )
  }

  saveNewUser(user: User) {
    return this.httpBase.httpPost(user, environment.baseUrl+'/users');
  }

}
