import { Component } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

import { ImageUploaderComponent } from '../../share/image-uploader/image-uploader.component';
import { LoadingSpinnerComponent } from '../../share/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service';
import { CanvasService } from '../../../service/canvas.service';

@Component({
  selector: 'app-coco-ssd',
  standalone: true,
  imports: [ImageUploaderComponent, LoadingSpinnerComponent],
  templateUrl: './coco-ssd.component.html',
  styleUrl: './coco-ssd.component.css'
})
export class CocoSsdComponent {
  private model!: cocoSsd.ObjectDetection;
  private canvas!: HTMLCanvasElement;

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private canvasService: CanvasService
  ) { }

  private async loadModel(): Promise<void> {
    this.loadingSpinnerService.show();
    await tf.ready();
    this.model = await cocoSsd.load({ base: 'mobilenet_v1' });
    this.loadingSpinnerService.hide();
  }

  private async detect(): Promise<cocoSsd.DetectedObject[]> {
    const predictions = await this.model.detect(this.canvas);
    return predictions;
  }

  public async startDetected(image: string): Promise<void> {
    const parent = this.canvas.parentElement as HTMLElement;
    const width = parent.clientWidth;
    await this.canvasService.uploadImage(image, width, this.canvas);

    const results = await this.detect();

    for (const result of results) {
      await this.canvasService.drawBox(result.bbox, this.canvas);
      await this.canvasService.drawLabel(result.class, result.bbox[0], result.bbox[1], this.canvas);
    }
  }

  async ngOnInit() {
    this.loadModel();
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  }
}
