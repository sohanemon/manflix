interface Props {
  readonly children: React.ReactNode;
  className?: string;
}

interface Input {
  type?: string;
  label: string;
  register: Function;
  placeholder?: string;
  required?: boolean;
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

type Video = {
  id: number;
  title: string;
  link: string;
  thumbnail?: string;
  author?: string;
  description?: string;
  publishedAt: Date;
  likes?: string;
  dislikes?: string;
  views?: string;
  tags: string[];
};
