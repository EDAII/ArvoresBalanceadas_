import { useState, type Dispatch, type SetStateAction } from "react";

interface HeaderProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  handleInsert: (value: number) => void;
  handleDelete: (value: number) => void;
  handleClear: () => void
  handleFind: () => void;
  found: boolean | null;
  forceUpdate: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
}

function Header({
  searchValue,
  setSearchValue,
  handleInsert,
  handleDelete,
  handleClear,
  handleFind,
  found,
}: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInsertClick = () => {
    const value = Number(inputValue);
    if (!isNaN(value)) {
      handleInsert(value);
      setInputValue("");
    }
  };

  const handleDeleteClick = () => {
    const value = Number(inputValue);
    if (!isNaN(value)) {
      handleDelete(value);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = Number(inputValue);
      if (isNaN(value)) return;

      if (e.ctrlKey) {
        handleDelete(value);
      } else {
        handleInsert(value);
      }

      setInputValue("");
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight">
            Árvore AVL
          </h1>
          <p className="mt-1 text-sm sm:text-base font-medium">
            Demonstração Interativa
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              Inserir ou Remover
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite aqui"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleInsertClick}
                className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-sm"
              >
                Inserir
              </button>
              <button
                onClick={handleDeleteClick}
                className="px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-sm"
              >
                Remover
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              Buscar Valor
            </label>
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar..."
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
            />
            <button
              onClick={handleFind}
              className="w-full px-4 py-2.5 bg-green-600 text-white text-sm font-medium rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-sm"
            >
              Buscar
            </button>
            {found !== null && (
              <p
                className={`mt-2 text-center text-sm font-semibold animate-fade-in ${
                  found ? "text-green-600" : "text-red-600"
                }`}
              >
                {found ? "Encontrado" : "Não encontrado"}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <div className="h-[1.25rem]" />
            <div className="h-[2.625rem]" />
            <button
              onClick={handleClear}
              className="w-full px-6 py-2.5 bg-gray-700 text-white text-sm font-medium rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-sm"
            >
              Limpar Árvore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;