import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveuser, logout } from "../../features/User";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Spinnerf from "../../Components/Spinnerf";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
      }
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/register",
        formData
      );
      console.log(response);
      const user = {
        email: response.data.email,
        username: response.data.username,
        isVerified: response.data.isVerified,
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(
        saveuser({
          email: user.email,
          username: user.username,
          isVerified: user.isVerified,
        })
      );
      setLoading(false);
      navigate(`/auth`);
    } catch (error) {
      console.log(error)
      setAlert(
        <Alert
          style={{ position: "fixed", bottom: "3%", left: "2%", zIndex: 999 }}
          variant="filled"
          severity="error"
        >
          {error.response.data.error}
        </Alert>
      );
      setTimeout(() => setAlert(null), 5000);
      setLoading(false);
    }
  };

  return (
    <section
      className="w-screen h-screen flex flex-col justify-center items-left md:items-center"
      id="signup"
    >
      {loading && <Spinnerf />}
      <Stack spacing={2}>{alert}</Stack>
      <form
        onSubmit={handleSubmit}
        className="rounded md:w-11/12 p-12 flex flex-col gap-3 md:p-6"
        style={{ backgroundColor: "white" }}
      >
        <p className="text-bluepurple text-2xl font-medium">Welcome !</p>
        <p className="text-navyblue text-3xl font-semibold">Sign up to</p>
        <p className="text-gray text-base font-normal  mb-8">
          Enjoy Omniscent Perspectives
        </p>
        <TextField
          variant="outlined"
          type="text"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full rounded form-input"
          required
        />
        <TextField
          variant="outlined"
          type="email"
          name="email"
          value={formData.email}
          label="Email ID"
          onChange={handleChange}
          className="w-full rounded form-input"
          required
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            className="w-full rounded form-input"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            className="w-full rounded form-input"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <button
          className="bg-navyblue border-1 border-solid border-navyblue text-white rounded w-full py-3 hero-hover-animated-button"
          type="submit"
        >
          Sign up
        </button>
        <p className="self-center text-bluepurple font-light text-base md:text-sm">
          Already have an Account ?
          <Link to="/login" className=" text-navyblue font-bold text-base">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
