import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { GeneralService } from 'src/app/general.service';
import { Persona } from 'src/app/modelos/usuario/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  public formulario!: FormGroup;
  miPorfolio:any;
  constructor(public generalService: GeneralService, public formBuilder: FormBuilder, public personaService:PersonaService, public dataService: DataService){
    this.formulario = this.formBuilder.group({
      id:[],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      fotoPerfil: ['', [Validators.required]],
      banner: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

ngOnInit(): void{
  this.dataService.miPorfolio$.subscribe(data => {
    this.miPorfolio = data;
  })
}

public editarPerfil(){
  this.personaService.editarPersona(this.miPorfolio.id,this.formulario.value).subscribe(
    (response: Persona) => {
      console.log(response);
      this.miPorfolio= this.formulario.value; // Actualizar datos locales del formulario
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}
}
