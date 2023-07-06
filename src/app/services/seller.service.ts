import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignUp } from "../data-type";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  // router: any;

  constructor(private http: HttpClient,private router:Router) {}

  userSignUp(data: SignUp) {
    // console.log("service call");
    // return this.http.post("http://localhost:3000/seller", data);
    this.http
      .post("http://localhost:3000/seller", data, {
        observe: "response",
      })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem("seller", JSON.stringify(result.body));
        this.router.navigate(["seller-home"]);
        // console.log("result", result);
      });
    }
    // return false;
    reloadSeller(){
      if(localStorage.getItem('seller')){
        this.isSellerLoggedIn.next(true)
        this.router.navigate(['seller-home'])
      }
    }
  }

