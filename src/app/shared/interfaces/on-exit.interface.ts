import {Observable} from 'rxjs';
import {UrlTree} from '@angular/router';

export interface OnExitInterface {
  onExit: () => Observable<boolean | UrlTree> | Promise<boolean |undefined| UrlTree> | boolean | UrlTree;
}
