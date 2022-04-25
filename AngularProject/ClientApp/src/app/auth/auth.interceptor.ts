import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private toastr:ToastrService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem("token") != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem("token"))
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status == 401){
                            sessionStorage.removeItem('token');
                            this.router.navigateByUrl('/user/login');
                        }
                        if (err.status == 403){
                            this.toastr.error("You have no access to this content!", "403 Forbidden");
                            this.router.navigateByUrl('/home');
                        }
                    }
                )
            )
        }
        else
            return next.handle(req.clone());
    }
}