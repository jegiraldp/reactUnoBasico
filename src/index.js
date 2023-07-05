import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { NombreCompleto, Usuario, UsuarioExterno } from "./NombreCompleto";
import Producto, { NavBar } from "./Producto";
import { Button } from "./Button";
import { TaskCard } from "./Tareas";
import { SaludarClase } from "./SaludarClase";
import { Publicaciones } from "./Publicaciones";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Holamundo() {
  return <h1>-- Hola mundo básico --</h1>;
}

function Numero() {
  const num = 5;
  return (
    <h1>{num == 5 ? "Variable igual a 5 :)" : "Variable no igual a 5"}</h1>
  );
}

function Saludar() {
  return <h1>-- Hola desde la función saludar --</h1>;
}

function Sumar(x, y) {
  return <h3>{x + y}</h3>;
}

const handleChange = (e) => {
  console.log(e.target.value);
};

const usuarios = [
  {
    id: 1,
    nombre: "Jorge Giraldo",
    img: "https://robohash.org/user1",
  },
  {
    id: 2,
    nombre: "Jorge Giraldo2",
    img: "https://robohash.org/user2",
  },
];

function Contador() {
  const [cont, setCounter] = useState(10)
  const [mensaje, setMensaje] = useState("");

  useEffect(()=> {
    console.log("render");
  },[cont]);
 
  return (
    <div>
      <h1>Contador : {cont}</h1>
      <button
        onClick={() => {
          setCounter(cont+1)
        }}
      >
        Incrementar Contador
      </button>
      <button onClick={()=>{
        setCounter(cont-1)
      }}>Restar</button>
      <button onClick={()=>{
        setCounter(0)
      }}>Reiniciar</button>
      <hr />
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es " + mensaje);
        }}
      >
        Guardar
      </button>
     
    </div>
  );
}
//render
root.render(
  <>
    <Contador />
    {/*usuarios.map((u, i) => {
      return <div key={i}>
        <p>{u.nombre}</p>
        <img src={u.img}/>
      </div>;
    })

    
    <Button text="Click" />
    <Button text="Pagar" />
    <Button />
    <br />
    <br />
    <input
      id="elInput"
      onChange={function (evento) {
        //alert('evento del input')
        console.log(evento.target.value);
      }}
    />
    <hr />
    <input
      id="elInput2"
      onBlur={handleChange}
    />
    <hr />
    <form onSubmit={()=>console.log('Enviando Datos del form')}>
      <h1>Registro de usuarios</h1>
      <button>Enviar</button>
    </form>

    <hr />
    <form onSubmit={(e)=>{
      e.preventDefault()
      console.log('Enviado')
    }}>
      <h1>Registro de usuarios</h1>
      <button>Enviar</button>
    </form>
    <hr />
    <TaskCard listo={false} />
    <hr />
    <SaludarClase />
   
    {Sumar(4, 5)}
    <Saludar />
    <Numero />
    <hr />
    <NombreCompleto />
    <Producto nombre="uno" titulo="jiji" />
    <Producto nombre="dos" />
    <Producto nombre={30} />
    <hr />
    <NavBar edad="43" />
    //////////////////
    <Usuario
      nombre="Jorge"
      cantidad="2"
      puntos={[22, 44, 66]}
      direccion={{ calle: "5", casa: "45", ciudad: "Medellin" }}
    />
    <UsuarioExterno
      nombre="Jorge3"
      cantidad="2_3_4"
      saludo={function () {
        alert("Hola Jorge");
      }}
    />
   
    <hr />
    <Publicaciones />
     */}
  </>
);
