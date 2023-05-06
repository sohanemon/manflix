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
