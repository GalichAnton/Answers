import { Answer } from "../../interfaces/interfaces";

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
  {
    id: "2",
    category: "js",
    title: "Типы данных в JavaScript? ",
    descr:
      "Типы данных в JavaScript можно разделить на две категории: простые типы и объекты. К категории простых типов в языке JavaScript относятся числа, текстовые строки и логические (или булевы) значения. Специальные значения null и undefined являются элементарными значениями, но они не относятся ни к числам, ни к строкам, ни к логическим значениям. Каждое из них определяет только одно значение своего собственного специального типа. Любое значение в языке JavaScript, не являющееся числом, строкой, логическим значением или специальным значением null или undefined, является объектом.",
    image: "https://wm-school.ru/js/images/data_types.png",
    video: "hGL1gtJpRiA",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/types",
      },
      {
        title: "mdn",
        url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures",
      },
    ],
  },
  {
    id: "3",
    category: "js",
    title: "Symbol, что такое, когда и для чего используется?",
    descr:
      "Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.",
    image: "https://miro.medium.com/max/1200/1*3AzH-G1JpbL4UhzH5TXS5w.png",
    video: "XTrXDgc7oHo",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/symbol",
      },
    ],
  },
  {
    id: "4",
    category: "js",
    title: "Как работает наследование в JS?",
    descr:
      "Наследование позволяет одним классам автоматически получить функцонал других классов и тем самым сократить объем кода. Для наследования одного класса от другого применяется ключевое слово extends: ? 1 2 class Base {} class Derived extends Base {}. После названия класса-наследника ставится ключевое слово extends, после которого идет имя класса, от которого мы хотим унаследовать функционал.",
    image:
      "https://camo.githubusercontent.com/f5ae0c06eb02ec98385aebc6fd4cd064bc4b1aec/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a533942693334456f4a6559637078506e4831497963512e6a706567",
    video: "b55hiUlhAzI",
    links: [
      {
        title: "learnjs",
        url: "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Classes_in_JavaScript",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/131714/",
      },
    ],
  },
  {
    id: "5",
    category: "js",
    title: "Асинхронность в JS",
    descr: "",
    image:
      "https://s3.amazonaws.com/media-p.slid.es/uploads/941580/images/6278461/js_async.jpeg",
    video: "lgmgY6hx12g",
    links: [
      {
        title: "mdn",
        url: "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Introducing",
      },
      {
        title: "doka",
        url: "https://doka.guide/js/async-in-js/",
      },
    ],
  },
  {
    id: "6",
    category: "js",
    title: "Что такое promise? async/await?",
    descr:
      "Промисы в JavaScript – это механизм для простой и последовательной обработки асинхронности в коде.\n" +
      "Учитывая, что человеческий мозг не предназначен для эффективной работы с асинхронностью, промисы стали важным и очень долгожданным дополнением. Функции async/await, дополнение к ES2017 (ES8), помогают нам писать синхронный внешне код, в котором все асинхронные задачи обрабатываются за кулисами.",
    image:
      "https://cdn-images-1.medium.com/max/1200/1*yAFctUA8useVWRbC-nWhBA.png",
    video: "SLQAVVziUzg",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/promise-basics",
      },
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/async-await",
      },
    ],
  },
  {
    id: "7",
    category: "js",
    title:
      "В чём разница между стеком вызовов (call stack) и очередью событий (task queue)? Event Loop",
    descr:
      "Основные различия между стеком и очередью заключаются в том, что в стеке используется метод LIFO (последний пришел первым вышел) для доступа и добавления элементов данных, тогда как в очереди используется метод FIFO (первый пришел первым вышел) для доступа и добавления элементов данных.",
    image: "https://miro.medium.com/max/1400/0*DZVAmBK6HlZTUov1.gif",
    video: "lgmgY6hx12g",
    links: [
      {
        title: "medium",
        url: "https://medium.com/@vladkhvo/call-stack-event-loop-and-task-queue-320c82ae4b22",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/424553/",
      },
    ],
  },
  {
    id: "8",
    category: "js",
    title: "Что такое замыкания и для чего они используются?",
    descr:
      "Замыкание — это функция, у которой есть доступ к области видимости, сформированной внешней по отношению к ней функции даже после того, как эта внешняя функция завершила работу. Это значит, что в замыкании могут храниться переменные, объявленные во внешней функции и переданные ей аргументы.",
    image:
      "https://present5.com/presentforday2/20161129/4_nodejs.pptx_images/4_nodejs.pptx_17.jpg",
    video: "lXE7N5afUtk",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/closure",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/424967/",
      },
    ],
  },
  {
    id: "9",
    category: "js",
    title: "Привязка контекста?",
    descr:
      "Функции в JavaScript никак не привязаны к своему контексту this, с одной стороны, здорово – это позволяет быть максимально гибкими, одалживать методы и так далее. Но с другой стороны — в некоторых случаях контекст может быть потерян. То есть мы вроде как вызываем метод объекта, а на самом деле он получает this = undefined. Такая ситуация является типичной для начинающих разработчиков, но бывает и у «зубров» тоже.",
    image: "https://miro.medium.com/max/1200/1*v4kmMI6lYbTpJdQV0kmGow.png",
    video: "bO881lHXieQ",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/bind",
      },
      {
        title: "medium",
        url: "https://medium.com/webbdev/bind-18396622ddc4",
      },
    ],
  },
  {
    id: "10",
    category: "js",
    title: "Отличия function expression и function declaration",
    descr:
      "Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться. После того, как поток выполнения достигнет правой части выражения присваивания let sum = function… – с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д. ). С Function Declaration всё иначе.Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).",
    image:
      "https://www.thecreativedev.com/wp-content/uploads/2018/04/screenshot-2018.04.18-20-55-02.png",
    video: "2paWsAFc7_8",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/function-expressions",
      },
    ],
  },
  {
    id: "11",
    category: "js",
    title: "try/catch и finally?",
    descr:
      "Неважно, насколько мы хороши в программировании, иногда наши скрипты содержат ошибки. Они могут возникать из-за наших промахов, неожиданного ввода пользователя, неправильного ответа сервера и по тысяче других причин. Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом ошибки в консоль. Но есть синтаксическая конструкция try..catch, которая позволяет «ловить» ошибки и вместо падения делать что-то более осмысленное.",
    image: "https://www.loginworks.com/wp-content/uploads/2018/03/bn.jpg",
    video: "cFTFtuEQ-10",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/try-catch",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/golovachcourses/blog/223821/",
      },
    ],
  },
  {
    id: "12",
    category: "js",
    title: "Что такое всплытие в JavaScript? Погружение событий? ",
    descr:
      "Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков. Существует ещё одна фаза из жизненного цикла события – «погружение» (иногда её называют «перехват»). Она очень редко используется в реальном коде, однако тоже может быть полезной.",
    image:
      "https://xhtml.ru/xyout/wp-content/uploads/2020/04/dom-event-flow.png",
    video: "rI94le4tchw",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/bubbling-and-capturing",
      },
    ],
  },
  {
    id: "13",
    category: "js",
    title: " В чем суть стрелочной функции? Ее отличия от обычной функции?",
    descr:
      "Стрелочные функции отличаются от обычных не только способом записи. Главное их отличие проявляется в том, как они работают с контекстом. Вкратце: контекст обычных функций зависит от места вызова, а контекст стрелочных функций — от того места, где они были определены.",
    image:
      "https://avatars.mds.yandex.net/i?id=bbd4301651492358db31b4e6b4d38106-5349176-images-thumbs&n=13",
    video: "j9aK98ESN8g",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/428566/",
      },
      {
        title: "vc",
        url: "https://vc.ru/dev/133379-5-otlichiy-mezhdu-obychnymi-i-strelochnymi-funkciyami",
      },
    ],
  },
  {
    id: "14",
    category: "js",
    title: "Spread/rest операторы? Деструктивное присваивание?",
    descr:
      "Стрелочные функции отличаются от обычных не только способом записи. Главное их отличие проявляется в том, как они работают с контекстом. Вкратце: контекст обычных функций зависит от места вызова, а контекст стрелочных функций — от того места, где они были определены.",
    image: "https://miro.medium.com/max/955/1*x70lFgXw_qyuVtn1C1nclg.jpeg",
    video: "hewpGZYDpso",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/post/489550/",
      },
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/destructuring-assignment",
      },
    ],
  },
  {
    id: "15",
    category: "js",
    title: "Иммутабельность, что это и для чего нужна?",
    descr:
      "Иммутабельность не позволяет изменять структуру или содержание данных. Присвоенное переменной значение не может меняться, переменная становится фактом, своего рода источником истины (a source of truth). Помните сказку, где принцесса целует лягушку в надежде, что та превратится в прекрасного принца. Так вот, иммутабельность утверждает, что лягушка всегда будет лягушкой.",
    image: "https://i.ytimg.com/vi/Z7_7xvJ7Cjc/maxresdefault.jpg",
    video: "BgMej9uGv0w",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/company/piter/blog/519320/",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/developersoft/blog/302118/",
      },
    ],
  },
  {
    id: "16",
    category: "js",
    title:
      "Чем localStorage отличается от sessionStorage, cookieStorage? В чём преимущества?",
    descr:
      "SessionStorage, LocalStorage, Cookie могут использоваться для хранения данных на стороне браузера, и все они представляют собой пары «ключ-значение» строкового типа. Разница в том, что первые два принадлежат WebStorage, и их цель - облегчить клиенту хранение данных. Файлы cookie поддерживаются браузерами Netscape, и их первоначальная цель - поддерживать статус HTTP.",
    image: "https://miro.medium.com/max/1400/1*O70Ml_4EqDa7i3uV0dlK1A.png",
    video: "pmd8D_YZ0BE",
    links: [
      {
        title: "hexlet",
        url: "https://ru.hexlet.io/blog/posts/lokalnoe-hranilische-vs-sessionnoe-hranilische-vs-cookie",
      },
      {
        title: "SO",
        url: "https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies",
      },
    ],
  },
  {
    id: "17",
    category: "js",
    title: "Расскажите об Object.create()",
    descr:
      "Object.create() – создание объекта с указанием прототипа. Метод Object.create() позволяет создать новый объект с указанным прототипом.",
    image: "https://i.ytimg.com/vi/HEv1SnLhCzs/maxresdefault.jpg",
    video: "cS6nTVNzOPw",
    links: [
      {
        title: "mdn",
        url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create",
      },
    ],
  },
  {
    id: "18",
    category: "js",
    title: "Веб-воркеры и сервис-воркеры?",
    descr:
      "Веб-воркеры — это потоки, принадлежащие браузеру, которые можно использовать для выполнения JS-кода без блокировки цикла событий.",
    image: "https://pay.liqu.ru/pictures/offline-first-diagram.png",
    video: "wx4lQNGTf1s",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/348424/",
      },
      {
        title: "medium",
        url: "https://medium.com/@vKuka/веб-воркеры-сервис-воркеры-и-ворклеты-1e2f561312fd",
      },
    ],
  },
  {
    id: "19",
    category: "js",
    title: "Разница между onload и DocumentContentLoaded",
    descr:
      "DOMContentLoaded сработает как только браузер полностью загрузит HTML и построит DOM-дерево. В отличии от DOMContentLoaded и ready, событие onload срабатывает после полной загрузки всех ресурсов (например, изображения).",
    image:
      "https://developer.mozilla.org/en-US/docs/Learn/Performance/Measuring_performance/navigationtimingapi.jpg",
    video: "KQKMRebk5uU",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/onload-ondomcontentloaded",
      },
      {
        title: "SO",
        url: "https://stackoverflow.com/questions/2414750/difference-between-domcontentloaded-and-load-events",
      },
    ],
  },
  {
    id: "20",
    category: "js",
    title: "Разница между атрибутами async, defer элемента script?",
    descr:
      "У async и defer есть кое-что общее: они не блокируют отрисовку страницы. Так что пользователь может просмотреть содержимое страницы и ознакомиться с ней сразу же.",
    image:
      "https://progi.pro/media/main/61/f3/8d/61f38d27239d2b46cf6b94b6bcce6bbb.png",
    video: "2fTTZovhKT0",
    links: [
      {
        title: "learnjs",
        url: "https://learn.javascript.ru/script-async-defer",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/323790/",
      },
    ],
  },
  {
    id: "21",
    category: "js",
    title: "Reflow и repaint, composition?",
    descr:
      "Reflow, Repaint и Composition, являются основными этапами отвечающими за отрисовку страницы в веб-браузере. ",
    image:
      "https://avatars.mds.yandex.net/i?id=1e317a4e350219cdd4e6a8897b40fc99-5515210-images-thumbs&n=13",
    video: "jBvkN8_c7t8",
    links: [
      {
        title: "medium",
        url: "https://rashidovr.medium.com/reflow-repaint-composite-что-это-и-как-это-работает-a777c5760295",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/dataart/blog/304934/",
      },
    ],
  },
];
