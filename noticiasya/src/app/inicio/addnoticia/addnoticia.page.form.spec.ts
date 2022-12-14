import { FormBuilder, FormGroup } from "@angular/forms";
import { AddnoticiaPageForm } from "./addnoticia.page.form"

describe ('AddnoticiaPageForm', ()=> {

    let addnoticiaPageForm: AddnoticiaPageForm;
    let form: FormGroup

    beforeEach(() => {
        addnoticiaPageForm = new AddnoticiaPageForm(new FormBuilder());
        form = addnoticiaPageForm.createForm();
    })
   

    it ('should create addnoticia form empty', ()=> {
        
       expect(form).not.toBeNull();
       expect(form.get('titulo')).not.toBeNull();
       expect(form.get('titulo').value).toEqual("");
       expect(form.get('titulo').value).toBeFalsy();
       expect(form.get('imagen')).not.toBeNull();
       expect(form.get('imagen').value).toEqual("");
       expect(form.get('imagen').value).toBeFalsy();
       expect(form.get('categoria')).not.toBeNull();
       expect(form.get('categoria').value).toEqual("");
       expect(form.get('categoria').value).toBeFalsy();
       expect(form.get('descripcion')).not.toBeNull();
       expect(form.get('descripcion').value).toEqual("");
       expect(form.get('descripcion').value).toBeFalsy()
    })

    it('should have imagen invalid if imagen is not valid', () => {
        form.get('imagen').setValue('invalid imagen');
        
        expect(form.get('imagen').valid).toBeFalsy();
    })

    
    it('should have imagen valid if imagen is valid', () => {
        form.get('imagen').setValue('https://valid');

        expect(form.get('imagen').valid).toBeTruthy();
    })
    
    it('should have valid form', () => {
        form.get('imagen').setValue('https://valid');
        form.get('titulo').setValue('anytitulo')
        form.get('categoria').setValue('anyCategoria');
        form.get('descripcion').setValue('anyDescripcion');

        expect(form.valid).toBeTruthy();
    })

})

