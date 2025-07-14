# Pharmacy E-Commerce Platform – Middleware (BFF) Feature Prompts

## API Gateway & Security

**User Story:**
_As a platform, I want a secure, centralized API gateway that validates users and proxies requests to microservices._

- Express-based BFF Middleware (TypeScript)
- Validate JWT on all incoming requests; add user role to request object
- Forward authenticated requests to microservices
- Middleware: rateLimiter, corsConfig, logger, errorHandler
- Proxy routes: `/api/user/*` → `http://user-service:3001/`
- Centralized logging for response times and errors 