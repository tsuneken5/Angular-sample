FROM node:18.13.0

RUN apt-get update -qq && apt-get install -y vim
RUN npm update -g npm
RUN npm install -g @angular/cli@15.0.0

COPY ./humbuger-menu /home/node/humbuger-menu
WORKDIR /home/node/humbuger-menu

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]