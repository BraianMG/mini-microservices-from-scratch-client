FROM node:16-alpine

# Unfortunately, create-react-app currently has two bugs that prevent it from running correctly in a docker container:
# - https://github.com/facebook/create-react-app/issues/8688
# - https://github.com/facebook/create-react-app/issues/11779
# To solve this, we have to add two environment variables
ENV CI=true
# ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm", "start" ]