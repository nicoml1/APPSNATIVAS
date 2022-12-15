import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/noticia.service';

@Component({
  selector: 'app-addnoticia',
  templateUrl: './addnoticia.page.html',
  styleUrls: ['./addnoticia.page.scss'],
})
export class AddnoticiaPage implements OnInit {
  form: FormGroup;

  constructor(private noticiaService: NoticiaService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() { 
  }

  saveNewNoticia(noticia) {
    this.noticiaService.registrar(noticia);
    this.router.navigate(['/inicio'])
  }

}
