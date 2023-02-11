export default function Paginacion(props) {

    /*1° forma de hacer un for y devolver resultado */
    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.total; i++) {
            let pagina = i+1;
            resultado.push(
                <a onClick={() => props.onChange(pagina)}
                    className={props.pagina === pagina ?"active" : ""}>
                    {pagina}
                </a>
            );
        }
        return resultado;
    }

    return (
        <div className="topbar-filter">

            <div className="pagination2">
                <span>Pagina {props.pagina} de {props.total}:</span>

                {/*2° forma
                {Array.apply(0, Array(props.total)).map(value =>
                    <a className="active" href="#">1</a>
                )} */}

                {/* 1° forma */}
                {getPaginas()}

            </div>
        </div>);
}