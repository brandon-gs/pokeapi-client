import { PokemonSaveUser } from "@/components";
import { PokemonList } from "@/containers";
import { getUsername } from "@/utils";
import { useEffect, useState } from "react";
import "./PokemonPage.styles.css";

function PokemonPage() {
  const [hasUsername, setHasUsername] = useState<boolean>(false);

  useEffect(() => {
    function lookforUsername() {
      const savedUsername = getUsername();
      if (savedUsername !== null) {
        setHasUsername(true);
      }
    }
    lookforUsername();
    window.addEventListener("storage", lookforUsername);
    return () => {
      window.removeEventListener("storage", lookforUsername);
    };
  }, []);

  if (!hasUsername) {
    return (
      <div className="page-pokemon-save-user">
        <PokemonSaveUser />
      </div>
    );
  }

  return (
    <div className="page-pokemon-container">
      <PokemonList />
    </div>
  );
}

export default PokemonPage;
