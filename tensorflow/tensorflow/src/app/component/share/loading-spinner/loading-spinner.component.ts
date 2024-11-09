import { Component } from '@angular/core';

import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { SpinnerComponent } from '../spinner/spinner.component';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'


@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  private overlayRef = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position().global().centerHorizontally().centerVertically()
  });
  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private overlay: Overlay
  ) {
    this.subscribeIsLoading();
  }

  private subscribeIsLoading() {
    this.loadingSpinnerService.subscribeIsLoading$().subscribe((isLoading: boolean) => {
      if (isLoading) {
        this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
      } else {
        this.overlayRef.detach();
      }
    });
  }
}
