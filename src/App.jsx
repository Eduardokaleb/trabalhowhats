import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Botao } from './Botao'
import { Mensagem } from './Mensagem'

<body>

</body>

export default App


const menssagens = [
  {
    enviada: false ,
    recebida: true,
    visualizacao: true,
    mensagem: 'oi...',
    
  },
  {
    enviada: false,
    recebida: true,
    visualizada: true,
    mensagem: 'Tu não me ama mais?',
  },

  {
    enviada: true,
    recebida: false,
    visualizada: false,
    mensagem: 'Oi, boa tarde.',
  },

  {
    enviada: true,
    recebida: false,
    visualizada: false,
    mensagem: 'Quem é você mesmo?',
  },


  
  

]

function App() {
  const [count, setcount] = useState(0)

  return (
    <div class="chat">
      <div class="header">
       <Botao></Botao>
        <h3>Meu Chat</h3>
      </div>
      <div class="content">
        <ul>
          {menssagens.map(mensagem=>(<Mensagem{...mensagem} />))}
        </ul>
      </div>
    </div>

  )


}



