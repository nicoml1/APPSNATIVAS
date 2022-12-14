import { FormBuilder } from "@angular/forms";
import { AddnoticiaPageForm } from "./AddnoticiaPageForm";

describe ('AddnoticiaPageForm', ()=> {

    it ('should create addnoticia form empty', ()=> {
        const AddnoticiaPageForm = new AddnoticiaPageForm( new FormBuilder());
        const form = AddnoticiaPageForm.createForm();

       expect(form).not.toBeNull();
       expect(form.get('Título')).not.toBeNull();
    })
})