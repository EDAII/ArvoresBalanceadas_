import Content from "./components/content";
import Header from "./components/header";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
