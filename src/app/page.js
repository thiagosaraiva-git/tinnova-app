'use client'

import React, { useEffect } from "react";
import { api } from "../api/api";
import { Grid, Typography } from "@mui/material";

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
    <Grid container alignContent={'center'} justifyContent={'center'}>
      <Typography>Página de entrada onde o GET no Backend é feito</Typography>
    </Grid>
  );
}
