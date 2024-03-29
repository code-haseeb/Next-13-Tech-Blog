
'use client';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >

      <div>
        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-3xl font-semibold">Sign in to your account</h1>
          <a className="text-sm dark:text-gray-400" href="/">Or start your free trial</a>
          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" placeholder="Email address" className="rounded-t-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ri focus:dark:border-violet-400 focus:ri" />
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" type="text" placeholder="Password" className="-mt-1 rounded-b-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ri focus:dark:border-violet-400 focus:ri" />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ri focus:dark:border-violet-400 focus:ri dark:accent-violet-400" />
              <label htmlFor="remember" className="text-sm dark:text-gray-400">Remember me</label>
            </div>
            <a className="text-sm dark:text-gray-400" href="/">Forgot your password?</a>
          </div>
          <button type="button" className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign in</button>
        </div>
      </div>
    </form>
  );
}















