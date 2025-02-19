type Post = {
  id: number;
  authorName: string;
  authorAvatar: string;
  authorHeadline: string; // e.g. "Championing IT Service Delivery & Operations"
  followers?: string;     // e.g. "4,722 followers"
  date: string;
  text: string;
  image?: string;         // optional image
  likes: number;
  comments: number;
  shares: number;
};

type Education = {
  institution: string;
  degree: string;
  year: string;
};
type Person = {
  id: number;
  name: string;
  avatar: string;
  position: string;
  description: string;
  status: string;
  about: string;
  skills: string[];
  education: Education[];
  // Instead of a simple array of text-based activity, we’ll store a list of Post objects
  activity: Post[];
};

const personsData: Person[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "Student",
    description:
      "John is a dedicated student focusing on computer science and AI.",
    status: "Open to opportunities",
    about:
      "Experienced student with a strong background in computer science, actively looking for internships and collaborations.",
    skills: ["React", "JavaScript", "Machine Learning"],
    education: [
      {
        institution: "XYZ University",
        degree: "BSc Computer Science",
        year: "2024",
      },
    ],
    activity: [
      {
        id: 1,
        authorName: "John Doe",
        authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
        authorHeadline: "Computer Science Student | AI Enthusiast",
        followers: "2,300 followers",
        date: "1d", // e.g. 1 day ago
        text: "Every time I come to this class I look for opportunities to learn from my peers because we all come from different backgrounds.",
        image: "https://picsum.photos/300", // optional image
        likes: 28,
        comments: 5,
        shares: 2,
      },
      {
        id: 2,
        authorName: "John Doe",
        authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
        authorHeadline: "Computer Science Student | AI Enthusiast",
        followers: "2,300 followers",
        date: "2d",
        text: "Attended a great webinar on the latest AI trends. Learned so much!",
        likes: 10,
        comments: 2,
        shares: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    position: "Investor",
    description:
      "Jane is an experienced investor who has funded several successful startups.",
    status: "Looking for innovative projects",
    about:
      "Passionate investor focusing on tech startups, with extensive experience in venture capital and mentoring.",
    skills: ["Investing", "Mentoring", "Startups"],
    education: [
      {
        institution: "ABC Business School",
        degree: "MBA",
        year: "2018",
      },
    ],
    activity: [
      {
        id: 1,
        authorName: "Jane Smith",
        authorAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
        authorHeadline: "Investor | Startup Advisor",
        followers: "4,100 followers",
        date: "3d",
        text: "Proud to announce my latest investment in a promising tech startup.",
        likes: 50,
        comments: 10,
        shares: 5,
      },
      {
        id: 2,
        authorName: "Jane Smith",
        authorAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
        authorHeadline: "Investor | Startup Advisor",
        followers: "4,100 followers",
        date: "1w",
        text: "Networking event was a huge success. Met so many brilliant founders!",
        image: "https://picsum.photos/400", // optional
        likes: 75,
        comments: 12,
        shares: 3,
      },
    ],
  },
  {
    id: 3,
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    position: "Industry Official",
    description:
      "Alex is an industry official with years of experience in tech and innovation.",
    status: "Engaging with the tech community",
    about:
      "Industry leader with a passion for technology and innovation. Actively involved in shaping policies and promoting sustainable tech growth.",
    skills: ["Leadership", "Policy Making", "Innovation"],
    education: [
      {
        institution: "Tech University",
        degree: "MSc Innovation Management",
        year: "2015",
      },
    ],
    activity: [
      {
        id: 1,
        authorName: "Alex Johnson",
        authorAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
        authorHeadline: "Tech & Innovation Policy Maker",
        followers: "10,500 followers",
        date: "2d",
        text: "Joined a panel discussion on tech innovation. Great insights from all participants.",
        likes: 100,
        comments: 20,
        shares: 10,
      },
      {
        id: 2,
        authorName: "Alex Johnson",
        authorAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
        authorHeadline: "Tech & Innovation Policy Maker",
        followers: "10,500 followers",
        date: "3d",
        text: "Visited new tech startups at the annual tech fair. The future is bright!",
        likes: 85,
        comments: 15,
        shares: 8,
      },
    ],
  },
];

export default personsData;