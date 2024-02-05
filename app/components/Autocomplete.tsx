import React, { useState, ChangeEvent } from 'react';
import { AutocompletadoProps } from '../interfaces/interfaces';

const Autocomplete: React.FC<AutocompletadoProps> = ({ opciones, setOpcion }) => {
  const [entrada, setEntrada] = useState<string>(''); 
  const [sugerencias, setSugerencias] = useState<string[]>([]);

  const manejarCambios = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setEntrada(valor);
    setOpcion(valor);
    const sugerenciasFiltradas = opciones.filter(opcion =>
      opcion.toLowerCase().includes(valor.toLowerCase())
    );

    setSugerencias(sugerenciasFiltradas);
  };

  const seleccionarSugerencia = (valor: string) => {
    setEntrada(valor);
    setOpcion(valor);
    setSugerencias([]);
  };

  return (
    <div className='w-full relative'>
      <input
        className='h-12 pl-5 focus:outline-none focus:ring focus:ring-blue-hover w-full'
        type="text"
        value={entrada}
        onChange={manejarCambios}
      />
      <ul className='absolute max-h-52 overflow-y-auto bg-white w-full top-16 border-blue z-10'>
        {entrada && sugerencias.map((opcion, index) => (
          <li className='py-2 px-4 hover:bg-blue-hover' key={index} onClick={() => seleccionarSugerencia(opcion)} >
            {opcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;