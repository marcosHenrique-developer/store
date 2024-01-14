"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import "./styles.css";

export default function LogIn() {
  const { data } = useSession();
  const router = useRouter();

  if (data) {
    router.replace("/");
  }

  async function handleLogIn() {
    await signIn();
  }

  function onLogin(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      return null;
    }

    console.log(1, email, 2, password);

    router.replace("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Entre na sua conta </span>

            <div className="wrap-input">
              <Input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <Input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Button
                onClick={onLogin}
                className="flex w-full items-center justify-center rounded border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Ou logar com</span>
              <Button
                className="w-40 flex justify-evenly h-10 rounded border border-transparent bg-transparent border-text-white hover:bg-gray-700"
                onClick={() => handleLogIn()}
              >
                <FaGoogle />
                <span>Google</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
