import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-addnoticia',
  templateUrl: './addnoticia.page.html',
  styleUrls: ['./addnoticia.page.scss'],
})
export class AddnoticiaPage implements OnInit {
  form: FormGroup;

  constructor(private noticiaservice: NoticiaService, private router: Router, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group ({
      'title': new FormControl("", Validators.required),
      'imageURL': new FormControl("", Validators.required),
      'subtitle': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required),
    });
  }

  noticias = []


  ngOnInit() { 
  }

  async saveNewNoticia() {
    let f = this.form.value;

    let noticia = {
      titulo: f.title,
      categoria: f.subtitle,
      imagen: f.imageURL,
      cuerpo: f.description
    }

    localStorage.setItem('noticia',JSON.stringify(noticia));

    this.noticiaservice.registrar(noticia)

  }

}
