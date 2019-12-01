import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {SessionService} from "./session.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(private session: SessionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.session.getToken();
    // request.headers.set('Ac' )

    // if (token) {
    //   request = request.clone({
    //     setParams: {'auth': token}
    //   });
    // }
    console.log(request);
    return next.handle(request);
  }

}
