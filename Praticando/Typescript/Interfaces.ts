interface Game {
  title: string;
  description: string;
  gente: string;
  platform: string[];
  getSimilars: (title: string) => void
}

