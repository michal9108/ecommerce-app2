"use client"

import { useState } from "react"

import Logo from "../assets/Logo.44b83c01.svg"

export default function SignIn() {
  //     const { users, fetchUsers, handleLogin } = useLogin();

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  // const handleSubmit =(event) => {
  //   event.preventDefault();
  //   handleLogin(username, password, navigate);
  //   setUsername("");
  //   setPassword("");
  // }
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              {/* <img
                  className="h-10 w-auto"
                  src={Logo}
                  alt="Your Company"
                /> */}
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold text-yellow-600 hover:text-yellow-500"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      UserName
                    </label>
                    <div className="mt-2">
                      <input
                        // onChange={(e) => setUsername(e.target.value)}
                        // value={username}
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block"></div>
      </div>
    </>
  )
}
