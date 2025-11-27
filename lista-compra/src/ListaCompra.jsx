import Item from './Item';

function ListaCompra() {
    let listaCompra = ["huevos", "patatas", "cerveza"];

    let secuenciaItems = [];

    secuenciaItems = listaCompra.map((nombre, index) =><Item key={index} nombre={nombre}></Item>);

    return (
        <>
            <ul>
                {secuenciaItems}
            </ul>
        </>
    );
}

export default ListaCompra;
