import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserDataService} from "../services/user-data.service";

@Injectable({
  providedIn: 'root'
})
export class MonthlyInvestCalcGuard implements CanActivate {

  userDataService: UserDataService;

  constructor(userDataService: UserDataService, router: Router) {
    this.userDataService = userDataService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.userDataService.allowRetirementCorpusAmountCalculation();
  }

}
