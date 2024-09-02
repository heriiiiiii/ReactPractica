import React, { useState } from 'react'

export const PrimerComponente = () => {
    //let nombre ="Heriberto";
    let web = "heribertoweb.com";
    const [nombre, setNombre] = useState("Heriberto");
    let cursos = [
        "Curso de C#",
        "Curso de React",
        "Curso de JavaScript",
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }
    return (
        <div>
            <h1>Mi primer Componente</h1>
            <p>Este texto es de mi primer componente</p>
            <p>Mi nombre es: <strong className={nombre.length >=4 ? 'verde' : 'rojo' }>{nombre}</strong></p>
            <p>Mi web es: {web}</p>

            <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='cambiar nombre'></input>
            <button onClick={e => {
                console.log("El valor guardado en tu estado es:", nombre);
            }}>
                Mostrar valor de estado
            </button>


            <button onClick={e => cambiarNombre("HERIBERTO VARGAS VARGAS")}>
                Cambiar Nombre
            </button>
            <h2>Cursos:</h2>
            <ul>
                {
                    cursos.map((curso, indice) => {
                        return (<li key={indice}>
                            {curso}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
