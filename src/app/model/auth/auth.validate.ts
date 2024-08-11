import { z } from "zod";
const authValidateSigninSchema=z.object({
    body:z.object({
        email:z.string(),
        password:z.string()
    })
})
export const authValidate={
    authValidateSigninSchema
}