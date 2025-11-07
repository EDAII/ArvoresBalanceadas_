import type { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  handleInsert: () => void;
  handleDelete: () => void;
  handleFind: () => void;
  found: boolean | null;
  forceUpdate: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
}

function Header(props: HeaderProps) {

  const {
    inputValue,
    setInputValue,
    searchValue,
    setSearchValue,
    handleInsert,
    handleDelete,
    handleFind,
    found,
  } = props;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 tracking-tight">
            Árvore AVL
          </h1>
          <p className="mt-2 text-sm sm:text-base text-indigo-600 font-medium">
            Demonstração Interativa
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 mb-8 border border-indigo-100">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col space-y-3">
              <label className="text-sm font-semibold text-gray-700">
                Inserir ou Remover
              </label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex: 200"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
              />
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleInsert}
                  className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-sm"
                >
                  Inserir
                </button>
                <button
                  onClick={handleDelete}
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
                    found ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {found ? 'Encontrado' : 'Não encontrado'}
                </p>
              )}
          </div>

             <div className="flex items-end">
              <button
                className="w-full px-6 py-2.5 bg-gray-700 text-white text-sm font-medium rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-sm"
              >
                Limpar Árvore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;