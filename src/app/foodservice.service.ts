import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  

  constructor(private http: HttpClient) { }

  pastaList(): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422077/pastas.php");
  }

  pastaDetail(id: number): Observable<any> {
    return this.http.get(`https://ubaya.xyz/hybrid/160422077/pasta_detail.php?id=${id}`);
  }

  searchPasta(name: string): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422077/search.php" + (name ? "?name=" + name : ""));
  }

  // addPasta(p_name: string, p_url: string, p_description: string, p_price: number, p_spicy: boolean) 
  // {
  // //   this.pastas.push({
  // //     name: p_name,
  // //     url: p_url,
  // //     description: p_description,
  // //     price: p_price,
  // //     spicy: p_spicy // Tambahkan properti spicy saat menambah pasta
  // //   });
  // }

  addPasta(p_name:string,p_url:string,p_description:string,p_price:number, p_spicy:boolean)
{
   //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   const body = new URLSearchParams();
   body.set('name', p_name);
   body.set('desc', p_description);
   body.set('url', p_url);
   body.set('price', p_price.toString());
   body.set('spicy', p_spicy.toString());
   const urlEncodedData = body.toString();
   return this.http.post(
	"https://ubaya.xyz/hybrid/160422077/new_pasta.php", urlEncodedData, { headers });
}


updatePasta(p_id:number,p_name:string,p_url:string,p_description:string,p_price:number)
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('id', p_id.toString());
  body.set('name', p_name);
  body.set('desc', p_description);
  body.set('url', p_url);
  body.set('price', p_price.toString());
  const urlEncodedData = body.toString();

  return this.http.post("https://ubaya.xyz/hybrid/160422077/update_pasta.php", urlEncodedData, { headers });
}

deletePasta(p_id:number)
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('id', p_id.toString()); const urlEncodedData = body.toString();
  
  return this.http.post("https://ubaya.xyz/hybrid/160422077/delete_pasta.php", urlEncodedData, { headers });
}

addInstruction(pasta_id: number, step: number, instruction: string) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('pasta_id', pasta_id.toString()); 
  body.set('step', step.toString());
  body.set('instruction', instruction);
  const urlEncodedData = body.toString();
  return this.http.post("https://ubaya.xyz/hybrid/160422077/new_instruction.php", urlEncodedData, { headers });
}




}
