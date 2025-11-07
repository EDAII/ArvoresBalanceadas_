import Content from "./components/content";
import Header from "./components/header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
