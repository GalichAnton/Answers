import { Answer } from "../interfaces/interfaces";

export const jsAnswers: Answer[] = [
  {
    id: "1",
    category: "js",
    title: "Различия var, const и let",
    descr:
      "Главное отличие var и let в том, как они работают с областями видимости. Переменная var, созданная вне функции, действует как глобальная переменная — она доступна из любой части скрипта. Если же создать переменную с помощью var внутри функции, то она будет доступна только в этой функции",
    image:
      "https://i0.wp.com/www.devcript.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-04-at-11.35.55-AM.jpeg?w=968&ssl=1",
    video: "Yt9UbMmAKXc",
    links: [
      {
        title: "medium",
        url: "https://medium.com/nuances-of-programming/в-чём-разница-между-var-let-и-const-в-javascript-3084bfe9f7a3",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/420359/",
      },
    ],
  },
];
