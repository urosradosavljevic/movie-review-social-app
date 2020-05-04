import React from "react";
import { AuthHome } from "./auth";
import { LoginPage } from "./../LoginPage/LoginPage";
import useAuthUser from "../../../redux/hooks/useAuthUser";

export const Home = () => {
  const { authUser } = useAuthUser();

  return authUser ? <AuthHome /> : <LoginPage />;
};
