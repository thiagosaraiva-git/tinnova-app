import { render, screen } from "@testing-library/react";
import Usuarios from "./page";

describe("Componente Usuarios", () => {
  beforeEach(() => {
    // Mock do localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    global.localStorage = localStorageMock;
  });

  it("deve renderizar uma tabela com os dados dos usuários", () => {
    // Mock dos dados dos usuários
    const mockUsers = [
      { name: "Usuário 1", cpf: "111.111.111-11", phone: "(11) 1234-5678", email: "usuario1@example.com" },
      { name: "Usuário 2", cpf: "222.222.222-22", phone: "(22) 9876-5432", email: "usuario2@example.com" },
    ];
    localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));

    render(<Usuarios />);

    // Verifica se a tabela está presente no DOM
    expect(screen.getByRole("table")).toBeInTheDocument();

    // Verifica se os dados dos usuários estão sendo renderizados corretamente
    mockUsers.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.cpf)).toBeInTheDocument();
      expect(screen.getByText(user.phone)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
  });
});
