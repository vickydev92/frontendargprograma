import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  public formulario!: FormGroup;
  constructor(public generalService: GeneralService, public formBuilder:FormBuilder, private dataService: DataService){
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechaDeInicio: ['', [Validators.required]],
      fechaDeFinal: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
    
  }
  proyectoList:any;


  
  ngOnInit(): void{
      this.dataService.misProyectos$.subscribe(data => {
        this.proyectoList = data;
      })
    }
  }

  


