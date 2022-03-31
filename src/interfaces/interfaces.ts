interface link {
  title: string;
  url: string;
}

type Category = "general" | "js" | "react" | "ts" | "HTML/CSS";

export interface Answer {
  id: string;
  category: Category;
  title: string;
  descr: string;
  image?: string;
  video?: string;
  links: link[];
}
