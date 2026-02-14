export type Message = {
  id: number;
  from: string;
  text: string;
  time: string;
};

export type UserChat = Record<string, Message[]>;

export const messages: UserChat = {
  moviebuff42: [
    { id: 1, from: "MovieBuff42", text: "hey! did you catch the AIM nostalgia wave?", time: "7:41 PM" },
    { id: 2, from: "catie_1999", text: "totally. rebuilding the layout for fun.", time: "7:42 PM" },
    { id: 3, from: "MovieBuff42", text: "nice. make the buddy list feel chunky.", time: "7:43 PM" },
    { id: 4, from: "catie_1999", text: "already on it. got the pixel font too.", time: "7:44 PM" },
    { id: 5, from: "MovieBuff42", text: "🔥 send me a screenshot when ready.", time: "7:45 PM" },
  ],
  pixelkitty: [],
};
export default messages;