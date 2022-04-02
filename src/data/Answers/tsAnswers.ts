import { Answer } from "../../interfaces/interfaces";

export const tsAnswers: Answer[] = [
  {
    id: "1",
    category: "ts",
    title: "Что такое TypeScript? Зачем его использовать вместо JavaScript?",
    descr:
      "TypeScript — это расширенная версия JavaScript, главной целью которого является упрощение разработки крупных JS-приложений. Этот язык добавляет много новых принципов — классы, дженерики, интерфейсы, статические типы, что позволяет разработчикам использовать разные инструменты, такие как статический анализатор или рефакторинг кода.",
    image:
      "https://s3.amazonaws.com/oodles-technologies1/blog-images/e4d5fcf3-1a66-4d05-8dd4-1573e815121f.jpeg",
    video: "uE7uDeiFejw",
    links: [
      {
        title: "medium",
        url: "https://medium.com/nuances-of-programming/typescript-что-зачем-и-как-c3226e693f4",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/419993/",
      },
    ],
  },
  {
    id: "2",
    category: "ts",
    title: "Типы - Union, Intersection",
    descr:
      "Чем в TypeScript можно заменить наследование, указать сразу диапазон типов.",
    image: "https://i.stack.imgur.com/kIlCI.png",
    video: "uE7uDeiFejw",
    links: [
      {
        title: "scriptdev",
        url: "https://scriptdev.ru/guide/016/",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/519136/",
      },
    ],
  },
  {
    id: "3",
    category: "ts",
    title: "Обобщения (Generics)",
    descr:
      "Обобщение (Generics) — это параметризированный тип позволяющий объявлять параметры типа, являющиеся временной заменой конкретных типов, конкретизация которых будет выполнена в момент создания экземпляра.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "ysQb60CQB8U",
    links: [
      {
        title: "medium",
        url: "https://medium.com/@sergey.bakaev/обобщения-generics-в-typescript-b32b4aa8f810",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/455473/",
      },
    ],
  },
  {
    id: "4",
    category: "ts",
    title: "Поддерживает ли TypeScript принципы ООП?",
    descr:
      "TypeScript реализует объектно-ориентированный подход, в нем есть полноценная поддержка классов. Класс представляет шаблон для создания объектов и инкапсулирует функциональность, которую должен иметь объект.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "_sHvulfd4y8",
    links: [
      {
        title: "typescript-lang.ru",
        url: "http://typescript-lang.ru/docs/Classes.html",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/419993/",
      },
    ],
  },
  {
    id: "5",
    category: "ts",
    title: "Что такое геттеры и сеттеры в TypeScript?",
    descr:
      "Геттеры (get) и сеттеры (set) в TypeScript - это специальные функции, которые позволяют организовать взаимодействие со свойствами объекта.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "xyTXxpUKDuE",
    links: [
      {
        title: "mean-dev",
        url: "https://mean-dev.info/typescript-klassy/#:~:text=Геттеры%20(get)%20и%20сеттеры%20(set),организовать%20взаимодействие%20со%20свойствами%20объекта",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/macloud/blog/563408/",
      },
    ],
  },
  {
    id: "6",
    category: "ts",
    title: "Основные компоненты TypeScript",
    descr:
      "В основе TypeScript лежат три компонента: Язык – Он включает в себя синтаксис, ключевые слова и сигнатуры типа. Компилятор TypeScript − Компилятор TypeScript (tsc) конвертирует инструкции, написанные в TypeScript для его JavaScript эквивалентов. Языковая служба TypeScript – «Языковая служба» предоставляет дополнительный уровень вокруг конвейера основного компилятора, которым являются редакторы.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "JJ171w3u2wQ",
    links: [
      {
        title: "webformyself",
        url: "https://webformyself.com/typescript-izuchaem-s-nulya/",
      },
    ],
  },
  {
    id: "7",
    category: "ts",
    title: "Декораторы в TypeScript?",
    descr:
      "Декораторы —  позволяют описывать мета информацию прямо в объявлении класса, группируя все в одном месте и избегая дублирования.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "tBuCmXegEDo",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/company/docsvision/blog/310870/",
      },
      {
        title: "typescript-lang",
        url: "http://typescript-lang.ru/docs/Decorators.html",
      },
    ],
  },
  {
    id: "8",
    category: "ts",
    title: "Поддерживает ли TypeScript перегрузку функций?",
    descr:
      "В некоторых языках программирования перегрузка функций или метод перегрузки — это возможность создавать несколько одноименных функций с разными реализациями. При вызовах перегруженной функции будет выполняться конкретная реализация этой функции в соответствии с контекстом вызова, позволяя одному вызову функции выполнять разные задачи в зависимости от контекста.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "bi0w_aRD_1Q",
    links: [
      {
        title: "medium",
        url: "https://medium.com/nuances-of-programming/перегрузка-функций-в-typescript-a2027adadeb1",
      },
    ],
  },
  {
    id: "9",
    category: "ts",
    title: "В чем разница между interface и type в TypeScript?",
    descr:
      "В некоторых языках программирования перегрузка функций или метод перегрузки — это возможность создавать несколько одноименных функций с разными реализациями. При вызовах перегруженной функции будет выполняться конкретная реализация этой функции в соответствии с контекстом вызова, позволяя одному вызову функции выполнять разные задачи в зависимости от контекста.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "hGdx0hpZsvs",
    links: [
      {
        title: "habr",
        url: "https://qna.habr.com/q/543564",
      },
      {
        title: "SO",
        url: "https://ru.stackoverflow.com/questions/1329426/Интерфейс-или-тип-в-typescript-Что-использовать",
      },
    ],
  },
  {
    id: "10",
    category: "ts",
    title: "Когда в TypeScript используется ключевое слово declare?",
    descr:
      "Ключевое слово declare используется в TypeScript для объявления переменных, источником которых может служить некий файл, не являющийся TypeScript-файлом.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "5Eap2h9AffA",
    links: [
      {
        title: "SO",
        url: "https://stackoverflow.com/questions/43335962/purpose-of-declare-keyword-in-typescript",
      },
    ],
  },
  {
    id: "11",
    category: "ts",
    title: "Утверждение типов в TypeScript. Type Assertion",
    descr:
      "Type assertions – это возможность сказать компилятору Доверься мне, я знаю что делаю. Type assertion похож на каст в других языках программирования, но не делает каких-либо специальных проверок или преобразований. Он никак не влияет на время выполнения и добавляется только для компилятора. TypeScript надеется, что ты уже сделал все проверки, которые нужны.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "sQaSoKZOQjM",
    links: [
      {
        title: "metanit",
        url: "https://metanit.com/web/typescript/2.4.php",
      },
    ],
  },
  {
    id: "12",
    category: "ts",
    title: "Enum перечисления TypeScript",
    descr:
      "При создании приложений тяжело обойтись без большого количества специальных конфигурационных значений. Подобные значения разработчики выносят в отдельные классы со статическими свойствами или модули с константами, избавляя таким образом свой код от магических значений. TypeScript привносит новую синтаксическую конструкцию называемую Enum (перечисление). enum представляет собой набор логически связанных констант, в качестве значений которых могут выступать как числа, так и строки.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "FltLrtKWMak",
    links: [
      {
        title: "scriptdev",
        url: "https://scriptdev.ru/guide/015/",
      },
      {
        title: "typescriptlang",
        url: "https://www.typescriptlang.org/docs/handbook/enums.html",
      },
    ],
  },
  {
    id: "13",
    category: "ts",
    title: "Что такое утиная типизация?",
    descr:
      "Неявная типизация, латентная типизация или утиная типизация (англ. Duck typing) в ООП-языках — определение факта реализации определённого интерфейса объектом без явного указания или наследования этого интерфейса, а просто по реализации полного набора его методов. Название термина пошло от английского «duck test» («утиный тест»), который в оригинале звучит как: Если это выглядит как утка, плавает как утка и крякает как утка, то это, вероятно, и есть утка.",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "9iBg5a01si8",
    links: [
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/Утиная_типизация#:~:text=Неявная%20типизация%2C%20латентная%20типизация%20или,это%2C%20вероятно%2C%20и%20есть%20утка",
      },
    ],
  },
  {
    id: "14",
    category: "ts",
    title: "Когда увидите полезность TypeScript",
    descr: "Всегда! Пара пара пам пу!",
    image: "https://miro.medium.com/max/3840/1*zbYWWzFqY2ywsCUpY0jMxA.png",
    video: "NzlaQOcFUBg",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/post/482702/",
      },
    ],
  },
];
