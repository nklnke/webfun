# webpack-starter-config

http://dev-city.me/2017/08/31/webpack-config-example

Simple webpack configuration with babel, sass and webpack-dev-server.

Js and css will minify in production mode.

## Development mode

```
npm start
```

In this mode *.css and *.js will  remove from /public folder.

## Production mode

```
npm run build
```

Assets (*.css and *.js) will save in /public folder.

## Описание конфига

В сети есть огромное количество конфигов вебпака, однако, большинство из них перегружены массой лишних вещей.

Учитывая этот факт, я создал простой конфиг с базовым функционалом, который позволяет сразу же начать разработку.

Вы можете писать на ES6, использовать CSS-препроцессор, а страница вашего web-приложения будет автоматически перезагружаться при изменении исходных файлов.

Также реализована минификация JS и CSS файлов при сборке на продакшен.

Надеюсь, этот пост уменьшит боль при настройке webpack’а для нового проекта, ведь расширять работающий конфиг проще, чем создавать его с нуля.
