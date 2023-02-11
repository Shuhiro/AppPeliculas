
import { useEffect, useState } from 'react';
import '../../src/App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';

function ListadoPeliculas() {

    const [paginaActual, setPaginaActual] = useState(1)
    const [peliculas, setPeliculas] = useState([]);
    const total_por_pagina = 7;

    useEffect(() => {
        buscarPeliculas();
    }, [])

    const buscarPeliculas = async () => {
        let url = 'https://lucasmoy.dev/data/react/peliculas.json';

        let respuesta = await fetch(url, {
            "method": "GET",
            "headres": {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        });
        let json = await respuesta.json();
        setPeliculas(json);
    }

    // const CargarPeliculas=()=>{
    //   // Ejemplo de slice
    //   //["A","B","C","D"].slice(2,4)
    //   // ["C","D"]
    //   //peliculas = peliculas.slice(0,5) -> cuando pagina actual es 1
    //   peliculas = peliculas.slice((paginaActual - 1) * total_por_pagina,paginaActual * total_por_pagina);
    // };

    const getTotalPaginas = () => {
        let cantidadTotalDePeliculas = peliculas.length;
        return Math.ceil(cantidadTotalDePeliculas / total_por_pagina);
    };

    let peliculasPorPagina = peliculas.slice((paginaActual - 1) * total_por_pagina, paginaActual * total_por_pagina);

    return (
        <PageWrapper>
            {
                peliculasPorPagina.map(pelicula =>
                    <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
                        {pelicula.descripcion}
                    </Pelicula>

                )
            }

            <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
                setPaginaActual(pagina)
            }} />
        </PageWrapper>
    );
}

export default ListadoPeliculas;
