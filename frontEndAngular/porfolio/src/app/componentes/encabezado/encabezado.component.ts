import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      id:new FormControl('',Validators.required),
      nombre: new FormControl (''),
      apellido: new FormControl (''),
      titulo: new FormControl(''),
      localidad: new FormControl(''),
      fotoPerfil: new FormControl(''),
      descripcion: new FormControl ('')
    });
  }

ngOnInit(): void{
  this.dataService.miPorfolio$.subscribe(data => {
    this.miPorfolio = data;
    this.formulario.setValue({
      id: this.miPorfolio?.id,
      nombre: this.miPorfolio?.nombre,
      apellido: this.miPorfolio?.apellido,
      titulo: this.miPorfolio?.titulo,
      localidad: this.miPorfolio?.localidad,
      fotoPerfil: this.miPorfolio?.fotoPerfil,
      descripcion: this.miPorfolio?.descripcion
    })
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
