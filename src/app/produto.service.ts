import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos"

  constructor(private _httpClient: HttpClient) { }

  getProduto(id:any): Observable<produto>{
    const urlIdProduto = `${this.url}?id=${id}`;
    
    return this._httpClient.get<produto>(urlIdProduto); 
  }

  getProdutos (): Observable<produto[]>{
    return this._httpClient.get<produto[]>(this.url);
  }

  cadastrarProduto (produto:produto): Observable<produto[]>{
    return this._httpClient.post<produto[]>(this.url, produto);
  }

  atualizaProduto(id:any, produto: produto): Observable<produto[]>{
    const urlAtaulizar = `${this.url}/?${id}`;
    return this._httpClient.put<produto[]>(urlAtaulizar, produto);
  }

  removerProduto(id: any): Observable<produto[]>{
    const urlDeletar = `${this.url}/?${id}`;
    return this._httpClient.delete<produto[]>(urlDeletar);
  }

}
