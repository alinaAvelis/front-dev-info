ARG NODE_VERSION=17
ARG NGINX_VERSION=1.21

FROM node:${NODE_VERSION}-alpine as build
ARG NODE_ENV="production"
ENV WORKDIR=/srv
WORKDIR ${WORKDIR}
COPY --chown="node":"node" . .
RUN \
    npm install --legacy-peer-deps \
    && npm rebuild node-sass \
    && npm run build 


FROM nginx:${NGINX_VERSION}-alpine AS production
ENV TIMEZONE="Etc/UTC" \
    WORKDIR="/srv/www"
COPY --from=build /srv/build /usr/share/nginx/html
RUN \
    apk -q update > /dev/null \
    && apk -q add --no-cache --virtual .persistence \
    curl \
    && apk -q add --no-cache --virtual .build-deps \
    tzdata \
    && cp --remove-destination /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \
    && echo "${TIMEZONE}" > /etc/timezone \
    && apk -q del .build-deps \
    && rm -rf /var/cache/apk/* \
    && rm -rf /tmp/*

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]