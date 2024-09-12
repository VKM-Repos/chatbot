import { motion } from "framer-motion";
import SparkIcon from "./SparkIcon";
import { useState } from "react";

export default function ChatCard() {
  const [startChat, setStartChat] = useState(false);
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: -20 }}
      className="fixed top-2  bottom-[calc(4rem+1.5rem)] right-0 mr-[50px] bg-white py-6 px-2 rounded-lg border border-[#FF765A] w-[470px]  h-[84%]"
    >
      <div className="flex flex-col items-center space-y-1.5 pb-6">
        <h2 className="font-semibold text-lg tracking-tight">Hello</h2>
        <h2 className="font-semibold text-lg tracking-tight">
          How can I help you today?
        </h2>
      </div>

      {!startChat && (
        <div className="text-[10px] flex justify-center gap-1 flex-wrap">
          <span className="flex items-center gap-2 border w-fit rounded-lg px-3 py-1">
            <SparkIcon />
            Write me a post about child abuse
          </span>

          <span className="flex items-center gap-2 border w-fit rounded-lg px-3 py-1">
            <SparkIcon />
            Show me quick and easy lunch recipes
          </span>

          <span className="flex items-center gap-2 border w-fit rounded-lg px-3 py-1">
            <SparkIcon />
            Can you provide the most recent news updates from Europe?
          </span>

          <span className="flex items-center gap-2 border w-fit rounded-lg px-3 py-1">
            <SparkIcon />
            What are the major health or medical news updates for this week?
          </span>
        </div>
      )}

      <div className="absolute flex items-end justify-start bottom-4 rounded-lg w-[100%] mx-auto">
        <div className="border rounded-lg w-[96%] h-full flex justify-between px-4 py-1">
          <div className="flex flex-col justify-start w-full h-full">
            <span className="text-xs text-left">Ask me Anything...</span>
            <textarea
              name=""
              id=""
              className="resize-none focus:outline-none overflow-hidden"
            ></textarea>
          </div>
          <button>
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
        </div>
      </div>
    </motion.div>
  );
}
