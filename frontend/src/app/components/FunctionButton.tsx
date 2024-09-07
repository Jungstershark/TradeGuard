import Link from "next/link"
import { ButtonPurpose } from "../utils/ButtonPurpose";

type formAction = (e: React.MouseEvent, props: any) => void;
interface ButtonProps {
    text: string;
    formAction: formAction;
    enabled?: boolean ;
    formActionProps: any;
}

export default function FunctionButton({ text, enabled=true, formAction, formActionProps }: ButtonProps) {
    return (
        <div>
            {enabled ? <div
                className={`w-36 md:w-64 h-max text-center py-2 md:py-4 px-4 rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,0,0.1)] bg-[#0e234e] text-white cursor-pointer`}
                onClick={(e) => formAction(e, formActionProps)}>
                {text}
            </div> :
                <div
                    className={`w-36 md:w-64 h-max text-center py-2 md:py-4 px-4 rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,0,0.1)] bg-[#0e234e] opacity-50 text-white`}>
                    {text}
                </div>
            }
        </div>

    );
}