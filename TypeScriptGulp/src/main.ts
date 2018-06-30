import { sayHello } from './greet';

function showHello(divName: string, name: string){
    const elt = document.querySelector(divName);
    elt.innerHTML = sayHello(name);
}

showHello(".greeting", "TypeScriptzes");