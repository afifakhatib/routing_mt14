import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private _snackbar = inject(MatSnackBar)

  constructor(
  ) { }

  openSnackBar(msg : string){
     this._snackbar.open(msg , 'CLOSE' , {
      duration : 2500,
      horizontalPosition : 'left',
      verticalPosition : 'bottom'
     })
  }
}
