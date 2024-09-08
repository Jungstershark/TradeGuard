# Integrated Trading System

## Project Overview

This project aims to develop an integrated system that streamlines instrument search, provides real-time limit tracking, and mitigates financial risks associated with exceeding trading limits. The system enhances the user experience by offering a seamless and intuitive single interface for traders to execute trades efficiently.

The system is built to ensure the shortest time-to-market for trade execution, featuring dashboards, forms, and real-time updates to provide users with accurate data.
Key Challenges Addressed
1. **Efficient Data Querying & Auto-Complete Fields**

   - *Issue:* Traders need to search through a large dataset containing around 130k line items for each instrument variation.
   - *Solution:* A powerful search interface with autocomplete fields that improve data discoverability. For example, the system can map synonymous terms like "Tbills" and "Treasury Bills."

2. **Real-Time Updates & Tracking Through SSE Streaming**

   - *Issue:* Trading limits are only updated once per day, creating risks when multiple traders are executing trades simultaneously with the same counterparty.
   - *Solution:* The system leverages Server-Sent Events (SSE) for real-time updates, ensuring traders have the latest limit information when executing trades.

## Tech Stack
- **Frontend:** TypeScript + React
- **Backend:** Java Spring Boot
- **Database:** MySQL
- **Deployment:** Docker (To run containerised mySQL server)

## Microservices Architecture

The backend architecture is based on a microservices design, ensuring modularity, scalability, and ease of maintenance.
Microservices:

1. **execution-service:** Handles limit tracking and trade execution. 
2. **analysis-service:** Responsible for instrument search and trade approval. 
3. **record-service:** Logs approval events and maintains records. 
4. **auth-service:** Provides user authentication using JWT tokens. 
5. **gateway-service:** Acts as an API gateway, routing traffic to the appropriate microservice.

## Startup Guide

### Frontend (React):

1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the frontend:
```bash
npm run dev
```

### Backend (Spring Boot + Docker)
Each microservice must be started individually.
#### Activate Docker for each service: Navigate to the respective service directory, e.g., for the analysis service:
1. Navigate to the respective service directory, e.g., for the analysis service:
```bash
cd analysis
```
2. Start the service using Docker Compose:
```bash
docker-compose up
```
3. To stop the service:
```bash
docker-compose down
```
#### Activate the Spring Boot microservice:
1. Run the following command:
```bash
./mvnw clean compile
./mvnw spring-boot:run
```
2. Repeat this process for all other microservices (execution-service, record-service, etc.).

## Conclusion

This system provides a robust solution for trading operations, enabling traders to perform fast and accurate searches while maintaining real-time visibility into trading limits and instrument availability. By leveraging microservices and real-time updates, the system ensures traders can act quickly and efficiently while minimizing financial risks.