import { useState } from "react";

function ListaFiltrable() {
  // Lista de frutas
  const frutas = [
    "Manzana",
    "Banana",
    "Cereza",
    "Durazno",
    "Uva",
    "Mango",
    "Piña",
    "Pera",
    "Kiwi",
    "Sandía",
  ];

  // Estado para almacenar el criterio de filtro
  const [filtro, setFiltro] = useState("");
  // Estado para almacenar las frutas filtradas
  const [frutasFiltradas, setFrutasFiltradas] = useState(frutas);

  // Función para manejar el cambio en el input de filtro
  const handleFiltroChange = (e) => {
    const valorFiltro = e.target.value;
    setFiltro(valorFiltro);

    // Filtrar las frutas basadas en el criterio
    const frutasFiltradas = frutas.filter((fruta) =>
      fruta.toLowerCase().includes(valorFiltro.toLowerCase())
    );

    setFrutasFiltradas(frutasFiltradas);
  };

  return (
    <div className="lista-filtrable">
      <h4>Lista de Frutas Filtrable</h4>
      <input
        type="text"
        placeholder="Filtrar frutas"
        value={filtro}
        onChange={handleFiltroChange}
        className="input-filtro"
      />

      <ul className="lista-frutas">
        {frutasFiltradas.length > 0 ? (
          frutasFiltradas.map((fruta, index) => (
            <li key={index} className="item-fruta">
              {fruta}
            </li>
          ))
        ) : (
          <li className="item-fruta">No se encontraron frutas</li>
        )}
      </ul>
    </div>
  );
}

export default ListaFiltrable;
