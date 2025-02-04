import { Injectable, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { CubeConfig } from '../models/cube.model';

@Injectable({ providedIn: 'root' })
export class ThreeJSFacade {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cubes: THREE.Mesh[] = [];

  initializeScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xeeeeee);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: canvas.nativeElement,
      antialias: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    // Animation loop
    this.animate();
  }

  addCube(config: CubeConfig): void {
    const geometry = new THREE.BoxGeometry(config.size, config.size, config.size);
    const material = new THREE.MeshPhongMaterial({ color: config.color });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = Math.random() * 4 - 2;
    cube.position.y = Math.random() * 4 - 2;
    
    this.scene.add(cube);
    this.cubes.push(cube);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Rotate all cubes
    this.cubes.forEach(cube => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    });

    this.renderer.render(this.scene, this.camera);
  }
}