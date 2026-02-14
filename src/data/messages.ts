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
    pixelkitty: [
        { id: 1, from: "PixelKitty", text: "omg the new buddy list looks so clean", time: "6:18 PM" },
        { id: 2, from: "catie_1999", text: "ty! trying to keep it chunky and simple", time: "6:19 PM" },
        { id: 3, from: "PixelKitty", text: "add that little door opening sound pls", time: "6:20 PM" },
    ],
    sunset_skater: [
        { id: 1, from: "SunsetSkater", text: "yo are we still on for later?", time: "5:02 PM" },
        { id: 2, from: "catie_1999", text: "yep, after i finish this UI pass", time: "5:03 PM" },
        { id: 3, from: "SunsetSkater", text: "cool. drop the link when it is live", time: "5:04 PM" },
    ],
    neon_nova: [
        { id: 1, from: "NeonNova", text: "vintage chat vibes are immaculate", time: "8:11 PM" },
        { id: 2, from: "catie_1999", text: "haha thank you. pixel font is doing work", time: "8:12 PM" },
        { id: 3, from: "NeonNova", text: "true. any plans for away messages?", time: "8:12 PM" },
        { id: 4, from: "catie_1999", text: "next on the list", time: "8:13 PM" },
    ],
    astro_cafe: [
        { id: 1, from: "AstroCafe", text: "status: making coffee. brb", time: "9:27 AM" },
        { id: 2, from: "catie_1999", text: "grab me one too", time: "9:28 AM" },
    ],
};
export default messages;