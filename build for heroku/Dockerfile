FROM node:slim
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install -g -s --no-progress yarn
RUN yarn
RUN yarn cache clean
CMD [ "npm", "start" ]
EXPOSE 8080

