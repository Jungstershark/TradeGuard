import Button from "./components/Button";
import { AuthForm } from "./components/Form";
import { ButtonPurpose } from "./utils/ButtonPurpose";
import { signup, login } from '@/app/actions/auth';

export default function Home() {
  const formParams = {
    email: '',
    password: '',
    department: ''
  };
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-24 px-72">
      <text className=" pt-5 text-2xl md:text-4xl text-center font-semibold">Login</text>
      <div className=" w-full flex flex-col py-10">
        <div className='flex-grow flex-2 flex flex-row justify-around pb-10'>
        </div>
        <AuthForm formParams={formParams} onSubmit={login} submitButton="Login" />
      </div>

    </main>
  );
}
