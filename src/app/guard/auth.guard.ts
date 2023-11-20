import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree} from '@angular/router';
import { AuthService } from '../services/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.auth.isLoggedIn())
      {
        return true;
      }
      alert('You dont\'t have permission to view this page')
      return false;
  }
 
}