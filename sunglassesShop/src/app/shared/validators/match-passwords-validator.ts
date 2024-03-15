import { ValidatorFn } from "@angular/forms";

export function matchPassword(): ValidatorFn {

    return (control) => {
        const password = control?.value.password
        const rePassword = control?.value.rePassword

        return password === rePassword
            ? null
            : { differentPasswords: true }
    }
}