export type Startup = {
    id: number;
    name: string;
    logo: string;
    tagline: string;
    description: string;
    founder: string;
    advisor: string;
    posts: string[];
  };
  
  export const startupsData: Startup[] = [
    {
      id: 1,
      name: "TechNova",
      logo: "https://via.placeholder.com/80x80.png?text=TechNova",
      tagline: "Innovating the Future",
      description:
        "TechNova is dedicated to developing cutting-edge technology solutions. They specialize in AI and cloud computing.",
      founder: "Alice Williams",
      advisor: "Robert Brown",
      posts: [
        "Launching our new product line!",
        "We just raised $5M in Series A funding.",
        "Join us at the upcoming tech conference.",
      ],
    },
    {
      id: 2,
      name: "GreenStart",
      logo: "https://via.placeholder.com/80x80.png?text=GreenStart",
      tagline: "Sustainable Solutions",
      description:
        "GreenStart focuses on eco-friendly products and sustainable innovations to protect the environment.",
      founder: "Emily Green",
      advisor: "Michael White",
      posts: [
        "Introducing our latest sustainable initiative.",
        "We are committed to a greener future.",
      ],
    },
  ];