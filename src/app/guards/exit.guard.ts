import {CanDeactivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {MessageDialogService} from "@servicesApp/core";
import {firstValueFrom, lastValueFrom, take} from "rxjs";

export const ExitGuard: CanDeactivateFn<any> = async (component) => {
  console.log("ExitGuard", await lastValueFrom(component.onExit().pipe(take(2))));
  // console.log("ExitGuard", await firstValueFrom( component.onExit()));
  return await lastValueFrom(component.onExit().pipe(take(2)));
  // return await component.onExit();
}
