import "./index.css";
import * as React from "react";
import { messages, type Message } from "./data/messages";
import buddies from "./data/buddies";

export function App() {
  const getMessagesForUser = (username: string): Message[] => {
    return messages[username] ?? [];
  };

  const fallbackBuddy = { id: "moviebuff42", name: "MovieBuff42", status: "Away - BRB", online: true };
  const [currentBuddies] = React.useState(buddies.length ? buddies : [fallbackBuddy]);
  const [currentChat] = React.useState<Message[]>(getMessagesForUser(currentBuddies[0]?.id ?? fallbackBuddy.id));

  const activeBuddy = currentBuddies[0] ?? fallbackBuddy;

  return (
    <div className="min-h-screen p-6">
      <div className="aim-window mx-auto max-w-5xl bg-[#f1f2f9]">
        <div className="aim-titlebar px-4 py-2 flex items-center justify-between text-[#1a1a1a]">
          <div className="text-lg tracking-wide">AIM Messenger</div>
          <div className="text-sm">Signed in as catie_1999</div>
        </div>
        <div className="grid grid-cols-[220px_1fr] gap-4 p-4">
          <aside className="aim-panel p-3 flex flex-col">
            <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] pb-2">
              <div className="text-lg">Buddy List</div>
              <span className="text-xs uppercase tracking-widest">AOL</span>
            </div>
            <div className="mt-3 text-sm uppercase tracking-widest text-[#4a4a4a]">Online</div>
            <ul className="mt-2 space-y-2">
              {buddies.map(buddy => {
                const isActive = buddy.id === activeBuddy.id;
                return (
                  <li
                    key={buddy.id}
                    className={`flex items-start gap-2 px-2 py-1 border-2 ${isActive ? "border-[#1a1a1a] bg-[#fff3cf]" : "border-transparent"
                      }`}
                  >
                    <span
                      className={`mt-1 h-2 w-2 rounded-full ${buddy.online ? "bg-[#1fa64a]" : "bg-[#9a9a9a]"
                        }`}
                    />
                    <div>
                      <div className="text-base leading-none">{buddy.name}</div>
                      <div className="text-xs text-[#555]">{buddy.status}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto pt-3 text-xs text-[#3b3b3b] border-t-2 border-[#1a1a1a]">
              3 buddies online, 2 offline
            </div>
          </aside>
          <section className="flex flex-col gap-3">
            <div className="aim-panel flex-1 p-3 min-h-[360px]">
              <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] pb-2">
                <div className="text-lg">Chat with {activeBuddy.name}</div>
                <div className="text-xs text-[#4a4a4a]">Status: {activeBuddy.status}</div>
              </div>
              <div className="aim-scroll mt-3 max-h-[360px] overflow-y-auto space-y-3 pr-2">
                {currentChat.map(message => {
                  const isMe = message.from === "catie_1999";
                  return (
                    <div key={message.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                      <div className="max-w-[75%]">
                        <div className="text-xs text-[#4a4a4a]">
                          {message.time} · {message.from}
                        </div>
                        <div
                          className={`border-2 px-2 py-1 text-base leading-snug ${isMe ? "border-[#1a1a1a] bg-[#e3edff]" : "border-[#1a1a1a] bg-white"
                            }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="aim-panel p-3">
              <div className="text-sm uppercase tracking-widest text-[#4a4a4a]">Send Instant Message</div>
              <div className="mt-2 flex items-center gap-2">
                <input
                  className="flex-1 border-2 border-[#1a1a1a] bg-white px-2 py-1 text-base focus:outline-none"
                  placeholder="Type your message..."
                />
                <button className="border-2 border-[#1a1a1a] bg-[#ffd36a] px-4 py-1 text-base">
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
