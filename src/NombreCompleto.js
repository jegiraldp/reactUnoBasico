export function NombreCompleto() {
  const usuario = {
    nombre: "JorgeExterno",
    apellido: "Giraldo",
  };
  return (
    <div>
      <h1>{usuario.nombre}</h1>
      <h1>{usuario.apellido}</h1>
    </div>
  );
}

export function Usuario(props){
  return <div>
<h1>{props.nombre}</h1>
<h1>{props.cantidad}</h1>
<h1>{props.direccion.ciudad}</h1>
  </div>
}

export function UsuarioExterno({nombre,cantidad, saludo}){
  console.log(saludo)
  return <div>
<h1>{nombre}, cantidad { cantidad }</h1>
  </div>
}