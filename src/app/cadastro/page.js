"use client";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import LoadingButton from "@mui/lab/LoadingButton";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./page.scss";

export default function Cadastro() {
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formValidation = Yup.object().shape({
    name: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Campo deve conter 3 caracteres ou mais")
      .max(50, "Campo deve conter no máximo 50 caracteres"),
    cpf: Yup.string()
      .required("Campo obrigatório")
      .test('is-eleven-digits', 'Digite um cpf válido (apenas números)', (value) => {
        return value.length === 11;
      })
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Digite um cpf válido (apenas números)'),
    phone: Yup.string()
      .required("Campo obrigatório")
      .min(10, "Digite um número de telefone válido (apenas números)")
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Digite um número de telefone válido (apenas números)'),
    email: Yup.string()
      .required("Campo obrigatório")
      .email("Insira um e-mail válido"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formValidation) });

  const onSubmit = (data) => {
    setIsLoading(true);
    
    //Aguarda 3 segundo para ser possível ver o loading
    setTimeout(() => {
      let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (!Array.isArray(existingUsers)) {
        existingUsers = [];
      }
      existingUsers.push(data);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      setIsLoading(false);
      handleSnackOpen();
      reset();
    }, 3000); // 5000 milissegundos = 5 segundos
  };
  
  const handleSnackOpen = () => {
    setIsSnackOpen(true);
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <Typography>Tinnova</Typography>
        </Grid>
        <Box component="form" autoComplete="off">
          <Grid item>
            <FormControl>
              <TextField
                required
                id="name"
                label="Nome completo (sem abreviações)"
                variant="standard"
                {...register("name")}
                error={errors.name ? true : false}
                helperText={errors.name?.message}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                required
                id="cpf"
                label="Cpf"
                variant="standard"
                {...register("cpf")}
                error={errors.cpf ? true : false}
                helperText={errors.cpf?.message}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                required
                id="phone"
                label="Telefone"
                variant="standard"
                {...register("phone")}
                error={errors.phone ? true : false}
                helperText={errors.phone?.message}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <TextField
                required
                id="email"
                label="E-mail"
                variant="standard"
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <LoadingButton
              className="cadastroBtn"
              onClick={handleSubmit(onSubmit)}
              fullWidth
              loading={isLoading}
            >
              Cadastrar
            </LoadingButton>
          </Grid>
        </Box>
      </Grid>
      <Snackbar
        open={isSnackOpen}
        onClose={() => setIsSnackOpen(false)}
        autoHideDuration={6000}
        message="Usuário adicionado com sucesso!"
      />
    </>
  );
}
