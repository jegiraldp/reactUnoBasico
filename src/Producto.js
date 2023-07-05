function Producto({nombre, titulo="Sin titulo"}) {
  return <div>
    <h1>Soy Producto {nombre} -- {titulo}</h1>
  </div>;
}

export function NavBar(props){
    return <nav>
        Navegación { props.edad }
    </nav>
}
export default Producto;
