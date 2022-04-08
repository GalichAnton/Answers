import { Answer } from "../../interfaces/interfaces";

export const reactAnswers: Answer[] = [
  {
    id: "1",
    category: "react",
    title: "Что такое React?",
    descr:
      "React - это библиотека JavaScript, которая используется для создания пользовательского интерфейса. React был создан компанией Facebook, а первый релиз библиотеки увидел свет в марте 2013 года.",
    image:
      "https://static.insales-cdn.com/files/1/1336/16082232/original/1_26d70717b9e9b3e99c8d566f10f31b69.png",
    video: "doympyOFlKE",
    links: [
      {
        title: "reactjs",
        url: "https://ru.reactjs.org/tutorial/tutorial.html",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/ruvds/blog/343022/",
      },
    ],
  },
  {
    id: "2",
    category: "react",
    title: "State и props, в чем их разница?",
    descr:
      "Props (намеренно сокращённо от англ. «properties» — свойства) и state — это обычные JavaScript-объекты. Несмотря на то, что оба содержат информацию, которая влияет на то, что увидим после рендера, есть существенное различие: props передаётся в компонент (служат как параметры функции), в то время как state находится внутри компонента (по аналогии с переменными, которые объявлены внутри функции).",
    image:
      "https://s3.amazonaws.com/media-p.slid.es/uploads/118447/images/1602340/react-info-flow.png",
    video: "-mDs48HB3II",
    links: [
      {
        title: "reactjs",
        url: "https://ru.reactjs.org/docs/faq-state.html#:~:text=Props%20(намеренно%20сокращённо%20от%20англ.,переменными%2C%20которые%20объявлены%20внутри%20функции)",
      },
      {
        title: "learn-reactjs",
        url: "https://learn-reactjs.ru/faq/component-state",
      },
    ],
  },
  {
    id: "3",
    category: "react",
    title: "Какие методы жизненного цикла компонент вы знаете?",
    descr:
      "Существуют разные методы жизненного цикла, которые React предоставляет на разных этапах жизненного цикла компонента. React автоматически вызывает ответственный метод в соответствии с фазой, в которой находится компонент. Эти методы дают нам лучший контроль над нашим компонентом, и мы можем манипулировать ими, используя эти методы.",
    image: "https://miro.medium.com/max/979/0*Bn4KUX_ETHLN6V8O",
    video: "O8f6aXqpGHw",
    links: [
      {
        title: "github",
        url: "https://github.com/krambertech/react-essential-course/blob/master/02-deep-in-components/README.md",
      },
      {
        title: "reactjs",
        url: "https://ru.reactjs.org/docs/state-and-lifecycle.html",
      },
    ],
  },
  {
    id: "4",
    category: "react",
    title: "В чем разница между Component и PureComponent?",
    descr:
      "Отличие заключается в том, что React.Component не реализует shouldComponentUpdate(), а React.PureComponent реализует его поверхностным сравнением пропсов и состояния. Если метод render() вашего React-компонента всегда рендерит одинаковый результат при одних и тех же пропсах и состояниях, для повышения производительности в некоторых случаях вы можете использовать React.PureComponent.",
    image: "https://miro.medium.com/max/2000/1*rrl7MQc41h5ElkLmMTdSUA.jpeg",
    video: "YEqCI9NMoLI",
    links: [
      {
        title: "medium",
        url: "https://medium.com/frontend-notes/purecomponent-и-components-5c15cf206ba7",
      },
      {
        title: "reactjs",
        url: "https://ru.reactjs.org/docs/react-api.html",
      },
    ],
  },
  {
    id: "5",
    category: "react",
    title: "Функциональные и классовые components react",
    descr:
      "Отличие заключается в том, что React.Component не реализует shouldComponentUpdate(), а React.PureComponent реализует его поверхностным сравнением пропсов и состояния. Если метод render() вашего React-компонента всегда рендерит одинаковый результат при одних и тех же пропсах и состояниях, для повышения производительности в некоторых случаях вы можете использовать React.PureComponent.",
    image:
      "https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1570731300-68451.png",
    video: "KxDnMU18JwI",
    links: [
      {
        title: "frontend-stuff",
        url: "https://frontend-stuff.com/blog/react-components-hooks-vs-classes/",
      },
      {
        title: "reactjs",
        url: "https://ru.react.js.org/docs/components-and-props.html",
      },
    ],
  },
  {
    id: "6",
    category: "react",
    title: "Что такое неконтролируемые компоненты?",
    descr:
      "Контролируемый компонент-это компонент, который получает измененное значение из функции обратного вызова, а неконтролируемый компонент-это компонент, у которого есть значение из DOM.",
    image: "https://i.imgur.com/D5u8pqE.png",
    video: "QJe-1i3zi1M",
    links: [
      {
        title: "learn-reactjs",
        url: "https://learn-reactjs.ru/core/uncontrolled-components",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/319520/",
      },
    ],
  },
  {
    id: "7",
    category: "react",
    title: "Что такое Refs?",
    descr:
      "Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().",
    image: "https://miro.medium.com/max/724/1*QwAivsjKxhgPxZJXKjip9g.jpeg",
    video: "j5JKhPPVxRM",
    links: [
      {
        title: "reactjs",
        url: "https://ru.react.js.org/docs/refs-and-the-dom.html",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/319520/",
      },
    ],
  },
  {
    id: "8",
    category: "react",
    title: "Как в React отлавливать ошибки?",
    descr:
      "Предохранители — это React-компоненты, которые перехватывают JavaScript-ошибки в любом месте их дочернего дерева компонентов. Затем логируют эти ошибки и отображают запасной интерфейс вместо «поломанного» дерева компонентов. Предохранители отлавливают ошибки при рендере, в методах жизненного цикла и в конструкторах всего дерева под ними.",
    image: "https://i.ytimg.com/vi/5olfAXkDVnU/maxresdefault.jpg",
    video: "gyqAW0--0Tc",
    links: [
      {
        title: "reactjs",
        url: "https://ru.reactjs.org/docs/react-component.html",
      },
      {
        title: "medium",
        url: "https://medium.com/nuances-of-programming/рекомендации-по-обработке-и-регистрации-ошибок-в-react-7e016cb381ec",
      },
    ],
  },
  {
    id: "9",
    category: "react",
    title: "Зачем key в React?",
    descr:
      "Ключи помогают React идентифицировать, какие элементы были изменены, добавлены или удалены. Ключи должны быть заданы элементам внутри массива, чтобы предоставить элементам постоянный идентификатор",
    image: "https://i.ytimg.com/vi/OtAlPwW8DNU/maxresdefault.jpg",
    video: "OtAlPwW8DNU",
    links: [
      {
        title: "reactjs",
        url: "https://ru.react.js.org/docs/lists-and-keys.html",
      },
      {
        title: "gist",
        url: "https://gist.github.com/Daniel217D/6f6d0bd70beff8dde9f986402849c911",
      },
    ],
  },
  {
    id: "10",
    category: "react",
    title: "Как работает Virtual DOM?",
    descr:
      "React использует Virtual DOM для отслеживания изменений. После каждого изменения состояния, React создаёт новый Virtual DOM и сравнивает его с предыдущим, чтобы узнать какие части приложения изменились. Vue использует Virtual DOM и специальные объекты Proxy, чтобы узнавать когда изменились данные.",
    image: "https://miro.medium.com/max/800/1*CqdIWZy0NMPQhYx2rKzo9g.png",
    video: "rsW9_UtF4jk",
    links: [
      {
        title: "learn-reactjs",
        url: "https://learn-reactjs.ru/faq/virtual-dom-and-internals",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/macloud/blog/558682/",
      },
    ],
  },
  {
    id: "11",
    category: "react",
    title: "Flux",
    descr:
      "Flux — это архитектура, которую команда Facebook использует при работе с React. Это не фреймворк, или библиотека, это новый архитектурный подход, который дополняет React и принцип однонаправленного потока данных.",
    image: "https://webformyself.com/wp-content/uploads/2019/10/4.png",
    video: "Y75JiBqhLhk",
    links: [
      {
        title: "medium",
        url: "https://medium.com/@marina.kovalyova/flux-the-react-js-application-architecture-773f515d068d",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/246959/",
      },
    ],
  },
  {
    id: "12",
    category: "react",
    title: "Redux",
    descr:
      "Redux — это инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях JavaScript с большим количеством сущностей. Представляет собой библиотеку JavaScript. Название читается как «Редакс» и составлено из двух слов: reduce и flux. Reduce — это функция, которая приводит большую структуру данных к одному значению. Flux — архитектура приложения, при которой данные передаются в одну сторону.",
    image: "https://miro.medium.com/max/2000/1*ko2Y_mfEvD0iAKS7Tr-urA.png",
    video: "5Qtqzeh5FeM",
    links: [
      {
        title: "htmlacademy",
        url: "https://htmlacademy.ru/blog/boost/frontend/redux",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/company/manychat/blog/541794/",
      },
    ],
  },
  {
    id: "13",
    category: "react",
    title: "Что такое редьюсеры в Redux?",
    descr:
      "Reducer – это чистая функция, которая принимает в качестве аргументов предыдущее состояние и action и возвращает новое состояние. Action – это объект, задающий тип и (опционально) нагрузку: function myReducer(previousState, action) => {// use the action type and payload to create a new state based on // the previous state. return newState;}",
    image: "https://miro.medium.com/max/1400/1*yYkitaR24SuFNXYyTxL1xA.gif",
    video: "Dzzeir85i3c",
    links: [
      {
        title: "redux.js.org",
        url: "https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/498860/",
      },
    ],
  },
  {
    id: "14",
    category: "react",
    title: "Что такое middleware для redux?",
    descr:
      "Мидлвары — функции, которые последовательно вызываются в процессе обновления контейнера. Общий принцип работы таков: Мидлвары встраиваются в хранилище при его создании. Во время диспатчинга (отправки действий) данные проходят через них и только затем попадают в редьюсер. Такая организация библиотеки позволяет её крайне легко расширять новой функциональностью без необходимости переписывать исходный код Redux под конкретную задачу.",
    image:
      "https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif",
    video: "ax1verdkVPo",
    links: [
      {
        title: "redux.js.org",
        url: "https://redux.js.org/understanding/history-and-design/middleware",
      },
      {
        title: "hexlet",
        url: "https://ru.hexlet.io/courses/js-redux/lessons/middlewares/theory_unit",
      },
    ],
  },
  {
    id: "15",
    category: "react",
    title: "Асинхронные action, redux-thunk?",
    descr:
      "Redux Thunk это middleware библиотека, которая позволяет вам вызвать action creator, возвращая при этом функцию вместо объекта. Функция принимает метод dispatch как аргумент, чтобы после того, как асинхронная операция завершится, использовать его для диспатчинга обычного синхронного экшена, внутри тела функции.",
    image: "https://i.ytimg.com/vi/v_6WDhwUxSg/maxresdefault.jpg",
    video: "eWdnjfRu9Io",
    links: [
      {
        title: "redux.js.org",
        url: "https://redux.js.org/tutorials/fundamentals/part-6-async-logic",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/483314/",
      },
    ],
  },
  {
    id: "16",
    category: "react",
    title: "SSR, что это и как работает?",
    descr:
      "SSR – (анг. аббревиатура от Server Side Rendering) это технология, которая позволяет, с помощью Node.js, запускать JavaScript код на сервере (а не в браузере как обычно) и готовый результат отправлять пользователю, избегая лишней нагрузки на его браузер и компьютер. Зачем нужен SSR. В первую очередь, для оптимизации скорости работы сайта и SEO продвижения.",
    image: "https://miro.medium.com/max/2000/1*SKOU13Gu35WJDL1X35rUaA.png",
    video: "rn-fJ-m8WOY",
    links: [
      {
        title: "habr",
        url: "https://habr.com/ru/post/551948/",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/527310/",
      },
    ],
  },
  {
    id: "17",
    category: "react",
    title: "Что такое порталы?",
    descr:
      "Порталы - это способ визуализации элемента в узле DOM, который существует вне иерархии DOM родительского компонента. Когда запускается портал, то все события управляются иерархией компонентов React, а не иерархией, заданной положением DOM элемента.",
    image:
      "https://blog.logrocket.com/wp-content/uploads/2020/05/react-cool-portal.jpeg",
    video: "xcWaYD4gZAs",
    links: [
      {
        title: "learn-reactjs",
        url: "https://learn-reactjs.ru/core/portals",
      },
      {
        title: "medium",
        url: "https://medium.com/nuances-of-programming/понятие-о-порталах-в-react-с-примерами-использования-9184c95a54d7",
      },
    ],
  },
  {
    id: "18",
    category: "react",
    title: "React Hooks(зачем перешли, какие проблемы решают)",
    descr:
      "Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.",
    image: "https://miro.medium.com/max/1400/1*IbfsXCPT4v6z4_v_VHLxOQ.jpeg",
    video: "EbqQg0K4wbo",
    links: [
      {
        title: "reactjs",
        url: "https://ru.reactjs.org/docs/hooks-intro.html",
      },
      {
        title: "medium",
        url: "https://medium.com/sibdev/в-прошлом-году-react-получил-глобальное-нововведение-hooks-или-хуки-d52b6502224d",
      },
    ],
  },
];
