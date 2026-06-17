# Nginx Reverse Proxy with Docker Compose

A multi-service setup containing reverse proxy routing, internal 
service discovery, and database integration using Docker Compose.

## Architecture
- **proxy-server** — Nginx reverse proxy, exposed on port 8080
- **web** — backend app, internal only, not exposed to host
- **db** — PostgreSQL, data persisted via named volume
- **github actions** — automated workflow to build and deploy images on docker hub using secrets

## Key concepts demonstrated
- Service-to-service communication via Docker's internal DNS
- Reverse proxy configuration with custom Nginx config
- Environment variables for secrets management
- Named volumes for data persistence
- Service startup ordering with depends_on
- Working of github actions 

## Run it
\`\`\`bash
docker compose up --build
\`\`\`
Visit `localhost:8080`

## What I learned
The reverse proxy (Nginx) routes incoming traffic to a backend service internally, without exposing it to the outside. Learned how Docker's internal DNS lets containers find each other by service name instead of hardcoded IPs. Also connected a Node app to a PostgreSQL database, passing credentials securely through environment variables instead of hardcoding them.Through github action , each commit act as a trigger to build and push our image on docker hub. 
