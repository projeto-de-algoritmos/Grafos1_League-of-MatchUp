FROM node:12-alpine as builder-file

WORKDIR /bld

COPY ./scrapping .
ENV PUPPETEER_SKIP_DOWNLOAD=true

RUN npm install
RUN npm start

FROM python:3.8-alpine
WORKDIR /app
COPY . .
COPY --from=builder-file bld/Edges.json /app
COPY --from=builder-file bld/Nodes.json /app
ENTRYPOINT [ "python", "lista_adjacencia.py" ]