interface Input {
  label: string;
  placeholder?: string;
}

interface Video {
  title: string;
  link: string;
  author: string;
  description: string;
  likes?: number;
  dislikes?: number;
  views?: number;
  tags?: string[];
}
