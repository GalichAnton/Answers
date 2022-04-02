interface link {
  title: string;
  url: string;
}

export type Category = "general" | "js" | "react" | "ts" | "HTML/CSS" | "git";

export interface Answer {
  id: string;
  category: Category;
  title: string;
  descr: string;
  image?: string;
  video?: string;
  links: link[];
}

export interface Task extends Omit<Answer, "links" | "image"> {
  codepenUrl: string;
}
