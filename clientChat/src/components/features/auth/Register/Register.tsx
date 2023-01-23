import { useForm } from 'react-hook-form';
import userService from "./../../../../service/networkAdapter/user/user.na";
import toast from 'react-hot-toast';
import Input from "./../../../atoms/Input/Input";
type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => {
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
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Input {...register("firstname")} placeholder="Firstname" />
                {errors?.firstname && <p>{errors.firstname.message}</p>}

                <Input {...register("lastname")} placeholder="Lastname" />
                {errors?.lastname && <p>{errors.lastname.message}</p>}

                <Input {...register("email")} type="email" placeholder="Email" />
                {errors?.email && <p>{errors.email.message}</p>}

                <Input {...register("password")} type="password" placeholder="Password" />
                {errors?.password && <p>{errors.password.message}</p>}

                <Input type="submit" />
            </form>
        </section>
    );
}

export default Register;