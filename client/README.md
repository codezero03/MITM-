# Мой Vite bundle

## React + Typescript + ESLint + Prettier

Линтер и Прит

## Использование

```

cd my-app

npm i
```

## Скрипты

- Запустить в режиме разработки

```
npm run dev
```

- Собрать проект

```
npm run build
```

- Превью

```
npm run preview
```

## `ENV`

Для подключения переменных окружения нужно описать их в файле `.env` в корне. Переменные окружения можно получить из объекта `import.meta.env`. Чтобы Typescript подсказывал, какими переменными окружения можно пользоваться, их нужно прописать в файле `src/env.d.ts`. Только переменные с префиксом `VITE_` передаются на клиент.

## `settings.json`

Чтобы настроить форматирование и линтование по сохранению, необходимо прописать в `settings.json` (ctrl + shift + P) следующие настройки:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Можно добавить форматирование Prettier для JS и React:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

При работе не из корневой директории необходимо настроить CWD для ESLint:

```json
{
  "eslint.workingDirectories": [
    { "directory": "./client", "changeProcessCWD": true },
    { "directory": "./server", "changeProcessCWD": true }
  ]
}
```

Если директория не `client` или `server`, то можно добавить соответствующую строчку в данный массив.

## FAQ 

1. На windows из-под wsl Vite не следит за изменениями файлов
Добавить в `vite.config`

```js
server: { watch: { usePolling: true } }
```
Подробнее:  https://vitejs.dev/config/server-options.html#server-watch. 
