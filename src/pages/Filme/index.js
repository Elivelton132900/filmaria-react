import { useEffect, useState } from 'react'
import './filme-info.css'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { toast } from "react-toastify"


export default function Filme() {
    const {id} = useParams()
    const history = useHistory()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)
            if(response.data.length === 0) {
                // id que nao existe = vai pra home
                history.replace('/')
                return // sai da função
            }

            setFilme(response.data)
            setLoading(false)
        }

       loadFilme() 

       return () => {

       }

    }, [history, id])

    function salvaFilme() {

        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvos = JSON.parse(minhaLista) || []

        // Se tiver algum item salvo com o mesmo ID ignora
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if(hasFilme) {
            toast.info('Você já possui esse filme salvo')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    if(loading) {
        return(
            <div className="filme-info">
                <h1>Carregando o filme</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}></img>
            <h2>Sinopse</h2>
            {filme.sinopse}

            <div>
                <button onClick={salvaFilme}>Salvar</button>
                <button >
                    <a target="blank" href={`http://youtube.com/results?search_query=${filme.nome} Trailer`} >Trailer</a>
                </button>
            </div>

        </div>
    )
}