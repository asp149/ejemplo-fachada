import { TestBed } from '@angular/core/testing';

import { ThreeJSFacade } from './threejs.facade';

describe('ThreejsService', () => {
  let service: ThreeJSFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreeJSFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
