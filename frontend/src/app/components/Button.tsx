import Link from "next/link"
import { ButtonPurpose } from "../utils/ButtonPurpose";
  
  interface ButtonProps {
    text: string;
    purpose: ButtonPurpose;
    link: string;
  }
  
  export default function Button({ text, purpose, link }: ButtonProps) {
    
    const getButtonClass = (purpose: ButtonPurpose): string => {
        switch (purpose) {
          case ButtonPurpose.Warning:
            return 'bg-red-300 text-white';
          case ButtonPurpose.Ready:
            return 'bg-green-500 text-white'; // Replace with your desired blue class
          case ButtonPurpose.Standard:
          default:
            return 'bg-white text-black border border-black';
        }
      };
    
      const buttonClass = getButtonClass(purpose);
    
      const renderLinkContent = () => (
        <div className={`w-36 md:w-64 h-max text-center py-2 md:py-4 px-4 rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,0,0.1)] ${buttonClass}`}>
          {text}
        </div>
      );
    
      if (purpose === ButtonPurpose.Standard) {
        // to external web pages; can navigate internally but with full page reload
        return (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {renderLinkContent()}
          </a>
        );
      } else {
        // client-side navigation; internal pages
        return (
          <Link href={link}>
            {renderLinkContent()}
          </Link>
        );
      }
  }