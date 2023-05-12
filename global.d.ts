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

type Video = {
  readonly id?: number;
  title: string;
  link: string;
  thumbnail?: string;
  author?: string;
  description?: string;
  publishedAt?: string;
  likes?: string;
  dislikes?: string;
  views?: string;
  tags?: string[];
};
