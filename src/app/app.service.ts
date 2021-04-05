import { Injectable, PipeTransform } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConstants } from "./app-constants";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private baseUrl = AppConstants.ApiBaseUrl;

  constructor(private http: HttpClient) {}

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getPost/${id}`);
  }

  addPost(post: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addPost`, post);
  }

  updatePost(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatePost`, value);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletePost/${id}`, {
      responseType: "text"
    });
  }

  getPosts(): Observable<any> {
    //console.log(this.http.get("./topstories.json"));
    //return this.http.get(`${this.baseUrl}/topstories.json?print=pretty`);
    return this.http.get("./assets/topstories.json", { responseType: "json" });
    //return this.http.get(`/topstories.json`);
  }
}
