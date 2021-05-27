import * as esbuild from 'esbuild-wasm'
import { useState, useEffect } from 'react'

const App = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    })
    console.log(service)
  }

  const clickHandler = () => {
    console.log(input)
  }

  useEffect(() => {
    startService()
  }, [])

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} value={input} />
      <div>
        <button onClick={clickHandler}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}

export default App
