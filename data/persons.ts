export type Person = {
    id: number;
    name: string;
    avatar: string;
    position: string;
    description: string;
  };
  
  export const personsData: Person[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      position: "Student",
      description: "John is a dedicated student focusing on computer science and AI.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      position: "Investor",
      description: "Jane is an experienced investor who has funded several successful startups.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      position: "Industry Official",
      description: "Alex is an industry official with years of experience in tech and innovation.",
    },
  ];