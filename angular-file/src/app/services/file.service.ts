import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

//import {File} from '../interfaces/File'


@Injectable({
  providedIn: 'root'
})
export class FileService {


  URI = 'http://localhost:4000/api/files'

  constructor(private http: HttpClient) { }

  createFile(title: string, description:string, nombre:string, file:File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('nombre', nombre);
    fd.append('archivo',file);
    return this.http.post(this.URI, fd);
  }

  getFiles(){
    return this.http.get<File[]>(this.URI);
  }

  getFile(id: string){
    return this.http.get<File>(`${this.URI}/${id}`);
  }

  deleteFile(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateFile(id: string, title: string, nombre:string, description: string) {
    return this.http.put(`${this.URI}/${id}`, {title, nombre, description});
  }


}
