import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  public isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  private isLoading: Observable<boolean> = this.isLoadingSubject.asObservable();
  constructor() { }

  public show(): void {
    this.isLoadingSubject.next(true);

  }

  public hide(): void {
    this.isLoadingSubject.next(false);
  }

  public subscribeIsLoading$(): Observable<boolean> {
    return this.isLoading;
  }
}
