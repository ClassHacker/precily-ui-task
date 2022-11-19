# Creating build for client
FROM node:14 AS client-build
# Setting up the work directory
WORKDIR /usr/src/app
# Installing dependencies
COPY client/ ./client/
RUN cd client && npm install && npm run build

# Creating build for server
FROM node:14 AS server-build
# Setting up the work directory
WORKDIR /usr/src/app
# Installing dependencies
COPY server/ ./server/
RUN cd server && npm install && npm run build

FROM node:14
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY --from=client-build /usr/src/app/client/build ./client/build
COPY --from=server-build /usr/src/app/server/build ./
RUN ls

# Starting our application
CMD ["node", "./server.bundle.js"]