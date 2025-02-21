// campaignStore.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Campaign = {
  id: number;
  title: string;
  description: string;
  image?: string;
  creator: string;
  goal: number;
  raised: number;
  daysLeft: number;
};

const CAMPAIGNS_KEY = "campaigns";

export async function getCampaigns(): Promise<Campaign[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(CAMPAIGNS_KEY);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error("Error reading campaigns", e);
  }
  // Default campaigns if none are stored:
  const defaultCampaigns: Campaign[] = [
    {
      id: 1,
      title: "Harivu Touching Tale of Father and Son",
      description: "A touching story of family values.",
      image: "https://via.placeholder.com/600x300.png?text=Campaign+1",
      creator: "Admin",
      goal: 300000,
      raised: 730922,
      daysLeft: 0,
    },
    {
      id: 2,
      title: "Everest Again",
      description: "Scaling new heights in innovation.",
      image: "https://via.placeholder.com/600x300.png?text=Campaign+2",
      creator: "Anshu Jamsen",
      goal: 2500000,
      raised: 24455,
      daysLeft: 30,
    },
    {
      id: 3,
      title: "Manjunath for Students",
      description: "Empowering students through education.",
      image: "https://via.placeholder.com/600x300.png?text=Campaign+3",
      creator: "Akhil Krishna",
      goal: 200000,
      raised: 156745,
      daysLeft: 14,
    },
    {
      id: 4,
      title: "Cutthroat",
      description: "Disrupting the status quo.",
      image: "https://via.placeholder.com/600x300.png?text=Campaign+4",
      creator: "Sarthak Dasgupta",
      goal: 1000000,
      raised: 1007387,
      daysLeft: 7,
    },
  ];
  await saveCampaigns(defaultCampaigns);
  return defaultCampaigns;
}

export async function saveCampaigns(campaigns: Campaign[]) {
  try {
    const jsonValue = JSON.stringify(campaigns);
    await AsyncStorage.setItem(CAMPAIGNS_KEY, jsonValue);
  } catch (e) {
    console.error("Error saving campaigns", e);
  }
}

export async function addCampaign(newCampaign: Omit<Campaign, "id" | "raised">): Promise<void> {
  try {
    const campaigns = await getCampaigns();
    const newId = campaigns.length > 0 ? Math.max(...campaigns.map((c) => c.id)) + 1 : 1;
    const campaign: Campaign = { id: newId, ...newCampaign, raised: 0 };
    const updated = [campaign, ...campaigns];
    await saveCampaigns(updated);
  } catch (e) {
    console.error("Error adding campaign", e);
  }
}

export async function deleteCampaign(id: number): Promise<void> {
  try {
    const campaigns = await getCampaigns();
    const updated = campaigns.filter((c) => c.id !== id);
    await saveCampaigns(updated);
  } catch (e) {
    console.error("Error deleting campaign", e);
  }
}
