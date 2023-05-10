import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { GeneralService } from 'src/app/general.service';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  private proyectoActualizada = new Subject<void>();
  proyectoList: any;
  public formulario!: FormGroup;

  constructor(public generalService: GeneralService, public formBuilder: FormBuilder, private dataService: DataService, private proyectosService: ProyectosService) {



  }




  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaIni: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      enlace: ['', [Validators.required]]

    });
    this.dataService.misProyectos$.subscribe(data => {
      this.proyectoList = data;
    })

    this.proyectoActualizada.subscribe(() => {
      this.dataService.actualizarMiProyecto();
    })


    const idProyectoSeleccionada = Number(
      (<HTMLSelectElement>document.getElementById('select-idProy')).value
    );

    const proyectoSeleccionada = this.buscarProyectoPorId(
      idProyectoSeleccionada
    );
    if (proyectoSeleccionada) {
      this.formulario.setValue({
        id: proyectoSeleccionada.id,
        imagen: proyectoSeleccionada.imagen,
        titulo: proyectoSeleccionada.titulo,
        fechaIni: proyectoSeleccionada.fechaIni,
        fechaFin: proyectoSeleccionada.fechaFin,
        descripcion: proyectoSeleccionada.descripcion
      });
    }

  }

  buscarProyectoPorId(id: number): Proyectos | null {
    if (this.proyectoList) {
      return this.proyectoList.find((proyecto: Proyectos) => proyecto.id === id);
    } else {
      return null;
    }
  }

  mostrarDatos() {
    const idProyectoSeleccionada = Number(
      (<HTMLSelectElement>document.getElementById('select-idProy')).value
    );
    const proyectoSeleccionada = this.buscarProyectoPorId(
      idProyectoSeleccionada
    );
    if (proyectoSeleccionada) {
      this.formulario.setValue({
        id: proyectoSeleccionada.id,
        imagen: proyectoSeleccionada.imagen,
        titulo: proyectoSeleccionada.titulo,
        fechaIni: proyectoSeleccionada.fechaIni,
        fechaFin: proyectoSeleccionada.fechaFin,
        descripcion: proyectoSeleccionada.descripcion,
        enlace: proyectoSeleccionada.enlace
      });
    }
  }


  editarProyecto() {
    this.proyectosService.editarProyectos(this.formulario.value.id, this.formulario.value).subscribe(
      (response: Proyectos) => {
        console.log(response);
        this.proyectoList = this.formulario.value;
        this.proyectoActualizada.next();
        this.formulario.reset();
      }
    )

  }

  eliminarProyecto() {
    const proyectoId = this.formulario.value.id;
    this.proyectosService.eliminarProyecto(proyectoId).subscribe(
      () => {
        this.proyectoActualizada.next(); //Emitir el subject para actualizar los datos
        this.formulario.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  agregarProyecto() {
    const proyecto = this.formulario.value;
    this.proyectosService.crearProyecto(proyecto).subscribe(
      (response: Proyectos) => {
        console.log(response);
        this.proyectoList = proyecto;
        this.proyectoActualizada.next();
        this.formulario.reset();
      }
    )
  }
}




