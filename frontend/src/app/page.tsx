import Button from "./components/Button";
import { AuthForm } from "./components/Form";
import { ButtonPurpose } from "./utils/ButtonPurpose";
import { signup, login } from '@/app/actions/auth';

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
        <text className=" pt-5 text-2xl md:text-4xl text-center font-semibold">Login</text>
        <div className=" w-full flex flex-col py-10">
          <div className='flex-grow flex-2 flex flex-row justify-around pb-10'>
          </div>
          <AuthForm formParams={formParams} onSubmit={login} submitButton="Login" />
        </div>

      </div>
    </main>
  );
}
