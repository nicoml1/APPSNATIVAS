import { FormBuilder, FormGroup } from "@angular/forms";


export class AddnoticiaPageForm {
    private formbuilder : FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formbuilder= this.formbuilder;
    }

    createForm(): FormGroup {
        return this.formbuilder.group({
            Título:['']

        });
    
    }
}
