import { Component } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';

import { ImageUploaderComponent } from '../../share/image-uploader/image-uploader.component';
import { LoadingSpinnerComponent } from '../../share/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service';
import { CanvasService } from '../../../service/canvas.service';

@Component({
  selector: 'app-pose-detection',
  standalone: true,
  imports: [ImageUploaderComponent, LoadingSpinnerComponent],
  templateUrl: './pose-detection.component.html',
  styleUrl: './pose-detection.component.css'
})
export class PoseDetectionComponent {
  private canvas!: HTMLCanvasElement;
  private detector!: poseDetection.PoseDetector;
  private readonly KEYPOINT_LINKS = [
    [0, 1], [0, 2], [1, 3], [2, 4], [5, 6], [5, 7], [7, 9], [6, 8], [8, 10], [11, 12], [5, 11], [6, 12], [11, 13], [13, 15], [12, 14], [14, 16]
  ];
  private readonly LINK_COLORS = [
    '#FF0000', '#FF0000', '#FF0000', '#FF0000',
    '#0000FF', '#0000FF', '#0000FF', '#0000FF', '#0000FF',
    '#800080', '#800080', '#800080',
    '#008000', '#008000', '#008000', '#008000'
  ]
  private readonly KEYPOINT_COLORS = [
    '#FF0000', '#FF69B4', '#FF69B4', '#FF4500', '#FF4500',
    '#0000FF', '#0000FF', '#1E90FF', '#1E90FF', '#00BFFF', '#00BFFF',
    '#008000', '#008000', '#32CD32', '#32CD32', '#90EE90', '#90EE90'
  ];

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private canvasService: CanvasService
  ) { }

  private async loadModel(): Promise<void> {
    this.loadingSpinnerService.show();
    await tf.ready();
    const model = poseDetection.SupportedModels.PoseNet;
    this.detector = await poseDetection.createDetector(model);
    this.loadingSpinnerService.hide();
  }

  private async detect(canvas: HTMLCanvasElement): Promise<poseDetection.Pose[]> {
    const predictions = await this.detector.estimatePoses(canvas);
    return predictions;
  }

  private isContains(position: { x: number, y: number }): boolean {
    return (0 < position.x) && (position.x < this.canvas.width) && (0 < position.y) && (position.y < this.canvas.height)
  }

  public async startDetected(image: string): Promise<void> {
    this.loadingSpinnerService.show();
    const parent = this.canvas.parentElement as HTMLElement;
    const width = parent.clientWidth;
    await this.canvasService.uploadImage(image, width, this.canvas);

    const results = await this.detect(this.canvas);
    for (const result of results) {
      // ライン
      for (let i = 0; i < this.KEYPOINT_LINKS.length; i++) {
        const link = this.KEYPOINT_LINKS[i];
        const color = this.LINK_COLORS[i];
        if (this.isContains(result.keypoints[link[0]]) && this.isContains(result.keypoints[link[1]])) {
          this.canvasService.strokeLine(result.keypoints[link[0]].x, result.keypoints[link[0]].y, result.keypoints[link[1]].x, result.keypoints[link[1]].y, color, this.canvas);
        }
      }
      // キーポイント
      for (let i = 0; i < result.keypoints.length; i++) {
        const keypoint = result.keypoints[i];
        if (this.isContains(keypoint)) {
          this.canvasService.markPoint(keypoint.x, keypoint.y, this.KEYPOINT_COLORS[i], this.canvas);
        }
      }
    }
    this.loadingSpinnerService.hide();
  }

  async ngOnInit() {
    this.loadModel();
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  }
}
