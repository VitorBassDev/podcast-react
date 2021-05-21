import {useEffect} from "react"

  // SEGUNDA ESTRATÉGIA PARA CONSUMIR API EM SSR - UTILIAR export async function getServerSidePropos()
  // exportar função com o nome getServerSidePropos()
  // TEM QUE PASSAR COMO PARAMETRO A PROPS NA FUNÇÃO

export default function Home(props) {
  
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}  

// TERCEIRA OPÇÃO DE CONSUMI DE API COM Static Server Generetion --SSG

// ULTIMO PARAMETRO INDICA A PRÓXIMA CHAMADA PARA A API

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return{
    props:{
      episodes: data,
    },

    revalidate: 60 * 60 * 80
  }

  // SEGUNDA OPÇÃO DE CONSUMI DE API COM getServerSidePropos - SSR
  // export async function getStaticProps() {
  //   const response = await fetch('http://localhost:3333/episodes')
  //   const data = await response.json()
    
  //   return{
  //     props:{
  //       episodes: data,
  //     }
  //   }
}

 //  PRIMEIRA ESTRATÉGIA PARA CONSUMIR API EM SPA
  // useEffect(()=>{
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  //--------------------------------------
