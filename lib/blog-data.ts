export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'how-to-measure-roi-ai-automations-30-days',
    title: 'How to Measure ROI from AI Automations in 30 Days',
    author: 'Hadi Alizadeh',
    date: '2024-01-22',
    readTime: '8 min read',
    category: 'Strategy',
    excerpt: 'To build confidence in AI automations, measure impact. Here\'s how: baseline processes, define a success metric (hours saved, reduced response time), and track results over 30 days — no advanced analytics needed.',
    content: `Many AI projects fail not because the technology doesn't work, but because impact isn't measured. Use a 3-step framework: (1) Benchmark current workflow time and error rate; (2) Choose a clear ROI metric (e.g., documents processed per hour, first-response time, error reduction); (3) Compare pre- vs. post-launch data over 30 days. Deloitte found that 69% of companies report ROI in IT ops and 74% in customer service from automation.

## The 30-Day Measurement Framework

Most teams struggle to measure automation ROI because they overcomplicate it. You don't need complex analytics or data science—just three simple metrics tracked consistently.

### Metric 1: Time Saved Per Task

**Before automation:** Track how long your current process takes from start to finish. Include all the hidden time—waiting for approvals, switching between systems, manual data entry.

**After automation:** Measure the same process with automation. Don't forget to include the time for any human review or approval steps.

**Formula:** (Old Time - New Time) × Volume Per Week = Hours Saved

### Metric 2: Response Time Improvement

**Before:** How long from initial request to first meaningful response?

**After:** Same measurement with automation handling the initial processing.

This metric is especially powerful for customer-facing processes like lead qualification or support tickets.

### Metric 3: Error Rate Reduction

**Before:** Track errors that require rework—wrong data entry, missed steps, compliance issues.

**After:** Monitor the same error types with automation plus human oversight.

## Simple Tracking Template

Create a simple spreadsheet with these columns:
- Date
- Process Name
- Volume (how many items processed)
- Time Per Item (minutes)
- Errors Found
- Notes

Track for 2 weeks before automation, then 4 weeks after go-live.

## Real Example: Logistics RFQ Processing

**Before Automation:**
- Average time per RFQ: 2.5 hours
- Weekly volume: 40 RFQs
- Total weekly time: 100 hours
- Error rate: 15% (pricing mistakes, missed requirements)

**After Automation:**
- Average time per RFQ: 20 minutes (including human review)
- Weekly volume: 40 RFQs
- Total weekly time: 13.3 hours
- Error rate: 3% (mostly edge cases)

**Result:** 86.7 hours saved per week, 80% error reduction.

## The ROI Calculator

**Weekly Time Saved:** 86.7 hours
**Hourly Rate:** $50 (loaded cost)
**Weekly Value:** $4,335
**Annual Value:** $225,420

**Investment:** $12,900 (Pro package)
**Payback Period:** 3 weeks
**Annual ROI:** 1,647%

## Common Measurement Mistakes

**Mistake 1:** Only measuring the "happy path"
Include edge cases, errors, and exception handling in your measurements.

**Mistake 2:** Forgetting about setup time
Include the time to configure, test, and train your team.

**Mistake 3:** Not tracking quality
Speed without quality is worthless. Always measure both.

## Getting Started

1. Pick one process to automate first
2. Track baseline metrics for 2 weeks
3. Implement automation
4. Track the same metrics for 4 weeks
5. Calculate ROI and decide on next process

The key is starting simple and building confidence through measurement.`
  },
  {
    id: 'inbox-to-system-7-day-build-plan',
    title: 'From Inbox to System of Record — A 7-Day Build Plan',
    author: 'Engineering Team',
    date: '2024-01-20',
    readTime: '12 min read',
    category: 'Engineering',
    excerpt: 'With clear scope and smart tooling, you can turn manual workflows into production automation in just one week.',
    content: `Automation doesn't need months of runway. Here's our 7-day blueprint: Day 1–2: scope kickoff and access setup; Day 3–4: flow build + approvals + guardrails; Day 5: monitoring and refinement; Day 6: UAT + error handling; Day 7: production handoff + training. Many organizations see visible benefits within this tight timeframe, aligning with industry case studies showing immediate ROI from workflow automation.

## Day 1-2: Scope Kickoff and Access Setup

**Day 1 Morning:** Requirements gathering session with stakeholders
- Map current workflow step-by-step
- Identify pain points and bottlenecks
- Define success metrics (time saved, accuracy, response time)
- Document business rules and edge cases

**Day 1 Afternoon:** Technical architecture design
- System integration points identified
- Data flow mapping
- Security and compliance requirements
- Error handling and rollback procedures

**Day 2:** Access setup and environment preparation
- API access and credentials configured
- Development environment setup
- Initial system connections tested
- Security protocols implemented

## Day 3-4: Flow Build + Approvals + Guardrails

**Day 3:** Core workflow development
- Implement main automation logic
- Build primary system integrations
- Create human approval checkpoints
- Add basic error handling

**Day 4:** Guardrails and safety measures
- Implement retry mechanisms with exponential backoff
- Set up dead letter queues for failed items
- Add rate limiting and resource controls
- Create audit logging and tracing

## Day 5: Monitoring and Refinement

**Focus:** Observability and performance optimization
- Set up comprehensive monitoring dashboards
- Implement alerting for critical failures
- Performance testing and optimization
- Quality metrics and evaluation setup

## Day 6: UAT + Error Handling

**User Acceptance Testing:**
- End-to-end workflow testing with real data
- Edge case handling verification
- User feedback incorporation
- Documentation and training material creation

## Day 7: Production Handoff + Training

**Final day activities:**
- Production deployment with monitoring
- Team training and knowledge transfer
- Complete source code handover
- Support channel setup and escalation procedures

## Why 7 Days Works

**Tight Scope:** We focus on one core workflow, not everything at once.

**Real Data:** We test with your actual data from Day 3 onwards.

**Daily Updates:** You see progress every day with screenshots and demos.

**Production Focus:** We build for production from Day 1, not prototypes.

Seven days to prove value. Then we scale from there.`
  },
  {
    id: 'five-guardrails-ai-workflow-needs',
    title: 'Five Guardrails Every AI Workflow Needs',
    author: 'Engineering Team',
    date: '2024-01-18',
    readTime: '10 min read',
    category: 'Engineering',
    excerpt: 'Reliable automation is engineered, not accidental. Here are the 5 guardrails that keep automations safe, auditable, and operational.',
    content: `Without safeguards, automations can break silently. Trustworthy AI workflows include: retries and dead-letter handling for failures, human-in-loop approvals for critical decisions, observability (traces + metrics) to spot drift, audit logs for accountability, and rate limits for resource control. Together, these guardrails ensure automations don't just work today — they keep working tomorrow.

## Guardrail 1: Human Approval Workflows

**The Problem:** AI makes mistakes, especially with high-stakes decisions like financial transactions or customer communications.

**The Solution:** Strategic approval checkpoints for critical actions.

**Implementation:**
- Flag high-value transactions for human review
- Route sensitive customer communications through approval
- Set confidence thresholds for automatic vs. manual processing
- Create escalation paths for edge cases

**Example:** In our logistics automation, quotes over $50k or with unusual terms automatically route to a senior operations manager for approval before sending.

## Guardrail 2: Exponential Backoff & Retries

**The Problem:** External systems fail, APIs go down, and networks have hiccups.

**The Solution:** Intelligent retry mechanisms that don't overwhelm failing systems.

**Implementation:**
- Start with 1-second delay, double each retry
- Maximum of 5 retry attempts
- Different retry strategies for different error types
- Circuit breaker pattern for persistent failures

## Guardrail 3: Dead Letter Queues (DLQs)

**The Problem:** Some items will always fail processing—corrupted files, invalid data, system outages.

**The Solution:** Separate queue for failed items with manual review process.

**Implementation:**
- Automatic routing of failed items to DLQ
- Daily review process for DLQ items
- Root cause analysis and pattern detection
- Process improvements based on failure patterns

## Guardrail 4: Full Observability

**The Problem:** When automation fails, you need to understand why—fast.

**The Solution:** Comprehensive logging and tracing of every decision and action.

**Implementation:**
- Trace every workflow execution end-to-end
- Log all AI decisions with confidence scores
- Track performance metrics and costs
- Create dashboards for real-time monitoring

## Guardrail 5: Rate Limiting & Resource Protection

**The Problem:** Runaway automation can overwhelm systems and rack up costs.

**The Solution:** Built-in rate limits and resource controls.

**Implementation:**
- API rate limiting to respect external system limits
- Cost budgets for AI model usage
- Concurrency limits for parallel processing
- Resource monitoring and automatic scaling

## The Engineering Mindset

These guardrails aren't just technical features—they're a mindset:

**Assume failure will happen** and design for it.
**Make everything observable** so you can debug quickly.
**Protect your systems** from runaway automation.
**Keep humans in the loop** for critical decisions.
**Learn from failures** to improve the system.

Automation without guardrails is just expensive chaos. With proper engineering, it becomes a reliable business asset.`
  },
  {
    id: 'how-to-measure-ai-automation-roi',
    title: 'How to Measure AI Automation ROI in 30 Days',
    author: 'Hadi Alizadeh',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strategy',
    excerpt: 'A practical framework and simple calculator for tracking automation value without complex data science.',
    content: `The fastest way to build confidence in automation is to measure it. In this post we share a simple 30‑day framework that any team can use to track hours saved and response times—no data science required.

## The 30-Day Measurement Framework

Most teams struggle to measure automation ROI because they overcomplicate it. You don't need complex analytics or data science—just three simple metrics tracked consistently.

### Metric 1: Time Saved Per Task

**Before automation:** Track how long your current process takes from start to finish. Include all the hidden time—waiting for approvals, switching between systems, manual data entry.

**After automation:** Measure the same process with automation. Don't forget to include the time for any human review or approval steps.

**Formula:** (Old Time - New Time) × Volume Per Week = Hours Saved

### Metric 2: Response Time Improvement

**Before:** How long from initial request to first meaningful response?

**After:** Same measurement with automation handling the initial processing.

This metric is especially powerful for customer-facing processes like lead qualification or support tickets.

### Metric 3: Error Rate Reduction

**Before:** Track errors that require rework—wrong data entry, missed steps, compliance issues.

**After:** Monitor the same error types with automation plus human oversight.

## Simple Tracking Template

Create a simple spreadsheet with these columns:
- Date
- Process Name
- Volume (how many items processed)
- Time Per Item (minutes)
- Errors Found
- Notes

Track for 2 weeks before automation, then 4 weeks after go-live.

## Real Example: Logistics RFQ Processing

**Before Automation:**
- Average time per RFQ: 2.5 hours
- Weekly volume: 40 RFQs
- Total weekly time: 100 hours
- Error rate: 15% (pricing mistakes, missed requirements)

**After Automation:**
- Average time per RFQ: 20 minutes (including human review)
- Weekly volume: 40 RFQs
- Total weekly time: 13.3 hours
- Error rate: 3% (mostly edge cases)

**Result:** 86.7 hours saved per week, 80% error reduction.

## The ROI Calculator

**Weekly Time Saved:** 86.7 hours
**Hourly Rate:** $50 (loaded cost)
**Weekly Value:** $4,335
**Annual Value:** $225,420

**Investment:** $12,900 (Pro package)
**Payback Period:** 3 weeks
**Annual ROI:** 1,647%

## Common Measurement Mistakes

**Mistake 1:** Only measuring the "happy path"
Include edge cases, errors, and exception handling in your measurements.

**Mistake 2:** Forgetting about setup time
Include the time to configure, test, and train your team.

**Mistake 3:** Not tracking quality
Speed without quality is worthless. Always measure both.

## Getting Started

1. Pick one process to automate first
2. Track baseline metrics for 2 weeks
3. Implement automation
4. Track the same metrics for 4 weeks
5. Calculate ROI and decide on next process

The key is starting simple and building confidence through measurement.`
  },
  {
    id: 'from-inbox-to-system-7-day-build',
    title: 'From Inbox to System of Record—A 7‑Day Build Plan',
    author: 'Engineering Team',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Engineering',
    excerpt: 'What happens each day from scope to cutover—our proven methodology for delivering production-ready automation.',
    content: `Seven days is enough to prove value when scope is tight. Here's how we go from access to approvals to production in one week.

## Day 1: Requirements & Architecture

**Morning:** Requirements gathering session with stakeholders
- Map current workflow step-by-step
- Identify pain points and bottlenecks
- Define success metrics (time saved, accuracy, response time)
- Document business rules and edge cases

**Afternoon:** Technical architecture design
- System integration points identified
- Data flow mapping
- Security and compliance requirements
- Error handling and rollback procedures

**Deliverables:**
- Technical specification document
- System architecture diagram
- Success criteria definition
- Risk assessment

## Day 2-3: Core Development

**Focus:** Building the automation engine and integrations

**Day 2:**
- Set up development environment
- Implement core workflow orchestration
- Build primary system integrations (CRM, email, etc.)
- Create basic error handling

**Day 3:**
- Implement business logic and decision rules
- Add human approval workflows where needed
- Build notification and alerting systems
- Create basic monitoring and logging

**Deliverables:**
- Working automation prototype
- System integrations functional
- Basic monitoring in place

## Day 4-5: Testing & Refinement

**Day 4:** Comprehensive testing with real data
- End-to-end workflow testing
- Edge case handling verification
- Performance optimization
- Security testing

**Day 5:** Refinement and polish
- User feedback incorporation
- Performance tuning
- Documentation creation
- Training material preparation

**Deliverables:**
- Fully tested automation system
- Performance benchmarks
- User documentation
- Training materials

## Day 6: Deployment & Training

**Morning:** Production deployment
- Deploy to production environment
- Configure monitoring and alerting
- Set up backup and recovery procedures
- Verify all integrations

**Afternoon:** Team training
- Hands-on training session
- Troubleshooting procedures
- Escalation protocols
- Success metric tracking setup

**Deliverables:**
- Live production system
- Trained team
- Monitoring dashboard
- Support procedures

## Day 7: Handover & Support Setup

**Final day activities:**
- Complete source code handover
- Documentation review and finalization
- Support channel setup
- 30-day success tracking plan
- Rollback procedures documentation

**Deliverables:**
- Complete source code ownership
- Comprehensive documentation
- Support channel access
- Success tracking framework

## Why 7 Days Works

**Tight Scope:** We focus on one core workflow, not everything at once.

**Real Data:** We test with your actual data from Day 3 onwards.

**Daily Updates:** You see progress every day with screenshots and demos.

**Production Focus:** We build for production from Day 1, not prototypes.

## What Happens After Day 7

**Week 2-4:** Monitoring and optimization
- Track success metrics daily
- Fine-tune based on real usage
- Handle edge cases as they appear
- Optimize performance

**30-Day Review:** Value assessment
- Compare baseline vs. automated metrics
- Calculate actual ROI
- Plan next automation workflow
- Extend or modify as needed

## Common Questions

**Q: What if requirements change during the 7 days?**
A: Minor adjustments are included. Major scope changes extend the timeline with transparent pricing.

**Q: Do you work weekends?**
A: Business days only, but we can accommodate urgent timelines with advance notice.

**Q: What if we find issues after Day 7?**
A: 30-90 day support is included (plan dependent). We fix issues and optimize based on real usage.

## The Secret: Preparation

The reason we can deliver in 7 days is preparation:
- Proven automation patterns for each industry
- Pre-built integration templates
- Standardized security and monitoring
- Experienced team with defined processes

Seven days to prove value. Then we scale from there.`
  },
  {
    id: 'five-guardrails-ai-workflow',
    title: 'Five Guardrails Every AI Workflow Needs',
    author: 'Engineering Team',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Engineering',
    excerpt: 'Approvals, retries, DLQs, observability, and rate limits—the engineering patterns that make AI automation safe and reliable.',
    content: `Reliable automation isn't magic—it's engineering. We cover five guardrails that make automations safe, auditable, and easy to operate.

## Guardrail 1: Human Approval Workflows

**The Problem:** AI makes mistakes, especially with high-stakes decisions like financial transactions or customer communications.

**The Solution:** Strategic approval checkpoints for critical actions.

**Implementation:**
- Flag high-value transactions for human review
- Route sensitive customer communications through approval
- Set confidence thresholds for automatic vs. manual processing
- Create escalation paths for edge cases

**Example:** In our logistics automation, quotes over $50k or with unusual terms automatically route to a senior operations manager for approval before sending.

## Guardrail 2: Exponential Backoff & Retries

**The Problem:** External systems fail, APIs go down, and networks have hiccups.

**The Solution:** Intelligent retry mechanisms that don't overwhelm failing systems.

**Implementation:**
- Start with 1-second delay, double each retry
- Maximum of 5 retry attempts
- Different retry strategies for different error types
- Circuit breaker pattern for persistent failures

**Example:** If a CRM API call fails, we retry after 1s, then 2s, then 4s, then 8s, then 16s before moving to dead letter queue.

## Guardrail 3: Dead Letter Queues (DLQs)

**The Problem:** Some items will always fail processing—corrupted files, invalid data, system outages.

**The Solution:** Separate queue for failed items with manual review process.

**Implementation:**
- Automatic routing of failed items to DLQ
- Daily review process for DLQ items
- Root cause analysis and pattern detection
- Process improvements based on failure patterns

**Example:** In document processing, files that can't be parsed go to DLQ for manual review. We analyze patterns monthly to improve our parsing logic.

## Guardrail 4: Full Observability

**The Problem:** When automation fails, you need to understand why—fast.

**The Solution:** Comprehensive logging and tracing of every decision and action.

**Implementation:**
- Trace every workflow execution end-to-end
- Log all AI decisions with confidence scores
- Track performance metrics and costs
- Create dashboards for real-time monitoring

**Tools We Use:**
- Langfuse for AI decision tracing
- OpenTelemetry for distributed tracing
- Custom dashboards for business metrics
- Automated alerting for anomalies

## Guardrail 5: Rate Limiting & Resource Protection

**The Problem:** Runaway automation can overwhelm systems and rack up costs.

**The Solution:** Built-in rate limits and resource controls.

**Implementation:**
- API rate limiting to respect external system limits
- Cost budgets for AI model usage
- Concurrency limits for parallel processing
- Resource monitoring and automatic scaling

**Example:** We limit our document processing to 100 concurrent operations and $500/day in AI costs, with automatic alerts at 80% thresholds.

## Putting It All Together

Here's how these guardrails work together in a real workflow:

1. **Document arrives** → Rate limiter checks capacity
2. **Processing starts** → Full tracing begins
3. **AI analysis** → Confidence score calculated
4. **Decision point** → High-stakes items route to approval
5. **Action execution** → Retries with exponential backoff
6. **Failure handling** → Failed items go to DLQ
7. **Monitoring** → All decisions logged and tracked

## The Engineering Mindset

These guardrails aren't just technical features—they're a mindset:

**Assume failure will happen** and design for it.
**Make everything observable** so you can debug quickly.
**Protect your systems** from runaway automation.
**Keep humans in the loop** for critical decisions.
**Learn from failures** to improve the system.

## Implementation Checklist

For every automation workflow, verify:

- [ ] Approval workflows for high-stakes decisions
- [ ] Retry logic with exponential backoff
- [ ] Dead letter queue for failed items
- [ ] End-to-end tracing and logging
- [ ] Rate limits and cost controls
- [ ] Monitoring dashboards and alerts
- [ ] Rollback procedures documented
- [ ] Escalation paths defined

## The Result

With these guardrails in place, your automation becomes:
- **Safe:** Critical decisions get human oversight
- **Reliable:** Failures are handled gracefully
- **Observable:** You can debug issues quickly
- **Scalable:** Resource limits prevent runaway costs
- **Auditable:** Every decision is logged and traceable

Automation without guardrails is just expensive chaos. With proper engineering, it becomes a reliable business asset.`
  },
  {
    id: 'why-ai-automations-fail',
    title: 'Why Most AI Automations Fail in Production',
    author: 'Hadi Alizadeh',
    date: '2023-12-20',
    readTime: '6 min read',
    category: 'Strategy',
    excerpt: 'The hidden reasons why 80% of AI automation projects never make it to production, and how to avoid these pitfalls.',
    content: `Most AI automation projects fail not because of the AI, but because of everything around it. Here's what we've learned from 50+ production deployments.

## The Three Failure Modes

### 1. The Prototype Trap
Teams build impressive demos that work 80% of the time, then spend months trying to handle the remaining 20% of edge cases.

**Solution:** Start with production requirements from day one. Build for the worst case, not the happy path.

### 2. Integration Hell
The AI works perfectly, but connecting it to existing systems becomes a months-long project with endless edge cases.

**Solution:** Map all integration points upfront. Use proven patterns and existing APIs wherever possible.

### 3. The Accuracy Obsession
Teams spend months trying to get AI accuracy from 85% to 95%, when human oversight could handle the gap immediately.

**Solution:** Design for human-AI collaboration from the start. Perfect accuracy isn't required if you have good approval workflows.

## What Works Instead

**Start Small:** One workflow, one clear success metric, one month to prove value.

**Build for Production:** Error handling, monitoring, and rollback procedures from day one.

**Measure Everything:** Track time saved, accuracy, and user satisfaction from the first day.

**Plan for Failure:** Assume things will break and design accordingly.

The companies that succeed with AI automation treat it as an engineering problem, not a research project.`
  },
  {
    id: 'ai-observability-langfuse-opentelemetry',
    title: 'Observability for AI Systems: Langfuse + OpenTelemetry',
    author: 'Engineering Team',
    date: '2023-12-15',
    readTime: '15 min read',
    category: 'Engineering',
    excerpt: 'How we implement full observability for AI automation systems using Langfuse for AI decisions and OpenTelemetry for distributed tracing.',
    content: `When AI automation fails in production, you need to understand why—fast. Here's how we implement comprehensive observability for AI systems.

## The Observability Stack

### Langfuse for AI Decision Tracing
- Every LLM call logged with input, output, and metadata
- Token usage and cost tracking
- Quality scores and evaluation metrics
- User feedback integration

### OpenTelemetry for Distributed Tracing
- End-to-end request tracing across services
- Performance monitoring and bottleneck identification
- Error tracking and root cause analysis
- Custom business metrics

### Custom Dashboards for Business Metrics
- Workflow success rates
- Processing times and SLA compliance
- Cost per operation
- User satisfaction scores

## Implementation Patterns

### 1. Trace Every AI Decision

\`\`\`python
from langfuse import Langfuse

langfuse = Langfuse()

def process_document(document):
    trace = langfuse.trace(name="document_processing")
    
    # Extract key information
    extraction = trace.span(
        name="information_extraction",
        input={"document_id": document.id},
        metadata={"model": "gpt-4", "temperature": 0.1}
    )
    
    result = llm.extract(document.content)
    
    extraction.end(
        output=result,
        usage={"tokens": 1500, "cost": 0.045}
    )
    
    return result
\`\`\`

### 2. Business Metric Tracking

\`\`\`python
from opentelemetry import metrics

meter = metrics.get_meter(__name__)
processing_time = meter.create_histogram("workflow_processing_time")
success_rate = meter.create_counter("workflow_success_total")

def execute_workflow(workflow_id, data):
    start_time = time.time()
    
    try:
        result = process_workflow(workflow_id, data)
        success_rate.add(1, {"workflow": workflow_id, "status": "success"})
        return result
    except Exception as e:
        success_rate.add(1, {"workflow": workflow_id, "status": "error"})
        raise
    finally:
        duration = time.time() - start_time
        processing_time.record(duration, {"workflow": workflow_id})
\`\`\`

## Alerting Strategy

### Critical Alerts (Page immediately)
- Workflow failure rate > 5%
- Processing time > 2x baseline
- Cost > daily budget
- Security violations

### Warning Alerts (Review within 4 hours)
- Quality score drops below threshold
- Unusual error patterns
- Performance degradation
- High retry rates

## Dashboard Design

### Executive Dashboard
- Daily automation value (time/cost saved)
- Success rates by workflow
- Cost trends
- User satisfaction scores

### Operations Dashboard
- Real-time processing status
- Error rates and types
- Performance metrics
- Queue depths and processing times

### Engineering Dashboard
- Detailed error logs and stack traces
- Performance profiling data
- Cost breakdown by component
- System health metrics

The key is having the right information at the right level for each audience.`
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(id: string): BlogPost | null {
  return blogPosts.find(post => post.id === id) || null;
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}