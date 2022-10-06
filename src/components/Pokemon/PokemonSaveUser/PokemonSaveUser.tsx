import "./PokemonSaveUser.styles.css";
import { FC, useState } from "react";
import { setUsername as setUsernameLocalStorage } from "@/utils";
import pokemonLogo from "@/assets/PokemonLogo.png";

const PokemonSaveUser: FC = () => {
  const [username, setUsername] = useState<string>("");

  const handleUpdateUsername = () => {
    if (!username) {
      alert("El nombre de usuario es requerido");
      return;
    }
    setUsernameLocalStorage(username);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="component-pokemon-save-user">
      <img src={pokemonLogo} alt="pokemon logo" className="pokemon-logo" />
      <div className="rect-container">
        <div className="form-user">
          <h1 className="user-instructions">
            El nombre de usuario te ayudará a guardar tu progreso
          </h1>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            autoFocus
            className="user-input"
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button disabled={!username} onClick={handleUpdateUsername}>
            Continuar
          </button>
        </div>

        <div className="rect">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt="pokemon"
            className="pokemon-image"
          />
        </div>
      </div>
    </div>
  );
};
export default PokemonSaveUser;
