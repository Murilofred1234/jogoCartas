
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { AruqieroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoMurilo = new Mago('MuriloTheMago', 21, 'Ametista', 4, 12)

const bruxoMatheus = new Mago('MatheusTheWitch', 8, 'Fogo', 7, 10)

const arqueiroTeco = new Arqueiro('Teco', 21, 22)

const arqueiroItalian = new Arqueiro('Italiano', 44, 2)

const ArqueiroMagoMaria = new AruqieroMago('Maria', 21, 10, 'ar', 4, 8)

const guerreiroFurioso = new Guerreiro('Garen', 10)


const personagens = [magoMurilo, bruxoMatheus, arqueiroTeco, arqueiroItalian, ArqueiroMagoMaria, guerreiroFurioso]


new PersonagemView(personagens).render()

//console.log(Personagem.verificarVerncedor(arqueiroTeco,magoMurilo))

console.log(arqueiroTeco)
