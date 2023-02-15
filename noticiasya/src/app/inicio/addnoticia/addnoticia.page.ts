import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiasService } from '../noticias.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addnoticia',
  templateUrl: './addnoticia.page.html',
  styleUrls: ['./addnoticia.page.scss'],
})
export class AddnoticiaPage implements OnInit {
  form: FormGroup;

  constructor(private noticiaservice: NoticiasService, private router: Router, private formBuilder: FormBuilder, public alertController: AlertController) { 
    this.form = this.formBuilder.group ({
      'title': new FormControl("",Validators.required),
      'imageURL': new FormControl("", [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      'subtitle': new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'description': new FormControl("", Validators.required),
    });
  }

  ngOnInit() { 
  }

  async saveNewNoticia() {
    console.warn(this.form.value)
    let f = this.form.value;

    let noticia = {
      titulo: f.title,
      categoria: f.subtitle,
      imagen: f.imageURL,
      cuerpo: f.description
    }

    localStorage.setItem('noticia',JSON.stringify(noticia));

    this.noticiaservice.registrar(noticia);

    const alert = await this.alertController.create({
      header: "ENVIADA",
      message: "La noticia ha sido agregada con exito!",
      buttons: ["OK"]
    })
    await alert.present();
    this.router.navigate(['/inicio'])

  }
  getsubtitleMessage(){
    if(this.form.controls.subtitle.hasError('requiered')){
      return 'Este campo es requerido'
}
if(this.form.controls.subtitle.hasError('pattern')){
  return 'solo se permiten letras'
}
}
getimageURLMessage(){
  if(this.form.controls.imageURL.hasError('requiered')){
    return 'Este campo es requerido'
}
if(this.form.controls.imageURL.hasError('pattern')){
return 'Solo se permiten imagenes'
}
}
}

