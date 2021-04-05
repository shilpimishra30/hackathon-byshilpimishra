import { Component, OnInit, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "./app.service";
import { Post } from "./post";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  name = 'Angular ' + VERSION.major;
  posts: any; //Observable<Post[]>;
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.appService.getPosts().subscribe(
      data => {
        this.posts = data;
        this.loading = false;
        console.log(data);
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
