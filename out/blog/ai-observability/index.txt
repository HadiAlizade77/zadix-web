2:I[9372,["639","static/chunks/639-55b885a5a8680509.js","470","static/chunks/470-105807314723649b.js","308","static/chunks/app/blog/%5Bslug%5D/page-dc00b739dae6c840.js"],"default"]
3:I[6411,["639","static/chunks/639-55b885a5a8680509.js","470","static/chunks/470-105807314723649b.js","308","static/chunks/app/blog/%5Bslug%5D/page-dc00b739dae6c840.js"],"default"]
5:I[2972,["639","static/chunks/639-55b885a5a8680509.js","470","static/chunks/470-105807314723649b.js","308","static/chunks/app/blog/%5Bslug%5D/page-dc00b739dae6c840.js"],""]
6:I[4420,["639","static/chunks/639-55b885a5a8680509.js","470","static/chunks/470-105807314723649b.js","308","static/chunks/app/blog/%5Bslug%5D/page-dc00b739dae6c840.js"],"LanguageSwitcher"]
7:I[5126,["639","static/chunks/639-55b885a5a8680509.js","470","static/chunks/470-105807314723649b.js","308","static/chunks/app/blog/%5Bslug%5D/page-dc00b739dae6c840.js"],"default"]
8:I[4707,[],""]
a:I[6423,[],""]
4:T1fe3,# Observability for AI Systems: Langfuse + OpenTelemetry

Debugging AI systems in production is fundamentally different from debugging traditional software. When a web server returns a 500 error, you can trace through the code and find the bug. When an AI agent makes a wrong decision, the "bug" might be in the training data, the prompt, the business logic, or the integration layer.

At Zadix, we've built a comprehensive observability stack that gives us full visibility into our AI automation systems. Here's how we do it.

## The Observability Challenge

Traditional monitoring tools aren't designed for AI systems. They can tell you if your API is responding, but they can't tell you:

- Why the AI chose option A instead of option B
- Which part of a multi-step reasoning chain failed
- How confident the AI was in its decision
- Whether the business rules were applied correctly
- What the human approval rate is for different decision types

## Our Observability Stack

### Langfuse for AI-Specific Monitoring
Langfuse is purpose-built for LLM applications and gives us:

**Trace Visualization**: See the complete flow of a multi-agent conversation, including all tool calls and decision points.

**Prompt Management**: Track prompt versions and their performance over time.

**Cost Tracking**: Monitor token usage and costs across different models and workflows.

**Quality Metrics**: Track accuracy, hallucination rates, and business outcome metrics.

### OpenTelemetry for System Monitoring
OpenTelemetry handles traditional system metrics:

**Distributed Tracing**: Track requests across microservices and external APIs.

**Performance Metrics**: Monitor latency, throughput, and error rates.

**Infrastructure Health**: CPU, memory, and network utilization.

**Custom Business Metrics**: Track domain-specific KPIs like processing volume and approval rates.

## Implementation Architecture

### 1. Instrumentation Strategy
We instrument at multiple levels:

```python
from langfuse import Langfuse
from opentelemetry import trace
import logging

# Initialize observability clients
langfuse = Langfuse()
tracer = trace.get_tracer(__name__)

@tracer.start_as_current_span("process_document")
def process_document(document_url: str):
    # Create Langfuse trace for AI-specific monitoring
    trace = langfuse.trace(
        name="document_processing",
        input={"document_url": document_url}
    )
    
    try:
        # Process document with full observability
        result = ai_agent.process(document_url)
        
        # Log the result
        trace.update(output=result)
        
        return result
    except Exception as e:
        # Capture errors in both systems
        trace.update(output={"error": str(e)})
        tracer.get_current_span().set_status(trace.Status(trace.StatusCode.ERROR))
        raise
```

### 2. Custom Metrics for AI Systems
We track AI-specific metrics that traditional monitoring misses:

```python
from opentelemetry import metrics

# Create custom metrics
meter = metrics.get_meter(__name__)

# AI decision confidence distribution
confidence_histogram = meter.create_histogram(
    name="ai_decision_confidence",
    description="Distribution of AI decision confidence scores"
)

# Human approval rates by decision type
approval_rate_counter = meter.create_counter(
    name="human_approvals_total",
    description="Number of decisions requiring human approval"
)

# Business outcome tracking
outcome_counter = meter.create_counter(
    name="business_outcomes_total",
    description="Business outcomes by type and success"
)
```

### 3. Correlation Between AI and System Metrics
The real power comes from correlating AI decisions with system performance:

```python
def track_decision_outcome(decision_id: str, confidence: float, outcome: str):
    # Record in Langfuse for AI analysis
    langfuse.score(
        trace_id=decision_id,
        name="business_outcome",
        value=1 if outcome == "success" else 0
    )
    
    # Record in OpenTelemetry for system analysis
    outcome_counter.add(
        1,
        attributes={
            "outcome": outcome,
            "confidence_bucket": get_confidence_bucket(confidence),
            "decision_type": get_decision_type(decision_id)
        }
    )
```

## Monitoring Dashboards

### AI Performance Dashboard
Built with Langfuse data:

- **Decision Accuracy**: Track how often AI decisions lead to successful outcomes
- **Confidence Calibration**: Are high-confidence decisions actually more accurate?
- **Prompt Performance**: Which prompt versions perform best?
- **Cost Analysis**: Token usage and costs by workflow type

### System Health Dashboard
Built with OpenTelemetry data:

- **Request Latency**: P50, P95, P99 latencies for all endpoints
- **Error Rates**: 4xx and 5xx errors by service
- **Throughput**: Requests per second and processing volume
- **Resource Utilization**: CPU, memory, and network usage

### Business Impact Dashboard
Combines both data sources:

- **Processing Volume**: Documents processed per hour/day
- **Human Intervention Rate**: Percentage of decisions requiring approval
- **End-to-End Latency**: Time from input to final action
- **Business Outcomes**: Revenue impact, cost savings, error reduction

## Alerting Strategy

### AI-Specific Alerts
- **Confidence Drop**: Alert when average confidence scores drop below threshold
- **Accuracy Degradation**: Alert when business outcome success rate declines
- **Cost Spike**: Alert when token usage exceeds budget thresholds
- **Hallucination Detection**: Alert when AI outputs fail validation rules

### System Alerts
- **High Error Rate**: Traditional 5xx error rate alerts
- **Latency Spikes**: P95 latency exceeding SLA thresholds
- **Resource Exhaustion**: CPU/memory usage alerts
- **External API Failures**: Alerts when integrated systems are down

## Debugging Workflows

### When Things Go Wrong
Our observability stack enables systematic debugging:

1. **Start with Business Impact**: What business outcome failed?
2. **Trace the Decision**: Use Langfuse to see the complete AI reasoning chain
3. **Check System Health**: Use OpenTelemetry to identify infrastructure issues
4. **Correlate Events**: Look for patterns across multiple traces
5. **Root Cause Analysis**: Determine if the issue is AI, system, or business logic

### Example Debug Session
A client reports that invoice processing accuracy dropped from 95% to 85%:

1. **Langfuse Analysis**: Shows confidence scores are normal, but certain invoice types are failing
2. **OpenTelemetry Analysis**: Shows increased latency from the OCR service
3. **Correlation**: Poor OCR quality is leading to incorrect data extraction
4. **Resolution**: Switch to backup OCR provider and improve preprocessing

## Best Practices

### 1. Instrument Early
Add observability from day one, not as an afterthought. It's much harder to debug systems you can't see.

### 2. Track Business Outcomes
Technical metrics are important, but business outcomes are what matter. Always connect AI decisions to business results.

### 3. Use Structured Logging
Consistent log formats make it easier to search and analyze across different services.

### 4. Monitor Costs
AI systems can get expensive quickly. Track token usage and costs to avoid surprises.

### 5. Build Runbooks
Document common failure patterns and their solutions. This reduces mean time to resolution.

## Conclusion

Observability for AI systems requires thinking beyond traditional monitoring. You need visibility into AI decision-making processes, not just system performance metrics.

By combining AI-specific tools like Langfuse with traditional observability platforms like OpenTelemetry, we can build systems that are not only reliable but also debuggable and improvable over time.

The investment in observability pays dividends when things go wrong—and in AI systems, things will go wrong. The question is whether you'll be able to understand why and fix it quickly.

Our comprehensive observability stack has reduced our mean time to resolution from hours to minutes and helped us maintain 99.9% uptime across all client deployments.9:["slug","ai-observability","d"]
0:["f7dg1UFTPJ6PjaLeyBs8F",[[["",{"children":["blog",{"children":[["slug","ai-observability","d"],{"children":["__PAGE__?{\"slug\":\"ai-observability\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["slug","ai-observability","d"],{"children":["__PAGE__",{},[["$L1",["$","div",null,{"className":"min-h-screen","children":[["$","$L2",null,{"locale":"en"}],["$","main",null,{"children":["$","$L3",null,{"post":{"id":"ai-observability","title":"Observability for AI Systems: Langfuse + OpenTelemetry","excerpt":"How we implement comprehensive monitoring and debugging for AI agents in production environments.","author":"DevOps Team","date":"2023-12-28","readTime":"12 min read","category":"Engineering","content":"$4"}}]}],["$","footer",null,{"className":"bg-dark-ink text-white","children":["$","div",null,{"className":"max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16","children":[["$","div",null,{"className":"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8","children":[["$","div",null,{"className":"lg:col-span-2","children":[["$","$L5",null,{"href":"/","className":"flex items-center space-x-3 mb-6","children":[["$","div",null,{"className":"w-10 h-10 bg-gradient-to-br from-accent-teal to-accent-blue rounded-xl flex items-center justify-center","children":["$","span",null,{"className":"text-white font-bold text-lg","children":"Z"}]}],["$","span",null,{"className":"text-2xl font-bold font-sora","children":"Zadix"}]]}],["$","p",null,{"className":"text-gray-300 mb-6 leading-relaxed","children":"We build AI automations that cut manual work 50–80% and respond in under a minute. Fixed scope, fixed timeline, 30-day value guarantee."}],["$","div",null,{"className":"space-y-3","children":[["$","div",null,{"className":"flex items-center space-x-3","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-map-pin h-5 w-5 text-accent-teal","children":[["$","path","2oe9fu",{"d":"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}],["$","circle","ilqhr7",{"cx":"12","cy":"10","r":"3"}],"$undefined"]}],["$","span",null,{"className":"text-gray-300","children":["Dubai",", ","UAE"]}]]}],["$","div",null,{"className":"flex items-center space-x-3","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-mail h-5 w-5 text-accent-teal","children":[["$","rect","18n3k1",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["$","path","1ocrg3",{"d":"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],"$undefined"]}],["$","a",null,{"href":"mailto:hello@zadix.ai","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"hello@zadix.ai"}]]}],["$","div",null,{"className":"flex items-center space-x-3","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-phone h-5 w-5 text-accent-teal","children":[["$","path","foiqr5",{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],"$undefined"]}],["$","a",null,{"href":"tel:+971 4 123 4567","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"+971 4 123 4567"}]]}],["$","div",null,{"className":"flex items-center space-x-3","children":[["$","svg",null,{"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-message-circle h-5 w-5 text-accent-teal","children":[["$","path","vv11sd",{"d":"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],"$undefined"]}],["$","a",null,{"href":"https://wa.me/971501234567","target":"_blank","rel":"noopener noreferrer","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"WhatsApp"}]]}]]}]]}],["$","div",null,{"children":[["$","h3",null,{"className":"text-lg font-semibold font-sora mb-6","children":"Solutions"}],["$","ul",null,{"className":"space-y-3","children":[["$","li","AI Automation",{"children":["$","$L5",null,{"href":"/solutions","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"AI Automation"}]}],["$","li","Process Optimization",{"children":["$","$L5",null,{"href":"/solutions","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Process Optimization"}]}],["$","li","System Integration",{"children":["$","$L5",null,{"href":"/solutions","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"System Integration"}]}]]}]]}],["$","div",null,{"children":[["$","h3",null,{"className":"text-lg font-semibold font-sora mb-6","children":"Industries"}],["$","ul",null,{"className":"space-y-3","children":[["$","li","Real Estate",{"children":["$","$L5",null,{"href":"/industries/real-estate","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Real Estate"}]}],["$","li","Investment",{"children":["$","$L5",null,{"href":"/industries/investment","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Investment"}]}],["$","li","Logistics",{"children":["$","$L5",null,{"href":"/industries/logistics","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Logistics"}]}],["$","li","Healthcare",{"children":["$","$L5",null,{"href":"/industries/healthcare","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Healthcare"}]}],["$","li","Legal",{"children":["$","$L5",null,{"href":"/industries/legal","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Legal"}]}],["$","li","Construction",{"children":["$","$L5",null,{"href":"/industries/construction","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Construction"}]}]]}]]}],["$","div",null,{"children":[["$","h3",null,{"className":"text-lg font-semibold font-sora mb-6","children":"Company"}],["$","ul",null,{"className":"space-y-3","children":[["$","li","About",{"children":["$","$L5",null,{"href":"/about","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"About"}]}],["$","li","Case Studies",{"children":["$","$L5",null,{"href":"/case-studies","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Case Studies"}]}],["$","li","Blog",{"children":["$","$L5",null,{"href":"/blog","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Blog"}]}],["$","li","Careers",{"children":["$","$L5",null,{"href":"/careers","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Careers"}]}]]}]]}],["$","div",null,{"children":[["$","h3",null,{"className":"text-lg font-semibold font-sora mb-6","children":"Resources"}],["$","ul",null,{"className":"space-y-3 mb-6","children":[["$","li","Pricing",{"children":["$","$L5",null,{"href":"/pricing","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Pricing"}]}],["$","li","Process",{"children":["$","$L5",null,{"href":"/process","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Process"}]}],["$","li","Security",{"children":["$","$L5",null,{"href":"/security","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Security"}]}],["$","li","Documentation",{"children":["$","$L5",null,{"href":"/docs","className":"text-gray-300 hover:text-accent-teal transition-colors","children":"Documentation"}]}]]}],["$","h4",null,{"className":"text-sm font-semibold font-sora mb-3","children":"Legal"}],["$","ul",null,{"className":"space-y-2","children":[["$","li","Privacy Policy",{"children":["$","$L5",null,{"href":"/privacy","className":"text-gray-400 hover:text-accent-teal transition-colors text-sm","children":"Privacy Policy"}]}],["$","li","Terms of Service",{"children":["$","$L5",null,{"href":"/terms","className":"text-gray-400 hover:text-accent-teal transition-colors text-sm","children":"Terms of Service"}]}],["$","li","DPA",{"children":["$","$L5",null,{"href":"/dpa","className":"text-gray-400 hover:text-accent-teal transition-colors text-sm","children":"DPA"}]}],["$","li","Cookie Policy",{"children":["$","$L5",null,{"href":"/cookies","className":"text-gray-400 hover:text-accent-teal transition-colors text-sm","children":"Cookie Policy"}]}]]}]]}]]}],["$","div",null,{"className":"border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center","children":[["$","p",null,{"className":"text-gray-400 text-sm","children":["© 2024 ","Zadix",". All rights reserved."]}],["$","div",null,{"className":"flex items-center space-x-6 mt-4 md:mt-0","children":[["$","$L6",null,{"currentLocale":"en"}],["$","a",null,{"href":"http://linkedin.com/company/zadix-ai","target":"_blank","rel":"noopener noreferrer","className":"text-gray-400 hover:text-accent-teal transition-colors","children":"LinkedIn"}]]}]]}]]}]}],["$","$L7",null,{"locale":"en"}]]}],null],null],null]},[null,["$","$L8",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$9","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[null,["$","$L8",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/a7ff8fd418cd1abc.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","className":"__variable_e8ce0c __variable_3bd0c9","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","href":"/favicon.ico"}],["$","link",null,{"rel":"apple-touch-icon","sizes":"180x180","href":"/apple-touch-icon.png"}],["$","link",null,{"rel":"icon","type":"image/png","sizes":"32x32","href":"/favicon-32x32.png"}],["$","link",null,{"rel":"icon","type":"image/png","sizes":"16x16","href":"/favicon-16x16.png"}],["$","link",null,{"rel":"manifest","href":"/site.webmanifest"}],["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Zadix\",\"url\":\"https://zadix.ai\",\"logo\":\"https://zadix.ai/logo.png\",\"description\":\"We build AI automations that cut manual work 50–80% and respond in under a minute.\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Dubai\",\"addressCountry\":\"UAE\"},\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+971-4-123-4567\",\"contactType\":\"customer service\",\"email\":\"hello@zadix.ai\"},\"sameAs\":[\"https://linkedin.com/company/zadix-ai\"]}"}}]]}],["$","body",null,{"className":"min-h-screen bg-white font-inter antialiased","children":["$","$L8",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}]]}]],null],null],["$Lb",null]]]]
b:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Observability for AI Systems: Langfuse + OpenTelemetry | Zadix Blog"}],["$","meta","3",{"name":"description","content":"How we implement comprehensive monitoring and debugging for AI agents in production environments."}],["$","meta","4",{"name":"author","content":"Zadix"}],["$","meta","5",{"name":"keywords","content":"ai automation dubai, agentic ai for business, workflow automation uae, real estate ai automation, logistics rfq automation, investment memo ai"}],["$","meta","6",{"name":"creator","content":"Zadix"}],["$","meta","7",{"name":"publisher","content":"Zadix"}],["$","meta","8",{"name":"robots","content":"index, follow"}],["$","meta","9",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","10",{"rel":"canonical","href":"https://zadix.ai/"}],["$","link","11",{"rel":"alternate","hrefLang":"en","href":"https://zadix.ai/"}],["$","link","12",{"rel":"alternate","hrefLang":"ar","href":"https://zadix.ai/ar/"}],["$","link","13",{"rel":"alternate","hrefLang":"tr","href":"https://zadix.ai/tr/"}],["$","link","14",{"rel":"alternate","hrefLang":"ru","href":"https://zadix.ai/ru/"}],["$","meta","15",{"name":"format-detection","content":"telephone=no, address=no, email=no"}],["$","meta","16",{"property":"og:title","content":"Observability for AI Systems: Langfuse + OpenTelemetry | Zadix Blog"}],["$","meta","17",{"property":"og:description","content":"How we implement comprehensive monitoring and debugging for AI agents in production environments."}],["$","meta","18",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","19",{"name":"twitter:title","content":"Agentic AI Automation for Business — Production-Ready in 7–14 Days | Zadix"}],["$","meta","20",{"name":"twitter:description","content":"We build AI automations that cut manual work 50–80% and respond in under a minute. Fixed scope, fixed timeline, 30-day value guarantee."}],["$","meta","21",{"name":"twitter:image","content":"https://zadix.ai/og-image.jpg"}],["$","meta","22",{"name":"next-size-adjust"}]]
1:null
