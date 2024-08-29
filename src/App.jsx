
import { useReducer } from 'react'
import './App.css'
const value = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': {
      return state+1;
    }
    case 'decrement': {
      return state-1;
    }
    case 'reset': {
      return value;
    }
    default: {
      return state;
    }

  }
}
function App() {
  const [count, dispatch] = useReducer(reducer,value);
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => {
          dispatch('increment')
        }}>arttir</button>
        <button onClick={() => {
          dispatch('decrement')
        }}>azalt</button>
        <button onClick={() => {
          dispatch('reset')
        }}>sifirla</button>
      </div>
      {/* USE REDUCERDE BASLANGIÇ DEĞERİ İSTER SENDEN VE BİR FONKSİYON İSTER O FONKSİYONDA SET FONKSIYONUNU KULLANARAK ICERI VERI YOLLARSIN BU ORNEKTE DISPATCH VE SWITCH CASE ILE  UYGUN OLAN DEĞERI DONER USESTATEDEN DAHA KOLAYDIR! */}
    </>
  )
}

export default App
