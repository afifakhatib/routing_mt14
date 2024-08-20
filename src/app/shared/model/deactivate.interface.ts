import { Observable } from "rxjs";


export interface IcanDeactivateComp{
    canDeactivate : () =>  boolean | Observable<boolean> | Promise<boolean>
}