import {ChatTeardrop} from  'phosphor-react'; 
import { WidgetForm } from './widgetForm';
import {Popover} from '@headlessui/react';

export function Widget () {

    return (
       <Popover className='absolute bottom-4 right-4 md:bottom-10  flex-col items-end'>
         
            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> 
                <ChatTeardrop className='w-6 h-6'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
        <span className='pl-2'></span>
        Feedback
        </span>
               
        </Popover.Button>
    </Popover>
        
    )
}
//group = considera o pedaço da classe como grupo
//overflow hidden = esconde atribvutos que sobreboem outro
