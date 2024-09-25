import ChatBot from "./components/chat/ChatBot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <div className="fixed -right-5">
          <ChatBot />
        </div>
      </main>
    </div>
  );
}

export default App;
