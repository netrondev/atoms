import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { type ReactNode } from "react";
import { Button, LoadingLarge, Logo } from "~/atoms";
import { User } from "~/atoms/User";
import { cn } from "./cn";

export function TopNav(props: { appname?: string }) {
  const session = useSession();
  return (
    <nav className="w-full">
      <div className="container mx-auto flex gap-5 p-2">
        <Button
          href="/"
          className="group gap-1 font-semibold tracking-tighter text-neutral-700 transition-all duration-1000 dark:text-cyan-300"
        >
          <Logo className="size-5" />
          <span className="text-sm tracking-widest transition-all duration-1000 group-hover:tracking-widest dark:text-neutral-200 group-hover:dark:text-white">
            {props.appname ?? "APP NAME"}
          </span>
        </Button>

        <div className="flex-1" />
      </div>
    </nav>
  );
}
