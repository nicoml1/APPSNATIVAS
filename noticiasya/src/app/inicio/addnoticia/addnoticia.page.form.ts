import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class AddnoticiaPageForm {
    private formBuilder : FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder= this.formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            titulo:['', [Validators.required]] ,
            imagen:['', [Validators.required, Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]],
            categoria: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            

        });
    
    }
}