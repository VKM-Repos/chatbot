import { motion } from "framer-motion";
import SparkIcon from "./SparkIcon";
import { useEffect, useState } from "react";
import ChatHistory from "./ChatHistory";
import useChatStore from "../../assets/store/chat.store";

export default function ChatCard({
  handleShowChat,
}: {
  handleShowChat: () => void;
}) {
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
    console.log(chatHistory, "llooooo");
  }, [chatHistory]);
  console.log(loading, ";;;;;;");
  const handleStartChat = async (e: any, question: string) => {
    e.preventDefault();

    try {
      setStartChat(true);
      setLoading(true);
      setError(null); // Clear previous errors

      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}ai/health-query`,
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
      storeChat([
        ...chats,
        { type: "user", message: question },
        { type: "bot", message: result.answer },
      ]);
      setUserInput("");
      setLoading(false);
    } catch (err) {
      // Handle any errors
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false); // Always stop loading
    }
  };
  const handleSetShowChat = () => {
    handleShowChat();
  };

  return (
    <motion.div
      className="fixed top-0 h-full"
      initial={{ x: 0 }}
      animate={{ x: -20 }}
    >
      <div className="fixed top-0 right-0 bg-white py-6 px-2 border-0 border-l border-[#FF765A] w-[500px]  h-full">
        <div className="flex justify-end pb-4 px-2">
          <button onClick={handleSetShowChat}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.001 4.99988L5.00098 18.9999M5.00098 4.99988L19.001 18.9999"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
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
        {startChat && chats && (
          <div className=" h-[80%] max-h-[80%] overflow-y-scroll no-scrollbar rounded-lg">
            {error ? "Something failed" : <ChatHistory chatHistory={chats} />}
          </div>
        )}

        <div className="absolute z-[2000] flex items-end justify-start bottom-4 rounded-lg w-full mx-auto">
          <form
            className="border rounded-lg w-full h-full flex justify-between px-4 py-1 bg-white"
            onSubmit={(e) => handleStartChat(e, userInput)}
          >
            <div className="flex flex-col justify-start w-full h-full">
              {userInput == "" && (
                <span className="text-xs text-left">Ask me Anything...</span>
              )}

              <input
                onChange={(e) => setUserInput(e.target.value)}
                className="h-14 focus:outline-none flex items-start"
                value={userInput}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? (
                <div role="status pr-2">
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
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
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.322 34.5H21.2717"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
