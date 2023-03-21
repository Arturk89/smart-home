export const nameRegex =
  /^[\w'\-][^0-9_!¡,.'"`^£§?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

export const nameWithPolishChars = /[a-zA-ZęóąśłżźćńŻĘÓĄŚŁŹĆŃ]{2,}/
export const surnameWithPolishChars = /[a-zA-ZęóąśłżźćńŻĘÓĄŚŁŹĆŃ]{2,}/

export const surnameRegex =
  /^[\w'\-][^0-9_!¡,.'"`^£§?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

export const mailRegex =
  /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/

export const passwordRegex =
  /^(?=.[A-Z])(?=.[!@#$%^&()])(?=.[0-9])(?=.*[a-z])(?=.{12,})/

export const phoneRegEx = /^[+d](?:[\d]){11}$/

export const phoneRegex2 = /^[\+\/\(\)\-\d]+$/

export const fullNameRegex =
  /^(?=.{2,25}$)[a-zA-ZęóąśłżźćńŻĘÓĄŚŁŹĆŃ]+(?: [a-zA-ZŚĆęóąśłżźćńŻĘÓĄŚŁŹĆŃ]{2,})$/gm

export const addressRegex = /^(?=.*[A-Za-z\d])[A-Za-z\d-]+(\s[A-Za-z\d-]+)*$/

export const cityRegex = /[a-zA-Z -{1}]/

export const countryRegex = /[a-zA-Z -{1}]/

export const vatRegex = /^[0-9]+([-,][0-9]+)*$/

export const postalCodeRegex = /^[0-9]+([-,][0-9]+)*$/
