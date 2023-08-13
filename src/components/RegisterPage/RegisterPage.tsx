import React from "react";
import styles from "./RegisterPage.module.css";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const RegisterPage = ({ registering, isRegistrationSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      login: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (formState) => {
    registering(formState.login, formState.email, formState.password);
  };

  return (
    <div className={styles.wrapper}>
      {isRegistrationSuccess ? (
        <>
          <h1 className={styles.titleRegSuccess}>
            You have successfully registered!
          </h1>
          <NavLink className={styles.goHomeLink} to="/">
            go HomePage
          </NavLink>
        </>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.area}>
            <div className={styles.fieldArea}>
              <h1 className={styles.titleRegistration}>Registration</h1>
              <div className={styles.field}>
                <label
                  className={classnames(styles.label, {
                    [styles.errorLogin]: errors.login,
                  })}
                >
                  Login
                </label>
                <input
                  autoFocus
                  type="text"
                  placeholder="input login..."
                  className={classnames(styles.input, {
                    [styles.errorInput]: errors.login,
                  })}
                  {...register("login", {
                    required: "Field is empty",
                    maxLength: { value: 15, message: "Max length is 15" },
                  })}
                />
                {errors.login && (
                  <div className={styles.error}>{errors.login.message}</div>
                )}
              </div>
              <div className={styles.field}>
                <label
                  className={classnames(styles.label, {
                    [styles.errorLabel]: errors.email,
                  })}
                >
                  Email
                </label>
                <input
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
                  placeholder="repeat password..."
                  className={classnames(styles.input, {
                    [styles.errorInput]: errors.repeatPassword,
                  })}
                  {...register("repeatPassword", {
                    required: "Field is empty",
                    maxLength: { value: 10, message: "Max length is 10" },
                  })}
                />
                {errors.repeatPassword && (
                  <div className={styles.error}>
                    {errors.repeatPassword.message}
                  </div>
                )}
              </div>

              <button
                className={styles.submitBtn}
                type=""
                onClick={() => onSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;
