import "./tareas.css";

export function TaskCard({ listo }) {
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };

  const titleStyle = { fontWeight: "lighter", color: "green" };

  return (
    <div style={cardStyles}>
      <h1 style={titleStyle}>Mi primera tarea</h1>

      <h2 className="elH2">Mi primera tarea en H2</h2>
      <p>Tarea realizadA</p>
      <span style={listo ? { background: "green" } : { background: "red" }}>
        {listo ? "Tarea lista" : "Tarea Pendiente"}
      </span>
      <hr />
      <span className={listo ? "bg-green" : "bg-red"}>
        {listo ? "Tarea lista" : "Tarea Pendiente"}
      </span>
    </div>
  );
}
