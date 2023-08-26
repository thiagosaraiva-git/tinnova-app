import React from "react";
import { render, act } from "@testing-library/react";
import Home from "./page";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Home", () => {
  it("faz o GET na API e armazena no localStorage", async () => {
    // Cria uma instância do axios-mock-adapter
    const mock = new MockAdapter(axios);

    // Simula a resposta da API
    const responseData = [{ id: 1, name: "John" }];
    mock.onGet("/").reply(200, responseData);

    // Renderiza o componente Home
    let container;
    await act(async () => {
      container = render(<Home />);
    });

    // Verifica se os dados foram armazenados corretamente no localStorage
    expect(localStorage.getItem("users")).toEqual(
      JSON.stringify(responseData)
    );
  });
});
