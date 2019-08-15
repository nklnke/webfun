// Чтобы получить данные с сервера, нужно выполнить два вызова
// (каждый вернёт promise):

responce = await fetch(url);
body = await.responce.json();

// Кроме .json() есть функции для других типов ответа:
// arrayBuffer, blob, text, formData
