import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Landing Page
      <SignInButton />
      <SignUpButton />
    </div>
  );
}
