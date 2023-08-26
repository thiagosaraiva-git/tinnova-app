import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("abre e fecha o menu de navegação", () => {
    // Renderiza o componente Navbar
    const { getByRole, queryByText } = render(<Navbar />);

    // Verifica se o menu está fechado inicialmente
    expect(queryByText("Início")).toBeNull();

    // Encontra o botão para abrir o menu
    const menuButton = getByRole("button", { name: "Open menu" });

    // Clica no botão para abrir o menu
    fireEvent.click(menuButton);

    // Verifica se o menu foi aberto
    expect(queryByText("Início")).toBeInTheDocument();

    // Clica no botão para fechar o menu
    fireEvent.click(menuButton);

    // Verifica se o menu foi fechado novamente
    expect(queryByText("Início")).toBeNull();
  });
});
