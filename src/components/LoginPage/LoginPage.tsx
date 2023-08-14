import React, { useContext, useState } from "react";
import styles from "./LoginPage.module.css";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import LocationContext from "../../utils/context/LocationProvider";
import { NavLink, Navigate } from "react-router-dom";

const LoginPage = ({ login, isAuth }) => {
  const { location } = useContext(LocationContext);
  const [reg, setReg] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formState) => {
    login(formState.email, formState.password);
  };

  return isAuth ? (
    <Navigate to={location} />
  ) : reg ? (
    <Navigate to="/register" />
  ) : (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.area}>
          <div className={styles.fieldArea}>
            <h1 className={styles.title}>Login</h1>

            <div className={styles.field}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.email,
                })}
              >
                Email
              </label>
              <input
                autoFocus
                type="text"
                placeholder="input email..."
                className={classnames(styles.input, {
                  [styles.errorInput]: errors.email,
                })}
                {...register("email", { required: "Field is empty" })}
              />
              {errors.email && (
                <div className={styles.error}>{errors.email.message}</div>
              )}
            </div>
            <div className={styles.field}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.email,
                })}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="input password..."
                className={classnames(styles.input, {
                  [styles.errorInput]: errors.password,
                })}
                {...register("password", {
                  required: "Field is empty",
                  maxLength: { value: 10, message: "Max length is 10" },
                })}
              />
              {errors.password && (
                <div className={styles.error}>{errors.password.message}</div>
              )}
            </div>
            <button
              className={styles.submitBtn}
              ////type=""
              onClick={() => onSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className={styles.needRegister}>
        <span className={styles.needAccountText}>Need an account?</span>
        <NavLink
          ////
          to={""}
          className={styles.needAccountLink}
          onMouseDown={() => setReg(true)}
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
