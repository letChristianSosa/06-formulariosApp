import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string =
    '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noPuedeSerManco(control: FormControl): ValidationErrors | null {
    const valorControl: string = control.value?.trim().toLowerCase();
    if (valorControl === 'manco') {
      return {
        esManco: true,
      };
    } else {
      return null;
    }
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ diferentes: true });
        return {
          camposDiferentes: true,
        };
      }

      formGroup.get(campo2)?.setErrors(null);
      return null;
    };
  }
}
