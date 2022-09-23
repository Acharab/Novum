FROM node:14
# FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
# COPY yarn.lock /usr/src/app/
COPY .next /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
# RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]
# CMD ["npm", "run", "dev"]

# ref: https://nextjs.org/docs/deployment
# ref: https://steveholgado.com/nginx-for-nextjs/#dockerising-nextjs

# Install dependencies only when needed
# FROM node:alpine AS deps

# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json yarn.lock /usr/src/app
# RUN npm install

# # Rebuild the source code only when needed
# FROM node:alpine AS builder

# WORKDIR /usr/src/app

# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN npm run build && npm install --production --ignore-scripts --prefer-offline

# # Production image, copy all the files and run next
# FROM node:alpine AS runner

# WORKDIR /usr/src/app


# RUN npm install --global pm2

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# # You only need to copy next.config.js if you are NOT using the default configuration
# WORKDIR /usr/src/app
# COPY --from=builder /usr/src/app/next.config.js ./
# COPY --from=builder /usr/src/app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next
# COPY --from=builder /usr/src/app/node_modules ./node_modules
# COPY --from=builder /usr/src/app/package.json ./package.json

# USER nextjs

# EXPOSE 3000

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

# # Run npm start script with PM2 when container starts
#  CMD ["npm", "run", "dev"]
