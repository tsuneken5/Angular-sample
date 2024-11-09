import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css'
})
export class ImageUploaderComponent {
  @ViewChild('file')
  private fileElement!: ElementRef;
  @Output() selectFileEvent = new EventEmitter<string>();

  private async loadImage(file: File): Promise<void> {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data: string = await new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        console.error(error);
        reject;
      }
    })

    this.selectFileEvent.emit(data);
  }

  public selectFile(): void {
    if (this.fileElement.nativeElement.files.length > 0) {
      const fileArray: File[] = [].slice.call(this.fileElement.nativeElement.files);
      this.loadImage(fileArray[0]);
    }
  }

}
