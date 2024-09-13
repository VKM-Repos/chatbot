import ReactMarkdown from "react-markdown";
import useChatStore from "../../assets/store/chat.store";

export default function ChatHistory({ chatHistory }: { chatHistory: any[] }) {
  const { chats } = useChatStore();
  console.log(chats);

  return (
    <div className="flex flex-col gap-5 text-sm px-2">
      {chatHistory?.map((chat: any, index: any) => (
        <div key={index}>
          {chat.type != "user" && (
            <span className="flex justify-end my-1">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(chat.message);
                }}
              >
                copy
              </button>
            </span>
          )}
          <div
            className={`flex items-start py-2 px-4 rounded-lg ${
              chat.type === "user"
                ? "bg-gray-100 text-gray-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {chat.type == "user" && (
              <span className="mr-2 font-bold text-gray-600">You:</span>
            )}

            <div className="flex items-start">
              <div className="w-full text-xs">
                <ReactMarkdown>{chat.message}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
