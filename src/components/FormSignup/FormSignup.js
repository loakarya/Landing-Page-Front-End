import React, { Fragment } from 'react';
import TextInput from '../TextInput/TextInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

import { useForm } from 'react-hook-form';

export default function FormSignup() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Fragment>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                >
                <div className="form-container">
                    <TextInput 
                        placeholder="First Name"
                        type="text"
                        name="firstName" 
                        register={register} 
                        required={true}
                        />
                    <TextInput 
                        placeholder="Last Name" 
                        type="text"
                        name="lastName" 
                        register={register} 
                        required={true}    
                        />
                    <TextInput 
                        placeholder="Username" 
                        type="text"
                        name="username" 
                        register={register} 
                        required={true}
                        />
                    <TextInput 
                        placeholder="Email" 
                        type="text"
                        name="email" 
                        register={register} 
                        required={true}
                        />
                    <TextInput 
                        placeholder="Password" 
                        type="password"
                        name="password" 
                        register={register} 
                        required={true}
                        />
                    
                    <br/>
                    <hr className="border border-style-1" /> 
                    <br/><br/>

                    <TextInput 
                        placeholder="Alamat"
                        type="text"
                        name="alamat" 
                        register={register} 
                        required={true} 
                        />
                    <TextInput 
                        placeholder="Kode Pos" 
                        type="text"
                        name="kodePos" 
                        register={register} 
                        required={true}
                        />
                    <TextInput 
                        placeholder="Kota" 
                        type="text"
                        name="kota" 
                        register={register} 
                        required={true}
                        />
                    <TextInput 
                        placeholder="Provinsi" 
                        type="text"
                        name="provinsi" 
                        register={register} 
                        required={true}
                        />
                    <TextInput 
                        placeholder="Negara" 
                        type="text"
                        name="negara" 
                        register={register} 
                        required={true}
                        />
                </div>
                
                <SubmitBtn value="Buat Akun"/>
            </form>

            <div className="text--center mt-20">
                <p className="mb-10">Sudah punya akun?</p>
                <a className="link mt-10" href="/login">Login</a>
            </div>               
        </Fragment>
    );
}