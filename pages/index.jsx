import { useState } from "react"

export default function Home(){
    function Contador(){
        const[contador, setContador] = useState(0)

        function adicionar(){
            setContador(contador + 1)
        }
        return(
            <div>
                <button onClick={adicionar}>Adicionar</button>
                <p></p>
                <span>{contador}</span>
            </div>
        )
    }
    return(
        <div>
            <h1>Faculdade Santa Lucia</h1>
            <Contador />
        </div>
    )
}