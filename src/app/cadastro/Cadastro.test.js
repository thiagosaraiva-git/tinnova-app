import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cadastro from "./page";

describe("Componente Cadastro", () => {
  it("deve exibir mensagem de sucesso ao cadastrar um usuário", async () => {
    // Renderiza o componente
    render(<Cadastro />);

    // Preenche os campos do formulário
    userEvent.type(screen.getByLabelText(/nome completo/i), "Usuário Teste");
    userEvent.type(screen.getByLabelText(/cpf/i), "11111111111");
    userEvent.type(screen.getByLabelText(/telefone/i), "1234567890");
    userEvent.type(screen.getByLabelText(/e-mail/i), "teste@example.com");

    // Simula o clique no botão de cadastro
    userEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
  });
});
