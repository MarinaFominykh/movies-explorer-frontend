# Дипломная работа. Фронтенд

Это дипломная работа по курсу "Веб-разработчик". Данный проект представляет собой фронтендную часть итогового продукта.

## Описание проекта:

Проект представляет собой сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.Пользователь вводит в строку поиска ключевые слова и нажимает кнопку «Искать». После этого приложение выполняет следующее:

- отправляет запрос к сервису с данными о фильмах, получает данные и сохраняет их;
- ищет все подходящие фильмы согласно выбранному жанру и отображает карточки с ними;
- после того, как ползователь сохраняет фильм, он отображается в разделе "Сохраненные фильмы".

## Роуты

В проекте реализованы следующие роуты:

- / - главная страница. Содержит информацию о выполненном проекте.
- /movies - страница "Фильмы". Содержит форму поиска фильмов и блок с результатами поиска.
- /saved-movies - страница "Сохраненные фильмы". Показывает фильмы, сохранённые пользователем.
- /profile - страница редактирования профиля. Пользователь может изменить данные своего аккаунта.
- /sign-up — содержит форму для регистрации пользователя.
- /sign-in — содержит форму для авторизации пользователя.
  Если неавторизованный пользователь приходит на сайт, он попадает на страницу входа, на какой бы роут он ни пришёл.

## Используемые технологии:

- HTML;
- css;
- БЭМ;
- JavaScript;
- React;
- Git;
