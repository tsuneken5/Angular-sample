import { Component } from '@angular/core';

import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerComponent } from './spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading-spinner';

  private overlayRef = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position().global().centerHorizontally().centerVertically()
  });

  constructor(private overlay: Overlay) { }

  click() {
    this.overlayRef.attach(new ComponentPortal(SpinnerComponent));

    setTimeout(() => {
      this.overlayRef.detach();
    }, 3000);
  }
}
