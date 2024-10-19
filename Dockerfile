FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/ ./

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start"]