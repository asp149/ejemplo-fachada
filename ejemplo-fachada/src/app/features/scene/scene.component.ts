import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ThreeJSFacade } from '../../core/facade/threejs.facade';
import { CubeConfig } from '../../core/models/cube.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  constructor(private threeFacade: ThreeJSFacade) {}

  ngAfterViewInit(): void {
    this.threeFacade.initializeScene(this.canvasRef);
  }

  addCube(): void {
    const newCube: CubeConfig = {
      size: 1,
      color: 0x00ff00
    };
    this.threeFacade.addCube(newCube);
  }
}