FROM node:18.18.2 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN rm -rf AddOnServer
RUN npm run build

COPY AddOnServer ./addon
RUN cd addon && npm install
RUN cd addon && npm run build

FROM node:18.18.2
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/addon ./addon

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["/bin/bash", "-c", "nohup node addon/build/index.js & LOCALHOST_IP=$(hostname -I | tr -d ' ') node server.js"]