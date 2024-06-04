import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appSettings';
import { Empleado } from '../Models/Empleado';
import { ResponseAPI } from '../Models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http=inject(HttpClient);
  private apiURL:string=appsettings.apiURL+"Empleado";

  constructor() { }

  lista(){
    return this.http.get<Empleado[]>(this.apiURL);
  }

  obtener(id:Number){
    return this.http.get<Empleado>(`${this.apiURL}/${id}`);
  }

  crear(objeto:Empleado){
    return this.http.post<ResponseAPI>(this.apiURL, objeto);
  }

  editar(objeto:Empleado){
    return this.http.put<ResponseAPI>(this.apiURL, objeto);
  }

  eliminar(id:Number){
    return this.http.delete<ResponseAPI>(`${this.apiURL}/${id}`);
  }
}
