# PulseWatch SaaS - Current Build Audit

## Project Goal

PulseWatch is a SaaS uptime monitoring platform.

Users can:

* Register
* Login
* Create monitors
* Track website/API uptime
* View monitoring history
* View analytics

---

# Architecture

User
↓
Render (Backend)
↓
Express API
↓
MongoDB Atlas
↓
Scheduled Monitor Worker
↓
Analytics Engine

---

# Infrastructure

## GitHub

Repository hosted on GitHub.

Features:

* Source control
* Deployment source
* Version history

Status: Complete

---

## MongoDB Atlas

Database migrated from local MongoDB to Atlas.

Collections:

### Users

Stores:

* name
* email
* password hash

### Monitors

Stores:

* name
* url
* method
* expectedStatus
* interval
* userId

### CheckResults

Stores:

* monitorId
* statusCode
* responseTime
* isUp
* checkedAt

Status: Complete

---

## Render Deployment

Backend deployed publicly.

Live URL:

https://pulsewatch-backend-jl6s.onrender.com

Status: Complete

---

# Authentication Module

## Register

Endpoint:

POST /api/v1/auth/register

Features:

* User creation
* Password hashing

Status: Complete

---

## Login

Endpoint:

POST /api/v1/auth/login

Features:

* Password verification
* JWT generation

Status: Complete

---

## Protected Routes

Features:

* JWT verification
* User extraction

Status: Complete

---

# Monitor Module

## Create Monitor

Endpoint:

POST /api/v1/monitors

Status: Complete

---

## Get Monitors

Endpoint:

GET /api/v1/monitors

Status: Complete

---

## Update Monitor

Endpoint:

PATCH /api/v1/monitors/:id

Status: Complete

---

## Delete Monitor

Endpoint:

DELETE /api/v1/monitors/:id

Status: Complete

---

# Monitoring Engine

## Cron Scheduler

Runs every minute.

Implementation:

node-cron

Status: Complete

---

## Monitor Worker

Responsibilities:

* Fetch URL
* Measure response time
* Determine uptime
* Save result

Status: Complete

---

# Check Result Module

## Save Monitoring Results

Stores:

* status code
* response time
* uptime status

Status: Complete

---

## Results History

Endpoint:

GET /api/v1/monitors/:id/results

Returns:

* historical checks
* response times
* uptime records

Status: Complete

---

# Analytics Module

Endpoint:

GET /api/v1/monitors/:id/analytics

Calculates:

* uptime %
* average response time
* successful checks
* failed checks
* total checks

Status: Complete

---

# Proven Production Tests

## Authentication

Verified on Render.

Status: Passed

---

## Monitor Creation

Verified on Render.

Status: Passed

---

## Scheduled Checks

Verified on Render logs.

Status: Passed

---

## Result Persistence

Verified in Atlas.

Status: Passed

---

## Analytics

Verified on production.

Status: Passed

---

# Current SaaS Completion

Backend Core: 100%

Infrastructure: 100%

Monitoring Engine: 100%

Analytics: 100%

Deployment: 100%

Frontend: 0%

Alerts: 0%

Billing: 0%

Status Pages: 0%

Teams: 0%

Subscriptions: 0%

---

# Next Milestone

Frontend Dashboard

Pages:

1. Login
2. Register
3. Dashboard
4. Create Monitor
5. Monitor Details
6. Analytics View

Goal:

Allow non-technical users to use PulseWatch without curl commands.

After frontend:

1. Telegram alerts
2. Email alerts
3. Public status pages
4. Stripe billing
5. Subscription plans
