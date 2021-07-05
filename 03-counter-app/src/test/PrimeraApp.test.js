import { render } from "@testing-library/react";
import PrimerApp from "../PrimerApp";

describe("Pruebas PrimeraApp", () => {
  test("Mostrar MSJ Soy Jose ", () => {
    const saludo = "Soy Jose";
    const { getByText } = render(<PrimerApp></PrimerApp>);
    expect(getByText(saludo)).toBeInTheDocument();
  });
});
