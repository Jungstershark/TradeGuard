import Button from "./components/Button";
import { SignupForm } from "./components/Form";
import { ButtonPurpose } from "./utils/ButtonPurpose";
import { signup } from '@/app/actions/auth';

export default function Home() {
  const formParams = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full flex flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <text className=" pt-5 text-2xl md:text-4xl text-center font-semibold">hi! this is a test app</text>
        <div className=" w-full flex flex-col py-10">
          <div className='flex-grow flex-2 flex flex-row justify-around pb-10'>
            <Button text="page1" purpose={ButtonPurpose.Ready} link="/page1" />
            <Button text="page2" purpose={ButtonPurpose.Warning} link="/page2" />
          </div>
          <SignupForm formParams={formParams} onSubmit={signup} submitButton="Sign Up"/>
        </div>

      </div>
    </main>
  );
}
