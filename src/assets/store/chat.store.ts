import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Chat = any[];
interface ChatState {
  chats: Chat;
  loggedIn: boolean | string;
  storeChat: (chats: Chat) => void;
  clearChats: () => void;
}

const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set) => ({
        chats: [],
        loggedIn: false,
        storeChat: (chats: Chat) => set(() => ({ chats })),
        clearChats: () =>
          set(() => ({
            chats: [],
          })),
      }),
      { name: "useChatStore" }
    )
  )
);

export default useChatStore;
