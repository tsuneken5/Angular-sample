import { Component } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as bodySegmentation from '@tensorflow-models/body-segmentation';

import { ImageUploaderComponent } from '../../share/image-uploader/image-uploader.component';
import { LoadingSpinnerComponent } from '../../share/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service';
import { CanvasService } from '../../../service/canvas.service';

@Component({
  selector: 'app-body-segmentation',
  standalone: true,
  imports: [ImageUploaderComponent, LoadingSpinnerComponent],
  templateUrl: './body-segmentation.component.html',
  styleUrl: './body-segmentation.component.css'
})
export class BodySegmentationComponent {
  private canvas!: HTMLCanvasElement;
  private SEGMENTER_CONFIG = {
    runtime: 'tfjs',
  } as bodySegmentation.MediaPipeSelfieSegmentationTfjsModelConfig;
  private segmenter!: bodySegmentation.BodySegmenter;

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private canvasService: CanvasService
  ) { }

  private async loadModel(): Promise<void> {
    this.loadingSpinnerService.show();
    await tf.ready();
    const model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;
    this.segmenter = await bodySegmentation.createSegmenter(model, this.SEGMENTER_CONFIG);
    this.loadingSpinnerService.hide();
  }

  private async detect(canvas: HTMLCanvasElement): Promise<any> {
    const predictions = await this.segmenter.segmentPeople(canvas);
    return predictions;
  }

  public async startDetected(image: string): Promise<void> {
    this.loadingSpinnerService.show();
    const parent = this.canvas.parentElement as HTMLElement;
    const width = parent.clientWidth;
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    await this.canvasService.uploadImage(image, width, canvas);

    const results = await this.detect(canvas);

    const foregroundColor = { r: 0, g: 0, b: 255, a: 255 };
    const backgroundColor = { r: 0, g: 0, b: 0, a: 0 };
    const backgroundDarkeningMask = await bodySegmentation.toBinaryMask(
      results, foregroundColor, backgroundColor);

    const opacity = 0.7;
    const maskBlurAmount = 3;
    const flipHorizontal = false;
    await bodySegmentation.drawMask(
      this.canvas, canvas, backgroundDarkeningMask, opacity, maskBlurAmount, flipHorizontal);
    this.loadingSpinnerService.hide();
  }

  async ngOnInit() {
    this.loadModel();
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  }
}
