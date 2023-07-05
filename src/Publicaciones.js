import { VscBug, VscGlobe } from "react-icons/vsc";

export const Publicaciones = () => {
  return (
    <div>
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.error(error))

      }}
    >
      <VscBug/>
      Obtener datos
    </button>
    <hr/>
    <VscGlobe/>
    </div>
  );
};
