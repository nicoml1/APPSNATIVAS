import { TestBed } from '@angular/core/testing';

import { NoticiasService } from './noticias.service';
import { NoticiaService } from './noticia.service';

describe('NoticiasService', () => {
  let service: NoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('NoticiaService', () => {
  let service: NoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});