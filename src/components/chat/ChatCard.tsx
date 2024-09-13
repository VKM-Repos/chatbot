import { motion } from "framer-motion";
import SparkIcon from "./SparkIcon";
import { useEffect, useState } from "react";
import ChatHistory from "./ChatHistory";
import useChatStore from "../../assets/store/chat.store";

export default function ChatCard() {
  const { storeChat, chats } = useChatStore();
  const [startChat, setStartChat] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<any[]>(chats);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialQuestions] = useState([
    "Write me a post about child abuse",
    "Show me quick and easy lunch recipes",
    "Can you provide the most recent child care news updates?",
    "What are the major health or medical news updates for this week?",
  ]);
  useEffect(() => {
    if (chats.length > 0) {
      setStartChat(true);
    }
  }, []);
  const handleStartChat = async (e: any, question: string) => {
    e.preventDefault();

    try {
      setStartChat(true);
      setLoading(true);
      setError(null); // Clear previous errors
      console.log(question);
      const response = await fetch(
        "https://657f-2c0f-2a80-2e-f110-9995-60a-f08b-b52c.ngrok-free.app/api/ai/health-query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        }
      );

      if (!response.ok) {
        // Handle response errors
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong ");
      }

      // Assuming the response returns JSON data
      const result = await response.json();
      console.log(result, "rock");
      setChatHistory([
        ...chatHistory,
        { type: "user", message: question },
        { type: "bot", message: result.answer },
      ]);
      storeChat(chatHistory);
    } catch (err) {
      // Handle any errors
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false); // Always stop loading
    }
  };
  console.log(chats);

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: -20 }}
      className="fixed top-2  bottom-[calc(4rem+1.5rem)] right-0 mr-[50px] bg-white py-6 px-2 rounded-lg border border-[#FF765A] w-[470px]  h-[84%]"
    >
      {!startChat && (
        <div className="flex flex-col items-center space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">Hello</h2>
          <h2 className="font-semibold text-lg tracking-tight">
            How can I help you today?
          </h2>
        </div>
      )}

      {!startChat && (
        <div className="text-[10px] flex justify-center gap-1 flex-wrap">
          {initialQuestions?.map((question) => (
            <span
              onClick={(e) => {
                handleStartChat(e, question);
              }}
              className="flex items-center gap-2 border w-fit rounded-lg px-3 py-1 cursor-pointer hover:bg-slate-100"
            >
              <SparkIcon />
              {question}
            </span>
          ))}
        </div>
      )}
      {startChat && (
        <div className=" h-[80%] max-h-[80%] overflow-y-scroll no-scrollbar rounded-lg">
          {error ? "Something failed" : <ChatHistory chatHistory={chats} />}
        </div>
      )}

      <div className="absolute z-[2000] flex items-end justify-start bottom-4 rounded-lg w-[100%] mx-auto bg-white">
        <form
          className="border rounded-lg w-[96%] h-full flex justify-between px-4 py-1"
          onSubmit={(e) => handleStartChat(e, userInput)}
        >
          <div className="flex flex-col justify-start w-full h-full">
            <span className="text-xs text-left">Ask me Anything...</span>
            <input
              onChange={(e) => setUserInput(e.target.value)}
              className="h-14 focus:outline-none flex items-start"
            />
          </div>
          <button type="submit" disabled={loading}>
            <svg
              width="34"
              height="69"
              viewBox="0 0 34 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.7535 34.5711C29.872 31.3725 14.2244 23.8507 12.7506 25.3436C11.0793 27.0366 15.0751 32.0674 15.9751 33.6693C16.5164 34.6326 16.5014 35.0505 15.886 36.0128C13.0991 40.3709 11.7165 42.5423 12.5758 43.4809C13.9453 44.9772 29.6379 37.6928 29.7535 34.5711Z"
                stroke="#141B34"
                stroke-width="1.5"
              />
              <path
                d="M16.322 34.5H21.2717"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </motion.div>
  );
}
