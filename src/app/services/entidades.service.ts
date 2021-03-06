import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from '../app.values'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }

  entidadesURL = HOST + 'entidades';
  organizacionesURL = HOST + 'organizaciones';
  personajesURL = HOST + 'personajes';

  private getData(url) {
    return this.http.get(url);
  }

  public getEntidades() {
    return this.getData(this.entidadesURL);
  }

  public getOrganizaciones() {
    return this.getData(this.organizacionesURL);
  }


  public getPersonajes() {
    return this.getData(this.personajesURL);
  }

  public getPersonaje(idPersonaje) {
    return this.getData(this.personajesURL + '/' + idPersonaje)
  }

  public newPersonaje(personajePayload): Observable<any> {
    return this.http.post(this.personajesURL, personajePayload);
  }
  public updatePersonaje(idPersonaje, personajePayload): Observable<any> {
    return this.http.put(this.personajesURL + '/' + idPersonaje, personajePayload);
  }
  public deletePersonaje(idPersonaje): Observable<any> {
    return this.http.delete(this.personajesURL + '/' + idPersonaje);
  }

  public getOrganizacion(idOrganizacion) {
    return this.getData(this.organizacionesURL + '/' + idOrganizacion)
  }
  
  public newOrganizacion(organizacionPayload): Observable<any> {
    return this.http.post(this.organizacionesURL, organizacionPayload);
  }
  public updateOrganizacion(idOrganizacion, organizacionPayload): Observable<any> {
    return this.http.put(this.organizacionesURL + '/' + idOrganizacion, organizacionPayload);
  }
  public deleteOrganizacion(idOrganizacion): Observable<any> {
    return this.http.delete(this.organizacionesURL + '/' + idOrganizacion);
  }
}
