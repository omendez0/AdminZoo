import { Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

type formProp = {
  email: string;
  password: string;
};

export const AuthLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <h1>login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onInput={(e) => setEmail(e.currentTarget.value)}
            {...register("email", {
              required: { value: true, message: "Campo requerido" },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no valido",
              },
            })}
          />
          {/* REVISAR ESTE ERROR */}
          {/* {errors.email && <span>{errors.email.message}</span>} */}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onInput={(e) => setPassword(e.currentTarget.value)}
            {...register("password", {
              required: { value: true, message: "Campo requerido" },
              minLength: {
                value: 6,
                message: "Minimo 6 caracteres",
              },
            })}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </Box>
  );
};
