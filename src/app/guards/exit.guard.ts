import {CanDeactivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {MessageDialogService} from "@servicesApp/core";
import {firstValueFrom, lastValueFrom, take} from "rxjs";

export const ExitGuard: CanDeactivateFn<any> = async (component) => {
  return await component.onExit();
}
