import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  public formulario!: FormGroup;

  constructor(public generalService: GeneralService, private formBuilder:FormBuilder){
    this.formulario= this.formBuilder.group ({
    id: ['',[Validators.required]],
    titulo:['',[Validators.required]],
    fechaDeInicio:['',[Validators.required]],
    fechaDeFinal:['',[Validators.required]],
    descripcion:['',[Validators.required]],
    imagen:['',[Validators.required]]
    });
  }

  editarEducacion(){
    console.log(this.formulario.value)
  }

}
