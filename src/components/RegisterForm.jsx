import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {
    
    const submit = (values , action) => {
        console.log(values)
        console.log(action)
        setTimeout(()=> {
            //veri tabanina veriyi katdis gibi izlenim vermek icin yazildi burasi
            action.resetForm();
        }, 2000)
    }

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password: '',
          confirmPassword: '',
          term: ''
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
      });

      console.log(errors)

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <div className='inputDiv' >
                <label>Email</label>
                <input type="text" id='email' 
                placeholder='email girin' 
                value={values.email} 
                onChange={handleChange} />
                {errors.email && <p className='input_error'>{errors.email} </p>}
            </div>

            <div className='inputDiv' >
                <label>Yas</label>
                <input type="number" id='age' 
                placeholder='yasi girin' 
                value={values.age} 
                onChange={handleChange} />
                {errors.age && <p className='input_error'>{errors.age} </p>}
            </div>

            <div className='inputDiv' >
                <label>Sifre</label>
                <input type="password" id='password' 
                placeholder='sifreyi girin' 
                value={values.password} 
                onChange={handleChange} />
                {errors.password && <p className='input_error'>{errors.password} </p>}
            </div>

            <div className='inputDiv' >
                <label>Sifre Tekrari</label>
                <input type="password" id='confirmPassword' 
                placeholder='sifreyi tekrar girin' 
                value={values.confirmPassword} 
                onChange={handleChange} />
                {errors.confirmPassword && <p className='input_error'>{errors.confirmPassword} </p>}
            </div>

            <div className='inputDiv' >
                <div style={{display:'flex', flexDirection:'row', 
                alignItems:'flex-start', justifyContent:'flex-start'}}>
                <input style={{width:'20px', height:'12px'}} type="checkbox" id='term' 
                value={values.term} 
                onChange={handleChange} />
                <label>Kullanici sozlemesini kabul ediyorum</label>                
                </div>
                {errors.term && <p className='input_error'>{errors.term} </p>}
            </div>

            <button type='submit' className='saveButton'>Kaydet</button>
        </form>
    </div>
  )
}

export default RegisterForm