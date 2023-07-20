import React, {useContext} from 'react'
import { Link } from 'gatsby'
import { CustomCursorContext } from './customCursorContext';

export default function Faq() {
   
    const data = [{q: "Czy potrzebuję specjalnej licencji, aby wypożyczyć lawetę?", a: "W wielu przypadkach nie jest wymagane posiadanie specjalnej licencji do wypożyczenia lawety. Jednakże, jeśli planujesz prowadzić lawetę jako część swojej działalności komercyjnej lub przewozić duże pojazdy, mogą obowiązywać specjalne zezwolenia lub licencje."},
    {q: "Jakie są wymagania dotyczące wieku, aby wypożyczyć lawetę?", a: "W większości przypadków, aby wypożyczyć lawetę, musisz mieć co najmniej 21 lat. Niektóre wypożyczalnie mogą również wymagać, abyś miał ważne prawo jazdy przez określony okres czasu, na przykład co najmniej rok."},
    {q: "Czy potrzebuję własnego ubezpieczenia, aby wypożyczyć lawetę?", a: "Wypożyczalnie lawet zazwyczaj oferują ubezpieczenie, które obejmuje podstawowe ryzyka związane z korzystaniem z lawety. Jednakże, ważne jest, abyś skonsultował się z wypożyczalnią, aby dowiedzieć się, jakie warunki i pokrycie oferują. Jeśli posiadasz własne ubezpieczenie samochodowe, warto sprawdzić, czy obejmuje również wypożyczone lawety."},
    {q: "Czy muszę dostarczyć własne wiązania lub pasy mocujące do lawety?", a: "Wypożyczalnie lawet zazwyczaj zapewniają wiązania i pasy mocujące jako standardową wyposażenie lawety. Przed wypożyczeniem zapytaj jednak wypożyczalnię, aby upewnić się, że mają odpowiednie wyposażenie i czy jest ono wliczone w koszt wypożyczenia."},
    ];

  return (
    <section className='container faq'>
        <div>
            <h1>kto pyta,<br/>nie błądzi</h1>
            <div className='gold-stripe'></div>
        </div>
        
        <ul>{data.map((item, i)=>(<Question data={item} key={i}/>))}</ul>
    </section>
  )
}

export function Question({data}){

    const { setType } = useContext(CustomCursorContext);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div onMouseEnter={() => { setType('hovered') }} onMouseLeave={() => { setType('default') }}>
        <li onClick={()=>{setIsOpen(prev =>!prev)}} >
            <h2 >
                <span>{data.q}</span>
                
                <div className={isOpen ? "plusminus active" : "plusminus"}></div>
            </h2>
            <p className={isOpen ? '' : 'closed'}>{data.a}</p>
        </li>
        </div>
    )
}