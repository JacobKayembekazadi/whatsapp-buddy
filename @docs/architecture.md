# System Architecture - My Aibud WhatsApp System

## High-Level Architecture Overview

My Aibud is built as a serverless-first SaaS application using modern web technologies and event-driven architecture. The system processes WhatsApp messages through AI-powered agents while enforcing strict credit-based subscription limits.

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   WhatsApp      │    │  Evolution API  │    │   Vercel Edge   │
│   Messages      │───▶│   Webhooks       │───▶│   Functions     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                                                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Inngest       │    │   PostgreSQL    │    │   Google AI     │
│   Orchestrator  │◀──▶│   Database      │    │   (Gemini)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                                                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   WhatsApp      │    │   Real-time     │    │   Admin         │
│   Responses     │◀───│   Dashboard     │    │   Interface     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Component Architecture

### 1. Frontend Layer (Next.js 15)

#### Admin Dashboard (`my-aibud/`)
- **Framework:** Next.js 15 with App Router
- **Authentication:** Clerk integration
- **UI Components:** Shadcn/ui + Tailwind CSS
- **State Management:** React Server Components + Client State

**Key Features:**
- Instance management (WhatsApp connections)
- Contact overview with status tracking
- Real-time usage analytics and billing
- Message history and conversation logs

#### File Structure:
```
my-aibud/src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   ├── dashboard/         # Admin interface
│   └── globals.css
├── components/            # Reusable UI components
├── db/                   # Database schema & client
├── inngest/              # Background job definitions
└── lib/                  # Utility functions
```

### 2. Backend Processing Layer (Inngest)

#### Event-Driven Architecture
The system uses Inngest for all background processing to ensure durability and reliability:

**Core Agent Functions:**
1. **Poll Manager** - Routes poll responses to appropriate flows
2. **Vision Estimator** - Processes property photos with AI analysis
3. **Classifier** - Handles general message classification
4. **DLQ Handler** - Manages failed job processing

#### Agent Flow Pattern:
```
Trigger Event → Context Loading → Credit Check → AI Processing → Action → Credit Deduction
```

**Event Types:**
- `message.upsert` - New WhatsApp messages
- `poll.update` - Poll response selections
- `webhook.failed` - Error handling events

### 3. Data Layer (PostgreSQL + Drizzle)

#### Database Schema:
```sql
-- Core Tables
tenants              -- SaaS customers
subscription_usage   -- Monthly credit tracking
instances           -- WhatsApp business instances
contacts            -- Leads with status tracking
interactions        -- Complete message history
failed_jobs         -- Dead letter queue
```

#### Data Flow:
- **Real-time:** WhatsApp messages → Webhooks → Inngest → Database
- **Analytics:** Dashboard queries → Cached results → UI updates
- **Billing:** Usage aggregation → Credit calculations → Billing events

### 4. External Integrations

#### WhatsApp Integration (Evolution API)
- **Purpose:** WhatsApp Business API interface
- **Features:**
  - QR code authentication
  - Webhook message delivery
  - Poll message sending
  - Media file handling

#### AI Services (Google Gemini)
- **Vision AI:** Property photo analysis and valuation
- **Text Generation:** Contextual conversation responses
- **Image Processing:** Room type identification, feature analysis

### 5. Infrastructure Layer

#### Hosting & Deployment:
- **Frontend:** Vercel (automatic scaling, CDN)
- **Database:** Supabase PostgreSQL (managed)
- **Queue:** Inngest Cloud (managed event processing)
- **File Storage:** Vercel Blob (media files)

#### Security Layers:
```
Rate Limiting (Upstash Redis)
    ↓
Authentication (Clerk JWT)
    ↓
Input Validation (Zod)
    ↓
Credit System (Business Logic)
    ↓
Database Operations
```

## Message Processing Flow

### Inbound Message Processing:
```
1. WhatsApp Message → Evolution API
2. Webhook POST → Vercel API Route
3. Message Validation → Inngest Event
4. Agent Selection → Context Loading
5. Credit Verification → AI Processing
6. Response Generation → Evolution API
7. WhatsApp Delivery → Status Update
```

### Poll Response Processing:
```
1. Poll Selection → Evolution API Webhook
2. Status Update → Database
3. Agent Routing → Flow Selection
4. Context-Aware Response → AI Generation
5. WhatsApp Reply → Credit Deduction
```

### Property Analysis Flow:
```
1. Photo Upload → Evolution API
2. Image Download → Vision AI Processing
3. Feature Analysis → Valuation Estimate
4. Contextual Response → WhatsApp Reply
5. Database Update → Credit Tracking
```

## Scalability Considerations

### Horizontal Scaling:
- **Serverless Functions:** Automatic scaling per request
- **Database:** Connection pooling with prepared statements
- **Queue:** Event-driven processing with concurrency limits

### Performance Optimization:
- **Caching:** Redis for session and rate limiting data
- **CDN:** Global edge network for static assets
- **Database:** Indexed queries with query optimization
- **AI:** Model selection based on complexity (Gemini Flash vs Pro)

## Reliability & Monitoring

### Error Handling:
- **Dead Letter Queue:** Failed events routed for manual review
- **Retry Logic:** Exponential backoff for transient failures
- **Circuit Breakers:** Automatic degradation during service issues

### Observability:
- **Logging:** Structured logging with Pino
- **Monitoring:** Sentry for error tracking
- **Metrics:** Custom dashboards for system health
- **Alerts:** Automated notifications for critical issues

## Security Architecture

### Defense in Depth:
1. **Network:** TLS 1.3, CORS policies, rate limiting
2. **Authentication:** Clerk JWT with session management
3. **Authorization:** Tenant isolation, RBAC
4. **Data:** Encrypted at rest and in transit
5. **Application:** Input validation, SQL injection prevention

### Critical Security Controls:
- **Credit System:** Prevents abuse through usage limits
- **Webhook Verification:** HMAC signature validation
- **API Key Management:** Environment variable rotation
- **Audit Logging:** All security events tracked

## Deployment Strategy

### Environment Separation:
- **Development:** Local development with hot reload
- **Staging:** Automated deployment for testing
- **Production:** Zero-downtime deployments with rollbacks

### CI/CD Pipeline:
```
GitHub Push → Automated Tests → Security Scan → Build → Deploy
```

### Rollback Strategy:
- **Immediate Rollback:** Database migrations reversible
- **Feature Flags:** Gradual rollout with toggle switches
- **Monitoring:** Real-time performance tracking

---

*This architecture document provides the technical foundation for the My Aibud WhatsApp automation system, ensuring scalability, reliability, and security.*
