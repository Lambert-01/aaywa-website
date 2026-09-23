export type StoryStatus = "published" | "draft";

export type Story = {
  slug: string;
  status: StoryStatus;
  name?: string;
  location?: string;
  country?: string;
  program: string;
  headline: string;
  excerpt: string;
  quote?: string;
  body?: string[];
  image: string;
  date?: string;
};

export const STORIES: Story[] = [];

export function getStory(slug: string): Story | undefined {
  return STORIES.find((story) => story.slug === slug);
}

export function getPublishedStories(): Story[] {
  return STORIES.filter((story) => story.status === "published");
}