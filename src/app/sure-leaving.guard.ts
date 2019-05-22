import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';

@Injectable({
  providedIn: 'root'
})
export class SureLeavingGuard implements CanDeactivate<EditFormComponent> {
  canDeactivate() {
    return confirm('Sure, that you want to leave?');
  }
}
