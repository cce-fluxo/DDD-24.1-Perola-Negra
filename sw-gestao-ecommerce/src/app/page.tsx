import AuthContextProvider from "@/app/contexts/authContext"; // Ajuste o caminho conforme necessário
import Login from "./(pages)/login/page";

export default function Home() {
  return (
    <AuthContextProvider>
      <div className="w-full h-screen">
        <Login />
      </div>
    </AuthContextProvider>
  );
}
