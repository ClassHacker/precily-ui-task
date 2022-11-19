# Creating build for client
FROM node:14 AS client-build
# Setting up the work directory
WORKDIR /app
# Installing dependencies
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:14
WORKDIR /app
COPY --from=client-build /usr/src/app/client/build ./client/build
COPY ./package.json /app
RUN npm install

# Starting our application
CMD npm start