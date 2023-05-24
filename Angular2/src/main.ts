import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//Aqui importo las clases creadas
import { Persona } from './clases/Persona.ts'
import { PersonaDos } from './clases/PersonaDos.ts'

let objeto:Persona=new Persona("Angela","López",33)
console.log (objeto)
/*Asi quedaría la variable si tuviera la estructura de opcional
let objeto:Persona=new Persona(33)
console.log (objeto)*/

let objeto2:PersonaDos=new PersonaDos("Angela","López")
console.log (objeto2)




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
