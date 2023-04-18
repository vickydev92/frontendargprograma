import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  public formulario!: FormGroup;
  miPorfolio:any;
  constructor(public generalService: GeneralService, public formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      fotoPerfil: ['', [Validators.required]],
      banner: ['', [Validators.required]],
      acercaDe: ['', [Validators.required]]
    });
  }

ngOnInit(): void{
  this.generalService.obtenerInfo().subscribe(data =>{
    console.log(data[0]);
    this.miPorfolio=data[0];
  });
}
  
}
