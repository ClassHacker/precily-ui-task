FROM node:lts as runner
WORKDIR /node-express
ENV NODE_ENV production
COPY . .
RUN npm ci --only=production
EXPOSE 8080
CMD ["node", "app.js"]
