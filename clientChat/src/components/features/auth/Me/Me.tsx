import userService from "./../../../../service/networkAdapter/user/user.na";
import toast from "react-hot-toast";

const getMe = () => {
  userService
    .me()
    .then((resp) => {
      toast("success");
    })
    .catch((err) => {
      toast("errors");
    });
};

const Me = () => {
  return (
    <section>
      <h1>me</h1>
      <button onClick={getMe}>Me</button>
    </section>
  );
};

export default Me;
