import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { GeneralService } from 'src/app/general.service';
import { Experiencia } from 'src/app/modelos/usuario/experiencia';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent {
  experienciaList: any;
  private experienciaActualizada = new Subject<void>();

  public formulario!: FormGroup;


  constructor(public generalService: GeneralService, private formBuilder: FormBuilder, private dataService: DataService, private experienciasService:ExperienciasService){
    

  }

  ngOnInit(): void{

    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaIni: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });

      this.dataService.misExperiencias$.subscribe(data => {
        this.experienciaList = data;
      })

      this.experienciaActualizada.subscribe(() => {
        this.dataService.actualizarMiExperiencia(); 
      })

      const idExperienciaSeleccionada=Number(
        (<HTMLSelectElement>document.getElementById('select-idExp')).value
      );
  
      const experienciaSeleccionada= this.buscarExperienciaPorId(
        idExperienciaSeleccionada
      );
        if (experienciaSeleccionada) {
          this.formulario.setValue({
            id: experienciaSeleccionada.id,
            imagen:experienciaSeleccionada.imagen,
            titulo:experienciaSeleccionada.titulo,
            fechaIni: experienciaSeleccionada.fechaIni,
            fechaFin: experienciaSeleccionada.fechaFin,
            descripcion: experienciaSeleccionada.descripcion
          });
        }
  
    }
  
    buscarExperienciaPorId(id:number): Experiencia{
      return this.experienciaList.find((experiencia:Experiencia)=> experiencia.id === id);
    }
  
    mostrarDatos(){
      const idExperienciaSeleccionada=Number(
        (<HTMLSelectElement>document.getElementById('select-idExp')).value
      );
      const experienciaSeleccionada= this.buscarExperienciaPorId(
        idExperienciaSeleccionada
      );
      if (experienciaSeleccionada) {
        this.formulario.setValue({
          id: experienciaSeleccionada.id,
          imagen:experienciaSeleccionada.imagen,
          titulo:experienciaSeleccionada.titulo,
          fechaIni: experienciaSeleccionada.fechaIni,
          fechaFin: experienciaSeleccionada.fechaFin,
          descripcion: experienciaSeleccionada.descripcion
        });
      }
    }
editarExperiencia(){
  this.experienciasService.editarExperiencia(this.formulario.value.id, this.formulario.value).subscribe(
    (response: Experiencia) => {
      console.log(response);
      this.experienciaList = this.formulario.value;
      this.experienciaActualizada.next(); 
      this.formulario.reset();
    }
  )

}

eliminarExperiencia(){
  const experienciaId = this.formulario.value.id;
  this.experienciasService.eliminarExperiencia(experienciaId).subscribe(
    () => {
      this.experienciaActualizada.next(); //Emitir el subject para actualizar los datos
      this.formulario.reset();
    },
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  )
}


agregarExperiencia(){
  const experiencia= this.formulario.value;
  this.experienciasService.crearExperiencia(experiencia).subscribe(
    (response:Experiencia) =>{
      console.log(response);
      this.experienciaList = experiencia;
      this.experienciaActualizada.next();
      this.formulario.reset();
    }
  )
}

  }

