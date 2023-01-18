import { useForm } from 'react-hook-form';
import userService from "./../../../../service/networkAdapter/user/user.na";
import toast from 'react-hot-toast';

type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        userService.register(data)
            .then(resp => {
                toast("success")
            })
            .catch(err => {
                toast("fail")
            })
    });

    return (
        <section>
            <h1>register</h1>
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input {...register("firstname")} placeholder="Firstname" />
                {errors?.firstname && <p>{errors.firstname.message}</p>}

                <input {...register("lastname")} placeholder="Lastname" />
                {errors?.lastname && <p>{errors.lastname.message}</p>}

                <input {...register("email")} type="email" placeholder="Email" />
                {errors?.email && <p>{errors.email.message}</p>}

                <input {...register("password")} type="password" placeholder="Password" />
                {errors?.password && <p>{errors.password.message}</p>}

                <input type="submit" />
            </form>
        </section>
    );
}

export default Register;