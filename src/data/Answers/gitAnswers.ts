import { Answer } from "../../interfaces/interfaces";

export const gitAnswers: Answer[] = [
  {
    id: "1",
    category: "git",
    title: "Что такое git flow?",
    descr:
      "Git-flow — альтернативная модель ветвления Git, в которой используются функциональные ветки и несколько основных веток. Эта модель была впервые опубликована и популяризована Винсентом Дриссеном на сайте nvie. По сравнению с моделью магистральной разработки, в Git-flow используется больше веток, каждая из которых существует дольше, а коммиты обычно крупнее.",
    image:
      "https://i.pinimg.com/originals/05/ab/a7/05aba7f02d9c70840027a377c5bd85e3.png",
    video: "gW6dFpTMk8s",
    links: [
      { title: "habr", url: "https://habr.com/ru/post/346066/" },
      {
        title: "atlassian",
        url: "https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow",
      },
    ],
  },
  {
    id: "2",
    category: "git",
    title: "Как изменить уже запущенный коммит?",
    descr: "Git revert, ammend",
    image: "https://miro.medium.com/max/1200/1*9PnPjPI65fGwLiMfluVLrw.jpeg",
    video: "gVNyfHvxdsk",
    links: [
      {
        title: "SO",
        url: "https://ru.stackoverflow.com/questions/429512/Откатить-уже-опубликованный-коммит-и-опубликовать-новый-не-вызывая-мержа-у-друг",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/201922/",
      },
    ],
  },
  {
    id: "3",
    category: "git",
    title: "Reset hard/soft/mixed разница?",
    descr: "Короткое не нашел читать по ссылкам",
    image: "https://techrocks.ru/wp-content/uploads/2020/10/xkcd_comic.png",
    video: "XoBc1ty3m40",
    links: [
      {
        title: "SO",
        url: "https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard",
      },
      {
        title: "habr",
        url: "https://habr.com/ru/post/203282/",
      },
    ],
  },
];
