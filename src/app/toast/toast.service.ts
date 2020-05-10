import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastChanged: Subject<any> = new Subject<any>();
  constructor() { }

  showToast(type: string, message: string, timeout: number) {
    this.toastChanged.next({
      type,
      message,
      timeout
    });
  }

}
