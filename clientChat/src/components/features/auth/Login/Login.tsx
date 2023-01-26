import { useForm } from "react-hook-form";
import userService from "./../../../../service/networkAdapter/user/user.na";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as reduxActionUser from "./../../../../service/redux/user/actions.user";
import Input from "./../../../atoms/Input/Input";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    userService
      .login(data)
      .then((resp) => {
        toast("success");
        // update redux
        let dataUser = resp.data;
        dispatch(reduxActionUser.setUser(dataUser));
      })
      .catch((err) => {
        toast("fail");
      });
  });
  return (
    <section>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Input {...register("email")} type="email" placeholder="Luo" />
        {errors?.email && <p>{errors.email.message}</p>}

        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors?.password && <p>{errors.password.message}</p>}

        <Input type="submit" />
      </form>
    </section>
  );
};

export default Login;
