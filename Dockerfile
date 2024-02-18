FROM node:current-alpine3.17

WORKDIR /home/cycclon/Projects/rioja-recursos/backend/mantenimiento

COPY . /home/cycclon/Projects/rioja-recursos/backend/mantenimiento

RUN npm install

EXPOSE 3004

CMD npm run Start