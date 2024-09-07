import Button from "./components/Button";
import { SignupForm } from "./components/signup-form";
import { ButtonPurpose } from "./utils/ButtonPurpose";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full flex flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
       
        <text className=" pt-5 text-2xl md:text-4xl text-center font-semibold">hi! this is a test app</text>
        <div className=" w-full flex flex-col py-10">
          <div className='flex-grow flex-2 flex flex-row justify-around pb-10'>
            <Button text="page1" purpose={ButtonPurpose.Ready} link="/page1" />
            <Button text="page2" purpose={ButtonPurpose.Warning} link="/page2" />
          </div>
          <SignupForm/>
        </div>
        
      </div>
    </main>
  );
}
