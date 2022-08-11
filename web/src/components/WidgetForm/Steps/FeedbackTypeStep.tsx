import { FeedbackType, feedbackTypes } from "..";
interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type : FeedbackType) => void
}
export function FeedbackTypeStep(props : FeedbackTypeStepProps){
    return (
         
        <div className="flex py-8 gap-2 w-full">

        {Object.entries(feedbackTypes).map(([key, value])=> {
            
          return (
            <button
            className="bg-zinc-800 rounder-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent
                      hover:border-brand-500 focus:order-brand-500 focus:outline-none"
            
            key={key}
           onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
            >
                <img className="h-10"
                 src= {value.Image.source} alt={value.Image.alt} 
                  />
                <span>{value.title}</span>
            </button>
          );
        } ) }
       </div>
    )
}