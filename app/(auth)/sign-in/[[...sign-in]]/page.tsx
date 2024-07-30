import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <div className="h-full lg: flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl">Bem-vindo de volta!</h1>
        </div>
        <div className="pt-16">
          <ClerkLoading>
            <Loader className="animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
