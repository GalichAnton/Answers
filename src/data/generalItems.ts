import { Answer } from "../interfaces/interfaces";

export const generalAnswers: Answer[] = [
  {
    id: "1",
    category: "general",
    title: "SOLID",
    descr:
      "(сокр. от англ. single responsibility, open–closed, Liskov substitution, interface segregation и dependency inversion) в программировании — мнемонический акроним, введённый Майклом Фэзерсом (Michael Feathers) для первых пяти принципов, названных Робертом Мартином[1][2] в начале 2000-х[3], которые означали 5 основных принципов объектно-ориентированного программирования и проектирования.",
    image: "https://shwanoff.ru/wp-content/uploads/2019/11/solid.png",
    video: "WMO9aarO390",
    links: [
      { title: "habr", url: "https://habr.com/ru/company/vk/blog/412699/" },
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/SOLID_(объектно-ориентированное_программирование)",
      },
    ],
  },
  {
    id: "2",
    category: "general",
    title: "Методологии разработки",
    descr:
      "Под методологией разработки подразумевается набор методов и критериев оценки, которые используются для постановки задачи, планирования, контроля и в конечном итоге — для достижения поставленной цели. Сам процесс разработки описывается моделью, которая определяет последовательность наиболее общих этапов и получаемых результатов.",
    image:
      "https://mypresentation.ru/documents_6/41d39a04b0fa082fe2b901007e6fcfa8/img10.jpg",
    video: "cDvpbdO9cT8",
    links: [
      { title: "habr", url: "https://habr.com/ru/company/edison/blog/269789/" },
    ],
  },
];
