import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor(private http: HttpClient) {}

  // Get list of all pastas
  pastaList(): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422077/pastas.php");
  }

  // Get details of a specific pasta by ID
  pastaDetail(id: number): Observable<any> {
    return this.http.get(`https://ubaya.xyz/hybrid/160422077/pasta_detail.php?id=${id}`);
  }

  // Search for pastas by name
  searchPasta(name: string): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422077/search.php" + (name ? "?name=" + name : ""));
  }

  // Add a new pasta to the database
  addPasta(p_name: string, p_url: string, p_description: string, p_price: number, p_spicy: boolean): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('name', p_name);
    body.set('desc', p_description);
    body.set('url', p_url);
    body.set('price', p_price.toString());
    body.set('spicy', p_spicy.toString());
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.xyz/hybrid/160422077/new_pasta.php", urlEncodedData, { headers });
  }

  // Update details of an existing pasta
  updatePasta(p_id: number, p_name: string, p_url: string, p_description: string, p_price: number): Observable<any> {
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

  // Delete a pasta from the database
  deletePasta(p_id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('id', p_id.toString());
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.xyz/hybrid/160422077/delete_pasta.php", urlEncodedData, { headers });
  }

  // Add an instruction for a specific pasta
  addInstruction(pasta_id: number, step: number, instruction: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('pasta_id', pasta_id.toString());
    body.set('step', step.toString());
    body.set('instruction', instruction);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.xyz/hybrid/160422077/new_instruction.php", urlEncodedData, { headers });
  }

  // Login function to authenticate user credentials
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.xyz/hybrid/160422077/login.php", urlEncodedData, { headers });
  }

  uploadImage(p_name:string, p_base64:string)
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('name', p_name.toString());
  body.set('base64', p_base64.toString());
  const urlEncodedData = body.toString();
  return this.http.post("https://ubaya.xyz/hybrid/160422077/upload_image.php", urlEncodedData, { headers });
}

position_xy(): Observable<any> {
  return this.http.get("https://ubaya.xyz/posisi_xy.php");
}

updatePosisi(lat: number, lon: number): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('latitude', lat.toString());
  body.set('longitude', lon.toString());
  const urlEncodedData = body.toString();
  return this.http.post("https://ubaya.xyz/hybrid/160422077/update_posisi.php", urlEncodedData, { headers });
}

tampilkanPosisi(lat: number, lon: number): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('latitude', lat.toString());
  body.set('longitude', lon.toString());
  const urlEncodedData = body.toString();
  return this.http.post("https://ubaya.xyz/hybrid/160422077/posisi.php", urlEncodedData, { headers });
}

}
