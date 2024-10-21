import { useSession } from "next-auth/react";
import Head from "next/head";
import { type ReactNode } from "react";
import { LoadingLarge } from "~/atoms";
import { cn } from "./cn";
import { TopNav } from "./Nav";

export function Layout(props: {
  appname: string;
  title: string;
  description: string;
  children: ReactNode;
  public?: boolean;
  top_right?: ReactNode;
}) {
  const session = useSession();
  if (session.status === "loading") return <LoadingLarge />;

  // if (props.public) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full overflow-x-hidden bg-white p-2 dark:bg-neutral-800">
        <div className="container mx-auto p-2">
          <div className="flex w-full">
            <TopNav appname={props.appname} />
            {props.top_right}
          </div>
          <div
            className={cn(
              "container mx-auto gap-5 px-5 pt-0 text-neutral-700 md:px-2 xl:px-0 dark:bg-transparent dark:text-neutral-200",
            )}
          >
            {props.children}
          </div>
        </div>
      </main>
    </>
  );
  // }
}
