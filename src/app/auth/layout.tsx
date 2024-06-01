import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="w-[600px] flex flex-col items-start p-6">
        <Image
          src="/images/logo.png"
          alt="logo"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div className="hidden lg:flex flex-col pt-10 pl-24 max-h-full max-w-[4000px] overflow-hidden relative bg-cream flex-1 w-full gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I&apos;m your AI powered sales assistant, Corinna!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Corrina is capable of capturing lead information without a form...{" "}
          <br />
          something never done before.
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app img"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
