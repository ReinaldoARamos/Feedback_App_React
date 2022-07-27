import {ChatTeardrop} from  'phosphor-react'; 
import {useState } from 'react';
import { WidgetForm } from './widgetForm';


export function Widget () {

    const [isWidgetOpen, setWidgetOpen] = useState(false) //criando um state, uma variavel que será monitorada e quando mudar muda  o componente

    function ToogleWidgetVisibility(){

        setWidgetOpen(!isWidgetOpen)
        console.log(isWidgetOpen)
    }
    return (
        <div className='absolute bottom-5 right-5 flex-col items-end'>
          {isWidgetOpen ?   <WidgetForm / > : null}
            <button onClick={ToogleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> 
                <ChatTeardrop className='w-6 h-6'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
        <span className='pl-2'></span>
        Feedback
        </span>
               
        </button>
        </div>
        
    )
}
//group = considera o pedaço da classe como grupo
//overflow hidden = esconde atribvutos que sobreboem outro
