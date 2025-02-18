// forumStore.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ForumPost = {
  id: number;
  title: string;
  content: string;
  username: string;
  userAvatar: string;
  tags: string[];
};

const FORUM_POSTS_KEY = "forumPosts";

// Return an array of ForumPost from storage or the default posts if none exist.
export async function getForumPosts(): Promise<ForumPost[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(FORUM_POSTS_KEY);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error("Error reading forum posts from storage", e);
  }
  // Default posts if nothing is stored.
  const defaultPosts: ForumPost[] = [
    {
      id: 1,
      title: "How do I secure my cloud infrastructure?",
      content:
        "I've been looking for ways to secure our AWS environment. What are some best practices for cloud security?",
      username: "Alice",
      userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      tags: ["cybersecurity", "cloud"],
    },
    {
      id: 2,
      title: "Best practices for mobile app security?",
      content:
        "What are some common pitfalls in mobile app security and how can I avoid them?",
      username: "Bob",
      userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
      tags: ["cybersecurity", "mobile"],
    },
    {
      id: 3,
      title: "How to handle data privacy in Europe?",
      content:
        "GDPR compliance is a hot topic. Does anyone have advice on managing data privacy effectively?",
      username: "Charlie",
      userAvatar: "https://randomuser.me/api/portraits/men/33.jpg",
      tags: ["compliance", "data"],
    },
    {
      id: 4,
      title: "Emerging trends in blockchain technology",
      content:
        "Blockchain is evolving rapidly. What are the latest trends you’re excited about?",
      username: "Diana",
      userAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
      tags: ["blockchain", "innovation"],
    },
    {
      id: 5,
      title: "Cybersecurity certifications: Which ones are worth it?",
      content:
        "I'm considering several cybersecurity certifications. Which ones have helped you the most?",
      username: "Evan",
      userAvatar: "https://randomuser.me/api/portraits/men/66.jpg",
      tags: ["cybersecurity", "certifications"],
    },
  ];
  // Save default posts for future retrieval.
  await saveForumPosts(defaultPosts);
  return defaultPosts;
}

// Save an array of ForumPost to AsyncStorage.
export async function saveForumPosts(posts: ForumPost[]) {
  try {
    const jsonValue = JSON.stringify(posts);
    await AsyncStorage.setItem(FORUM_POSTS_KEY, jsonValue);
  } catch (e) {
    console.error("Error saving forum posts", e);
  }
}

// Add a new post to storage. It assigns a new unique ID and adds the post to the top of the list.
export async function addForumPost(newPost: Omit<ForumPost, "id">): Promise<void> {
  try {
    const posts = await getForumPosts();
    // Generate a new ID based on the highest existing ID.
    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const post: ForumPost = { id: newId, ...newPost };
    const updatedPosts = [post, ...posts];
    await saveForumPosts(updatedPosts);
  } catch (e) {
    console.error("Error adding forum post", e);
  }
}

