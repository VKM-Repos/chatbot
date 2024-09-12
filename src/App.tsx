import ChatBot from "./components/chat/ChatBot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <ChatBot />
      </main>
    </div>
  );
}

export default App;
