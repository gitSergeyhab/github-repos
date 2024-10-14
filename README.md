# Настроить NGINX, упаковать в DOCKER

## Пример создания образа (из корня)

```bash
docker build -t gh-list-image .
```

## Пример запуска контейнера (на 80 порту)

```bash
docker run -d --name gh-list-cont -p 80:80 gh-list-image
```
