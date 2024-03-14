import { ValidatorFn } from "@angular/forms";

export function imageUrlValidator(): ValidatorFn {
    return (control) => {
        return control.value === '' || control.value.startsWith('http://') || control.value.startsWith('https://')
            ? null
            : { invalidUrl: true }
    }
}