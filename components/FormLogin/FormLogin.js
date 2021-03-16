import React, { Fragment } from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import TextInput from '../TextInput/TextInput';
import { useForm } from 'react-hook-form';

export default function FormLogin(props) {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        //console.log(data);
        props.handleData(data);
    }

    return (
        <Fragment>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                //onSubmit={props.submitForm} 
                method="post" >
                <div className="form-container">
                    <TextInput 
                        type="text"
                        placeholder="Email"
                        name="email" 
                        register={register} 
                        required={true}
                    />
                    <TextInput 
                        type="password"
                        placeholder="Password"
                        name="password"
                        register={register}
                        required={true}
                    />
                </div>
                <SubmitBtn value="Login" />
            </form>
            <div className="text--center mt-20">
                <p className="mb-10">Belum punya akun?</p>
                <a className="link mt-10" href="/signup">Buat Akun</a>
            </div>
        </Fragment>
    );
}

// export default FormLogin;