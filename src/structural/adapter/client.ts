import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-function-adapter";
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from "./validation/email-validator-protocol";

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("Email é válido");
  } else {
    console.log("Email é inválido");
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log("Email é válido");
  } else {
    console.log("Email é inválido");
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), "jowgomes3@gmail.com");
validaEmailFn(emailValidatorFnAdapter, "jowgomes3@gmail.com");
