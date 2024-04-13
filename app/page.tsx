import { LogoutButton } from "./components/LogoutButton";

export default function Home() {
  return (
    <main className="text-gray-800 p-4">
      <p>You are loggin in.</p>
      <p>
        <LogoutButton />
      </p>
    </main>
  );
}
