FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production || npm install --only=production
COPY src ./src
EXPOSE 300
CMD ["npm", "start"]

