import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  public async uploadImage(imgStr: string, maxWidth: number, canvas: HTMLCanvasElement): Promise<void> {
    const img = new Image();
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let scaleRaito: number = 1;

    img.src = imgStr;

    return new Promise((resolve, reject) => {
      img.onload = () => {
        let imageWidth = img.naturalWidth
        if (imageWidth > maxWidth) {
          imageWidth = maxWidth;
          scaleRaito = imageWidth / img.naturalWidth;
        }
        canvas.width = imageWidth;
        let imageHeight = img.naturalHeight * scaleRaito;
        canvas.height = imageHeight;

        resolve(ctx.drawImage(img, 0, 0, imageWidth, imageHeight));
      };
      img.onerror = (error) => {
        console.log(error);
        reject;
      }
    });
  }

  public drawImage(image: ImageData, canvas: HTMLCanvasElement): void {
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.putImageData(image, 0, 0);
  }

  public drawLabel(label: string, x: number, y: number, canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.save();
    ctx.font = '18px Meiryo';
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'rgba(' + [0, 0, 255, 0.5] + ')';
    let width = ctx.measureText(label).width;
    ctx.fillRect(x, y, width, parseInt(ctx.font, 10));
    ctx.fillStyle = '#fff';
    ctx.fillText(label, x, y);

    ctx.restore();
  }

  public drawBox(box: [number, number, number, number], canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.strokeStyle = 'blue';

    ctx.strokeRect(...box);
  }

  public markPoint(x: number, y: number, canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.strokeStyle = '#f00';
    ctx.fillStyle = '#f00';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }

  public strokeLine(x1: number, y1: number, x2: number, y2: number, canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.strokeStyle = '#00f';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}
