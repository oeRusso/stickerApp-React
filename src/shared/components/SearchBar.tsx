import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    query.toLowerCase()
    return () => clearTimeout(timeoutId);
  }, [query, onQuery]);

  
  const handleSearch = () => {
   
    onQuery(query);
  };

  //  TODO: ACA EMPEZAMOS A TRABAJR EN ESTA FUNCION

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
