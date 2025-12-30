# Context Engineering - My Aibud WhatsApp System

## Product Overview

"My Aibud" is a subscription-based AI Real Estate Assistant that automates consistent prospecting via WhatsApp, preventing leads from going cold. The system provides AI-powered conversation management for real estate agents to qualify leads, collect property photos, and schedule appointments through WhatsApp interactions.

## Core Business Logic

### Poll-Based Lead Qualification
The system uses WhatsApp polls as the primary interaction mechanism to frictionlessly classify leads:

**Poll Options & Agent Behaviors:**
1. **"I'm Interested"** → Tag: Hot Lead → Agent Goal: Qualify & Book appointment
2. **"I'd Like to Sell/Rent"** → Tag: Seller → Agent Goal: Request property photos for Vision AI analysis
3. **"Have an Agent"** → Tag: Dead → Agent Goal: Gentle exit
4. **"Schedule Call"** → Tag: Priority → Agent Goal: Provide calendar link
5. **"Not Interested"** → Tag: Archive → Agent Goal: Stop messaging

### SaaS Subscription Model
Strict credit-based limits per WhatsApp "Seat" (Instance):

- **Starter (R399/month):** 400 credits
- **Pro (R799/month):** 1,200 credits
- **Business (R1,999/month):** 5,000 credits
- **Enterprise:** Unlimited (Custom pricing)

*Credit Definition:* One credit = One AI interaction (processing inbound message + generating outbound reply)

## User Roles

- **Tenant:** Real estate agent paying for the service (the "user")
- **Contact:** Homeowner/buyer being targeted (the "lead")

## Technical Architecture

### Tech Stack
- **Framework:** Next.js 15 (App Router, Server Actions)
- **Database:** PostgreSQL via Drizzle ORM
- **Queue/Orchestration:** Inngest (durability & message flow)
- **AI:** Google Gemini Pro 1.5 / Flash 2.0
- **WhatsApp:** Evolution API
- **Auth:** Clerk
- **UI:** Shadcn/ui components

### Critical Business Rules

#### Credit Enforcement (MANDATORY)
1. **EVERY** outbound message operation must call `checkCredits(userId)` first
2. **NEVER** send external messages when credits are exhausted
3. **ONLY** decrement `subscription.credits_used` after confirmed successful delivery (`status: sent`)
4. **ALWAYS** send upgrade prompt internally when `credits_used >= credits_limit`

#### Agent Flow Patterns
Built in `src/inngest/functions` following pattern:
1. **Trigger** → Context Load
2. **Credit Check** → AI Think
3. **Action** → Credit Decrement

### Inngest Agent Functions

#### 1. Poll Manager (Logic Router)
**Trigger:** Webhook `message.upsert` where `type === 'poll_update'`

**Flow:**
1. Parse `event.vote` selection
2. Update `contacts.status` in database
3. Route based on selection:
   - **"Sell/Rent"**: Trigger seller intake → Request property photos
   - **"Interested"**: Trigger buyer qualification → Ask budget questions
   - **"Schedule Call"**: Send tenant notification → Provide calendar link

#### 2. Vision Estimator ("Nano Banana")
**Trigger:** Webhook `message.upsert` where `type === 'image'`

**Flow:**
1. Verify contact status is "seller"
2. Download image via Evolution API
3. **Gemini Vision Analysis:**
   - Identify room type
   - List positive features (granite counters, hardwood floors)
   - List negative features (clutter, dated fixtures)
   - Estimate "Vibe Quality" (1-10 scale)
4. Generate contextual response based on analysis

#### 3. Billing Guard (Middleware)
**Implementation:** Wraps every agent function

**Logic:**
- Pre-check `subscription_usage` table
- Block execution if credits exhausted
- Send tenant notification: *"Heads up, you hit your 400 message limit. Lead [Phone] is waiting. Upgrade to Pro to reply."*

## Data Flow Architecture

### Incoming Message Processing
```
WhatsApp Message → Evolution API → Webhook → Database → Inngest Event → Agent Processing → AI Response → Evolution API → WhatsApp Reply
```

### Poll Response Flow
```
Poll Vote → Webhook → Status Update → Agent Routing → Contextual Response → Credit Deduction
```

### Image Analysis Flow
```
Property Photo → Webhook → Vision Agent → Gemini Analysis → Valuation Response → Credit Deduction
```

## Security & Reliability

### Security Layers
1. **Rate Limiting** (Upstash Redis)
2. **Authentication** (Clerk sessions)
3. **Input Validation** (Zod schemas)
4. **Idempotency** (External message IDs)

### Reliability Features
- **Durable Execution:** Inngest event persistence & automatic retries
- **Dead Letter Queue:** Failed jobs logged to `failed_jobs` table
- **Idempotency:** Duplicate webhook detection via external message IDs
- **Error Handling:** NEVER swallow credit system errors

## Development Guidelines

### Code Patterns
- **Agents:** Logic in `src/inngest/functions` (Trigger → Context → Credit Check → AI → Action)
- **Tools:** Defined in `src/lib/tools` using Zod schemas
- **Polls:** Use Evolution API `sendPoll` with specific payload structure
- **Error Handling:** Credit logic failures halt workflow execution

### Vibe Standards
- Production-ready, typed TypeScript code
- Minimal styling boilerplate, focus on logic performance
- Shadcn/ui components for dashboard interface

## Environment Requirements

Required environment variables:
```
DATABASE_URL=postgresql://...
EVOLUTION_API_URL=https://...
EVOLUTION_API_KEY=...
EVOLUTION_WEBHOOK_SECRET=...
INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...
GOOGLE_GENERATIVE_AI_API_KEY=...
CLERK_SECRET_KEY=...
```

## Database Schema (Key Tables)

- `tenants`: SaaS customers with subscription tiers
- `subscription_usage`: Monthly credit tracking per tenant
- `instances`: WhatsApp instances per tenant
- `contacts`: Leads/contacts with status tracking
- `interactions`: Complete message history
- `failed_jobs`: Dead letter queue for debugging

## Monitoring & Observability

- **Logs:** Pino structured logging
- **Errors:** Sentry error tracking
- **Jobs:** Inngest dashboard monitoring
- **Metrics:** Health checks, webhook latency, AI response times, credit usage

---

*This context document consolidates all product, technical, and business logic requirements for the My Aibud WhatsApp automation system.*
