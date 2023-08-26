'use client'

import { useEffect } from "react";
import { api } from "../api/api";
import { Typography } from "@mui/material";

export default function Home() {
  useEffect(() => {
    api
      .get()
      .then((response) => {
        const data = response.data;
        console.log("Dados da API: ", data);
        localStorage.setItem("users", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API: ", error);
      });
  }, []);

  return (
    <>
      <Typography>Página onde o GET no Backend é feito</Typography>
    </>
  );
}
