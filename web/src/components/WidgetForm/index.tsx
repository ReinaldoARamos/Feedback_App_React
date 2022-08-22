import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageURL from '../../assets/bug.svg'
import IdeaURL from '../../assets/ideia.svg';
import OtherURL from '../../assets/other.svg';

import { FeedbackTypeStep } from "../WidgetForm/Steps/FeedbackTypeStep";



export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        Image: {
            source: bugImageURL,
            alt: 'Imagem de um inseto'
        },
    },
    IDEIA: {
        title: 'Idea',
        Image: {
            source: IdeaURL,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Problema',
        Image: {
            source: OtherURL,
            alt: 'Imagem de uma nuvem'
        
        },
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [FeedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
           <header>
            <span className="text-xl leading-6 ">Deixe o feedback</span>

            <CloseButton />
           </header>
            
            {!feedbackTypes ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <p> Hello World</p>
            )}
       
           <footer className="text-md text-neutral-400">
                    feito com amor pela <a className="underline underline-offset-2" href="https://www.youtube.com/watch?v=5pCUDdUQspc" target={"_blank"}>Neco Arc :3</a>
           </footer>
        </div>
    );
}