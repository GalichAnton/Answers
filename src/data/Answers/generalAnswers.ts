import { Answer } from "../../interfaces/interfaces";

export const generalAnswers: Answer[] = [
  {
    id: "1",
    category: "general",
    title: "SOLID",
    descr:
      "(сокр. от англ. single responsibility, open–closed, Liskov substitution, interface segregation и dependency inversion) в программировании — мнемонический акроним, введённый Майклом Фэзерсом (Michael Feathers) для первых пяти принципов, названных Робертом Мартином[1][2] в начале 2000-х[3], которые означали 5 основных принципов объектно-ориентированного программирования и проектирования.",
    image: "https://shwanoff.ru/wp-content/uploads/2019/11/solid.png",
    video: "YiumvW04cDI",
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
  {
    id: "3",
    category: "general",
    title: "MVC и MVVM ",
    descr:
      "MVC и MVVM - это два архитектурных паттерна. И главное различие между MVC и MVVM состоит в том, что MVC является архитектурным шаблоном, который разделяет приложение на три основных логических компонента как модель, представление и контроллер, в то время как MVVM является архитектурным шаблоном, который делит приложение на компоненты как модель, представление и ViewModel.",
    image:
      "https://i1.wp.com/cdn.differencebetween.net/wp-content/uploads/2019/11/MVC-vs-MVVM.jpg",
    video: "HC33Mggec3k",
    links: [{ title: "habr", url: "https://habr.com/ru/post/215605/" }],
  },
  {
    id: "4",
    category: "general",
    title: "Концепция atomic design",
    descr:
      "Атомарный дизайн — методология Брэда Фроста, которая представляет собой разбивку композиции сайта на простейшие компоненты. Они используются в проектировании всего сайта. Идея в том, что вы начинаете создавать дизайн не с макетов страниц, а с атомов — шрифтов, отступов, полей ввода, анимации и других мелких деталей. Атомы объединяются и образуют молекулы — например, это картинка с подписью и ссылкой.",
    image:
      "https://avatars.mds.yandex.net/i?id=cf0f6483464fb81d6e720b31db5779ee-5101230-images-thumbs&n=13",
    video: "xLuVsU0VN10",
    links: [{ title: "habr", url: "https://habr.com/ru/post/249223/" }],
  },
  {
    id: "5",
    category: "general",
    title: "PWA",
    descr:
      "Прогрессивное web-приложение (англ. progressive web app, PWA) — технология в web-разработке, которая визуально и функционально трансформирует сайт в приложение (мобильное приложение в браузере).",
    image:
      "https://protraffic.com/wp-content/uploads/2019/09/pwa-characteristics.png",
    video: "MuEFPsW9B3M",
    links: [
      { title: "habr", url: "https://habr.com/ru/post/418923/" },
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/Прогрессивное_веб-приложение",
      },
    ],
  },
  {
    id: "6",
    category: "general",
    title: "Что происходит когда переходим по URL в браузере",
    descr:
      "Браузер отправляет HTTP-запрос, чтобы получить контент сайта После установки соединения браузер отправляет специальный запрос, в котором просит сервер отправить данные для отображения страницы. В этом запросе содержится информация о самом браузере, временные файлы, требования к соединению и так далее.",
    image: "http://www.wordpress-abc.ru/wp-content/uploads/2014/04/image00.jpg",
    video: "ylG8_d9Qk1U",
    links: [
      {
        title: "vc",
        url: "https://vc.ru/selectel/76371-chto-proishodit-kogda-polzovatel-nabiraet-v-brauzere-adres-sayta",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/karuna/blog/568702/",
      },
    ],
  },
  {
    id: "7",
    category: "general",
    title: "Как идет соединение между клиентом и сервером",
    descr:
      'Как правило взаимодействие осуществляется по схеме «клиент-сервер»: "клиент" запрашивает какую-либо информацию (например страницу сайта), сервер принимает запрос, обрабатывает его и посылает результат. Номера портов серверных приложений общеизвестны, например: почтовый SMTP сервер «слушает» 25-й порт, POP3 сервер, обеспечивающий чтение почты из ваших почтовых ящиков «слушает» 110-порт, веб-сервер - 80-й порт и пр.',
    image: "https://image.slideserve.com/784297/slide17-l.jpg",
    video: "7bdyhDUm0ts",
    links: [
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/Клиент_—_сервер",
      },
      {
        title: "mdn ",
        url: "https://developer.mozilla.org/ru/docs/Learn/Server-side/First_steps/Client-Server_overview",
      },
    ],
  },
  {
    id: "8",
    category: "general",
    title: "Функциональное программирование",
    descr:
      "ФП — это стиль написания программ, при котором просто комбинируется набор функций. В частности, ФП подразумевает обёртывание в функции практически всего подряд. Приходится писать много маленьких многократно используемых функций и вызывать их одну за другой, чтобы получить результат вроде (func1.func2.func3) или комбинации типа func1(func2(func3())).",
    image: "https://thecode.media/wp-content/uploads/2020/07/imperative.jpeg",
    video: "jAJ79PLkdMA",
    links: [
      {
        title: "medium",
        url: "https://medium.com/devschacht/glossary-of-modern-javascript-concepts-1198b24e8f56",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/vk/blog/327522/",
      },
    ],
  },
  {
    id: "9",
    category: "general",
    title: "Что такое чистая функция?",
    descr:
      "В языках программирования чистая функция — это функция, которая: является детерминированной; не обладает побочными эффектами. Наличия только одного из свойств недостаточно для того, чтобы функция была чистой. ",
    image:
      "https://myslide.ru/documents_4/80d69383b7c42d0dd6bd3de428dd2b82/img28.jpg",
    video: "KU81NnNcjmw",
    links: [
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/Чистота_функции",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/437512/",
      },
    ],
  },
  {
    id: "10",
    category: "general",
    title: "Мемоизация функции? ",
    descr:
      "Мемоизация (англ. memoization от англ. memory и англ. optimization) — в программировании сохранение результатов выполнения функций для предотвращения повторных вычислений. Это один из способов оптимизации, применяемый для увеличения скорости выполнения компьютерных программ.",
    image: "https://present5.com/presentation/54632388_50426647/image-14.jpg",
    video: "chWI2gx8qNE",
    links: [
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/Мемоизация",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/332384/",
      },
    ],
  },
  {
    id: "11",
    category: "general",
    title: "Каррирование функции?",
    descr:
      "Каррирование — это процесс превращения функции от n аргументов в цепочку вложенных n -функций от одного аргумента. Соответственно, каррированная функция — это множество функций от одного аргумента.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--scXNLQCj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cl.ly/3n1W2X0d0E3C/Image%25202018-02-25%2520at%25209.36.10%2520AM.png",
    video: "pzV5rJ19qsI",
    links: [
      {
        title: "wiki",
        url: "https://learn.javascript.ru/currying-partials",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/427295/",
      },
    ],
  },
  {
    id: "12",
    category: "general",
    title: "Коллекции в JavaScript",
    descr: "Коллекция - это структура данных JavaScript, похожая на массив.",
    image: "http://images.myshared.ru/5/518078/slide_5.jpg",
    video: "Ggmk21ZNSKQ",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/map-set",
      },
    ],
  },
  {
    id: "13",
    category: "general",
    title: "Функции первого класса",
    descr:
      "Если язык программирования имеет функции первого класса, то значит они трактуются как объекты, то есть могут быть переданы другим функциям и их можно вернуть из функций. Так же их можно присваивать переменным.",
    image:
      "https://trashbox.ru/ifiles/981986_abddb6_functions/kak-sozdavalsya-javascript-i-osobennosti-arhitektury-15.png",
    video: "JRA2JpqAjlw",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/428570/",
      },
      {
        title: "mdn",
        url: "https://developer.mozilla.org/ru/docs/Glossary/First-class_Function",
      },
    ],
  },
  {
    id: "14",
    category: "general",
    title: "Что такое рекурсия и для чего используется?",
    descr:
      "Рекурсия – это термин в программировании, означающий вызов функцией самой себя. Рекурсивные функции могут быть использованы для элегантного решения определённых задач.",
    image:
      "https://cf.ppt-online.org/files/slide/t/TxUPjoEQmOs05yue46pWXKHvzR7i8hfcwCnMZV/slide-38.jpg",
    video: "bh5TKVync9M",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/recursion",
      },
      {
        title: "medium",
        url: "https://medium.com/nuances-of-programming/простыми-словами-о-рекурсии-61e12c344a41",
      },
    ],
  },
  {
    id: "15",
    category: "general",
    title: "Что быстрее, цикл или рекурсия?",
    descr:
      "На этот вопрос ответить непросто. Зачастую циклы дают лучшую производительность, чем рекурсивные вызовы, поскольку вызовы методов потребляют больше ресурсов, чем исполнение обычных операторов. В случае головной рекурсии стек вызовов разрастается, и его необходимо просматривать для получения конечного ответа. Тем не менее это утверждение справедливо не всегда и зависит от типа решаемой задачи. Как вы увидели в начале статьи, рекурсия выполняется быстрее цикла в случае с расчетом факториала.",
    image:
      "https://cf.ppt-online.org/files/slide/4/4juESAc3nJ985yNYZ2UPI1brBLHGFx7Dzfklst/slide-56.jpg",
    video: "OekWVc-3zfY",
    links: [
      {
        title: "SO",
        url: "https://ru.stackoverflow.com/questions/797512/Как-определить-в-каких-случаях-эффективнее-использовать-рекурсию-а-когда-цикл",
      },
      {
        title: "habr",
        url: "https://qna.habr.com/q/7481",
      },
    ],
  },
  {
    id: "16",
    category: "general",
    title: "Что такое [[scope]] функции?",
    descr:
      "[[Scope]] - это скрытое внутреннее свойство функции, которое она получает во время вызова. Данное свойство содержит ссылку на ту область видимости, в которой данная функция была объявлена.",
    image: "https://miro.medium.com/max/1838/1*BwARRnm0-gFoh-Rq_ubbwQ.png",
    video: "2XFidNSwdpY",
    links: [
      {
        title: "itchief",
        url: "https://itchief.ru/javascript/scope-and-context",
      },
    ],
  },
  {
    id: "17",
    category: "general",
    title: "REST",
    descr:
      "REST (от англ. Representational State Transfer — «передача репрезентативного состояния» или «передача „самоописываемого“ состояния») — архитектурный стиль взаимодействия компонентов распределённого приложения в сети. Другими словами, REST — это набор правил того, как программисту организовать написание кода серверного приложения, чтобы все системы легко обменивались данными и приложение можно было масштабировать.[1] REST представляет собой согласованный набор ограничений, учитываемых при проектировании распределённой гипермедиа-системы. В определённых случаях (интернет-магазины, поисковые системы, прочие системы, основанные на данных) это приводит к повышению производительности и упрощению архитектуры. В широком смысле[уточнить] компоненты в REST взаимодействуют наподобие взаимодействия клиентов и серверов во Всемирной паутине. REST является альтернативой RPC[2].",
    image: "https://board.osthemes.ru/oc-content/plugins/blog/img/blog/9.jpg",
    video: "J4Fy6lmLBr0",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/post/590679/",
      },
      {
        title: "wiki",
        url: "https://ru.wikipedia.org/wiki/REST",
      },
    ],
  },
];
