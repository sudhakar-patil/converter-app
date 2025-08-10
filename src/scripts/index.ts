import '../style.css'
import { ConverterFactory } from "./core/converter.factory";
//const { BASE_URL } = import.meta.env;
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>    
    <p class="read-the-docs" id="p1">      
    </p>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


const lengthConverter = ConverterFactory.getConverter("length");
const kmToMiles = lengthConverter.convert(10, "km", "mi");

document.getElementById("p1")!.innerHTML = `10 kilometers is equal to ${kmToMiles.toFixed(2)} miles.`;