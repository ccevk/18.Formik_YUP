import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Gecerl email adresi girin").required("email adresi girin"),
    
    age: yup.number().positive("poztif deger girin").integer("tam sayi girin").required("yas alani zorunlu"),
    
    password: yup.string().required("sifre alani zorunlu") ,
    
    confirmPassword: yup.string().required("sifre tekrari alani zoeunlu")
        .oneOf([yup.ref('password', yup.password)], 'sifreler eslesmiyor') ,
    
        term: yup.boolean().required("lutfen kutucugu onaylayin") 

})