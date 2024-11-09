import { Component } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

import { ImageUploaderComponent } from '../../share/image-uploader/image-uploader.component';
import { LoadingSpinnerComponent } from '../../share/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service';
import { CanvasService } from '../../../service/canvas.service';

@Component({
  selector: 'app-mobilenet',
  standalone: true,
  imports: [ImageUploaderComponent, LoadingSpinnerComponent],
  templateUrl: './mobilenet.component.html',
  styleUrl: './mobilenet.component.css'
})
export class MobilenetComponent {
  private model!: mobilenet.MobileNet;
  private canvas!: HTMLCanvasElement;

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private canvasService: CanvasService
  ) { }

  private async loadModel(): Promise<void> {
    this.loadingSpinnerService.show();
    await tf.ready();
    this.model = await mobilenet.load({ version: 2, alpha: 0.75 });
    this.loadingSpinnerService.hide();
  }

  private async detect(): Promise<Array<{ className: string; probability: number; }>> {
    const predictions = await this.model.classify(this.canvas);
    return predictions;
  }

  public async startDetected(image: string): Promise<void> {
    this.loadingSpinnerService.show();

    const parent = this.canvas.parentElement as HTMLElement;
    const width = parent.clientWidth;
    await this.canvasService.uploadImage(image, width, this.canvas);

    const result = await this.detect();
    console.log(result);

    await this.canvasService.drawLabel(result[0].className, 0, 0, this.canvas);
    this.loadingSpinnerService.hide();
  }

  async ngOnInit() {
    this.loadModel();
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  }
}
