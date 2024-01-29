import { useRouter } from "next/router";
import { useState } from "react";
import SearchInput from "@/ui/SearchInput";
import LogoAndContent from "@/ui/LogoAndContent";

export default function SearchForm() {
const [username, setUsername] = useState("");
const router = useRouter();

const handleSubmit = async (event: any) => {
 event.preventDefault();
 if (username) {
 router.push(`/${username}`);
 }
};

  return (
    <main className="w-full h-full mt-6 flex gap-4 flex-col items-center justify-center">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <SearchInput handleSubmit={handleSubmit} valueName={username} placeholder="Enter github username to view repos....."/>
      <LogoAndContent />
    </main>
  );

}