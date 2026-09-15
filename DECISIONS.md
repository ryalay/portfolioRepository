# Portfolio project: full decision log

Companion to HANDOFF.md. HANDOFF is the operational state; this file is every
meaningful decision, its reasoning, and the alternatives that were rejected.
Written July 2026 from the original build conversation.

---

## 1. Portfolio strategy

**The four-beat narrative arc** (used on both brand case studies). Section headers
ARE the story, so a skimmer who reads only headers gets the whole arc:
1. Website & UX: "The first thing we needed was somewhere credible to send people"
2. SEO: "Then we needed people to actually find it"
3. Email & Marketing: "Then we needed a way to stay in front of the ones who weren't ready yet"
4. Systems: "And we needed infrastructure to make all of it repeatable"

**Three reading depths.** Every case study is built to reward a 5-second skim
(thesis line), a 30-second scan (narrative headers + context strip), and a 2-minute
read (full copy). Most portfolios only reward the third reader.

**Page anatomy:** thesis line (biggest element, human stakes first, scope claim
second) > context strip (Role / Timeframe / Scope / Status: Ongoing) > setup
paragraph > four beats (header, one paragraph, anchor visual, gallery) > honest
close (no fake numbers, "live and evolving") > credits line.

**Warm/cold split.** LH reads warm and human; BCC reads cold and institutional.
Established by the homepage cards (light LH card, obsidian BCC card). On detail
pages: BCC gets a dark hero ONLY; both bodies stay warm. Brand identity comes
through screenshots, never page chrome. Rejected: fully dark BCC page (fought the
system); theming case study pages in each brand's palette (they are portfolio pages,
so they use the portfolio system).

**Anchor + gallery visual rhythm.** Each beat: one large annotated anchor
(a decision, shown) + a dense supporting gallery (volume as the argument).
Annotations are typographic callouts BESIDE the image (dot + bold lead + reason).
Rejected: markers drawn on screenshots (reads as UX teardown, unmaintainable);
numbered CSS overlay markers (offered, declined; cleaner won).
Callouts must describe what is actually visible in the screenshot; the original
LH hero callouts were written blind and had to be corrected when the real
screenshot arrived (no human photography existed; trust badges did).

**Honest metrics stance.** No invented numbers anywhere. The close sections say
"live and evolving" instead. Real metrics, when Ryan can stand behind them, are
the single highest-value future addition. Assessment given: current pages prove
work done, not outcomes; one or two defensible numbers raises the ceiling most.

**Calm language as design material (LH).** The "we buy houses" category screams
(caps, urgency, exclamation marks). LH's calm, friendly copy is deliberate
differentiation: restraint reads as trustworthiness to a skeptical, stressed
seller. This is a hero callout and Ryan's best LH interview talking point.
A competitor side-by-side would be devastating in an interview presentation but
does NOT belong on the public page (punching down violates the calm).

## 2. Site structure and taxonomy

**Three sections, not four.** A 2-2-2-2 four-section split (adding an "Enterprise
UX" tier) was proposed and rejected as over-organized filing-cabinet energy.
Final: Brand Ownership (LH, BCC) / Featured UX Work (Juiced, Spot) / Interface
Design & Selected Projects (RPEC first, KeHE, StreetEats, GigHub). RPEC leads
section three so professional work front-loads without new headers.

**Rejected: swapping Spot out for KeHE in Featured.** Spot's strength (research
rigor: real survey, stat framing, insight-to-feature translation) is maximized by
the case-study format; its weakness (final visual execution) is minimized there.
KeHE is the mirror image: strength is one shipped decision, weakness is dated
visuals; the featured format would expose it. Each project sits in the format
that flatters it.

**Rejected (deferred): an "additional work" text index** for davidchoi.biz and
leveragecompanies.com. Reasons to exclude as cards: dilutes attention from the
brand pages; shared credit muddies the clear-ownership story; leveragecompanies.com
overlaps the brand narrative. A compact text-only list can be added later in ~20
minutes if the portfolio ever feels thin. These sites ARE on the resume as one
bullet ("additional sites across the organization, including the parent company
site and an executive's personal brand site").

**Card tags (final).** Cohesion comes from repetition patterns: matched pairs per
section read as intentional tiers.
- Leverage Homes: Brand · Web · SEO · Email · CRM
- Brick City Capital: Brand · Web · SEO · Email · CRM (identical on purpose: "did the whole thing, twice")
- Juiced.io: UX Design · Client Collaboration
- Spot: UX Design · User Research (tag tells the reader what to judge it on)
- RPEC Portal: Enterprise UX · Professional Work
- KeHE: Enterprise UX · Professional Work (matched professional pair)
- StreetEats: Interface Design · Mobile App
- GigHub: Interface Design · Mobile App
"Shipped" was originally KeHE's second tag (deliberate odd-one-out beacon) but was
retired: a lone Shipped tag implied the live brand sites were not shipped. The
shipped story lives inside the KeHE page (eyebrow + Outcome cell + decision block).

**Tags describe scope of work, not sole authorship.** Umbrella words are where
overclaiming hides; enumerated lists are honest. Hence "Scope:" not "Owned:" in
context strips. "Brand Ownership" as a section title survives because it claims
stewardship (standing responsibility), not authorship; the pages document
authorship precisely underneath it.

## 3. Page formats (four intentional tiers)

**Full brand case studies** (leverage-homes, brick-city-capital): the four-beat
arc, Ongoing status. Timeframes: Leverage Homes ~8 months, Brick City Capital ~12 months
(corrected August 2026; both previously said ~18 months).
**UX case studies** (juiced, spot): natural UX shape (Context > Background >
Problem > Solution walkthrough), NOT forced into the funnel arc. Spot additions:
INRIX stat row (17 hrs / $97 / $20B+) as Playfair numerals between ink rules;
insight-to-feature pairs (serif pain statement left, "So the app should" right);
2x2 takeaways grid. HMW questions get the serif-statement-between-ink-rules
treatment on both.
**Interface showcases** (streeteats, gighub): deliberately half the length, craft
pages, numbered tour stops (eyebrow "01 / Discovery" etc.), one craft note per set,
no research/process/takeaways. Warm gray dots (system's personal-work color).
StreetEats keeps the scope-growth story as one closing line. GigHub keeps the
drummer detail and designathon pressure as single hero clauses.
**Compact professional entries** (kehe, rpec): shortest format, 60-second read.
KeHE centerpiece: two-direction decision block (Direction A filter-based plain
box vs Direction B guided wizard in ink-bordered Shipped box) + PM decision as
serif statement; broken .mov walkthroughs from the old site intentionally omitted.
RPEC centerpiece: Designed / Built / Wired triptych (experience, Experience Cloud
platform, Salesforce routing) + "the honest version" outcome block: "The platform
did its job. The business hypothesis didn't, and leadership sunset the pilot."
Leading with the failed pilot is a deliberate maturity signal.

**Old-portfolio images intentionally dropped** (approved): old-site chrome and
thumbnails; Spot problem/insight graphics (replaced by typographic treatments);
StreetEats/GigHub process artifacts (journey map, flows, wireframes, solution
mocks, quotes: cut by the showcase reframe); KeHE .movs (broken); menew.jpg
(Ryan's photo: About is deliberately text-only, "the work is the portrait");
certificate and old About thumbnails; storetemplatemock3 (duo layout used 2 of 3).
All recoverable from git history.

## 4. Homepage

Hero: heavy Inter 800 uppercase "RYAN LAYTON", serif statement, slate VIEW WORK
button. Background: interactive perlin waves canvas (Ryan's script, verbatim,
slate rgba(93,115,126,0.15) lines, reduced-motion guard) + .hero-fade radial
gradient overlay (transparent window ellipse 60% 70% at 70% 45%, opaque #F5F2EE
at edges) so waves shine through beside the text. Tunable knobs documented in CSS.
Bio opener aligned to hero: "a designer working across product, growth, and brand"
(replaced "a UX designer", which undersold the positioning).
Experience list: employment only, current titles (Leverage/UX Manager, Henry
Schein One, KeHE, Clocky). Juiced removed from Experience (see honesty ledger).
Footer: LinkedIn + Email only; Instagram dropped (was placeholder); "Instgram"
typo from the old site fixed.
Card images: LH + BCC supplied new; Juiced/Spot/StreetEats/GigHub/KeHE reuse old
homepage thumbs (card-kehe is lowest-res at 754px, fine at card size, re-export
if soft on retina). card-rpec.png intentionally left broken-visible until made.

## 5. Honesty ledger (rationale, not just rules)

- **Juiced:** real company, real collaboration with leadership/devs, alpha program;
  never employment, never shipped. Was on resume as a job (dates May–Jul 2024);
  moved to Selected Projects because Experience placement implies employment and
  fails background verification, making something true look fabricated. Interview
  sentence: "I designed the app for Juiced working directly with their leadership
  and developers, and served in their alpha program where my designs informed the
  build." Resume corroborates portfolio tag word for word.
- **KeHE "shipped":** Ryan is sure enough; the claim made in-page is the decision
  to launch made with the PM while he was in the room. Defensible as "we evaluated
  both directions with the PM and shipped the wizard."
- **RPEC + AI-generated code:** platform built largely with ChatGPT-generated code;
  all design, architecture, wiring, and accountability were Ryan's. Decision: no
  stack disclosure on the page (tools are not disclosures), "designed and built"
  stands, direct 5-second answer if asked: "I designed the whole thing and built
  it with AI-assisted development for the custom code; all the architecture,
  design, and Salesforce wiring decisions were mine." Evasion is the only version
  that hurts. RPEC context strip: "Sole designer & builder" (confirmed).
- **Brand collaboration:** Creative Marketing Manager co-developed brand identity
  and some Figma page structures. Fixes: "We designed the brand" in both beat-1
  copy blocks; credits lines filled title-only ("our Creative Marketing Manager",
  name deliberately withheld by Ryan's choice); resume says "partnered with the
  creative marketing manager on brand identity and page concepts".
- **Socials:** coworker's domain. "Full digital presence" removed from resume;
  replaced with enumeration ("Own the websites, SEO, and email marketing").
- **CRM:** two employees are more involved in Salesforce than Ryan. "CRM systems"
  removed from the resume ownership list; Salesforce credibility carried entirely
  by the specific-builds bullet (lead routing/segmentation automation, email
  verification, Experience Cloud partner portal). Principle: "Built X, Y, Z"
  survives any follow-up; "own the CRM" would not.
- **General principle:** scope lists are honest; umbrella claims are where
  overclaiming hides. Every remaining claim passes the follow-up-question test
  with zero hedging.

## 6. Resume (source: resume-source.html)

Workflow: HTML source, edit as text, export via Chrome print (Cmd+P > Save as PDF >
Margins None). Rationale: Figma PDF export is messy (bloat, text-to-outline risk),
InDesign source is subscription-hostage, browser print gives a pristine ATS text
layer + clickable links + tiny files. Verified: extraction reading order is clean.

Layout decisions: Poppins 600/700 headings + Inter body (all-Poppins body rejected:
too wide at 9.3pt, hurts one-page fit); white background (canvas rejected by Ryan);
dates on their own line under each title (right-aligned dates caused ugly wraps);
big header rule removed, section hairlines kept (one line weight, one job;
double rules read templated/AI); top padding 0.25in.

**Gotcha discovered:** the two-column layout is a flex container; Chrome print
cannot fragment flex across pages, so if content exceeds one page the ENTIRE
column block jumps to page 2 leaving the header alone. Fix is always "make it
fit", via metric tightening.

Content changelog vs. the old resume: UX Manager role added with 5 bullets
(ownership enumeration; sites incl. design systems + "50+ location- and
situation-specific SEO pages" [consolidated from "46-state footprint" + map:
plain words, both brands covered; map cut from resume because the BCC page leads
with it: resume states scale, portfolio shows the distinctive]; additional sites
bullet; Salesforce specific builds; deliverability rebuild). Earlier Leverage
roles compressed to title+date lines (promotion arc visible from titles alone).
Juiced to Selected Projects (side column, compact). Courses section removed
(3 years out, skills outrank coursework). "User Testing" dropped from tools
(redundant with UX Research); Webflow + Salesforce added; "Accessiblity" typo
fixed; Sketch · InVision condensed to one line. Two bullets trimmed of trailing
restatement clauses (KeHE copywriting, Juiced alpha). Dates corrected: UX Manager
May 2025 (not 2026). Subtitle stays "UX & Product Designer" (describes the person,
not the org chart). Available trims if ever needed: Clocky (weakest entry).

## 7. Hosting archaeology (facts, hard-won)

- ryanlayton.com serves from DigitalOcean App Platform (app "ryans-portfolio",
  NYC1, static site component from ryalay/portfolioRepository main, Source Dir /,
  Autodeploy ON, $0.00/mo static tier).
- DNS: DigitalOcean nameservers (ns1-3.digitalocean.com); A records 162.159.140.98
  / 172.66.0.96 are Cloudflare edge IPs that FRONT DigitalOcean; this misled
  diagnosis toward Cloudflare Pages initially. Do not change DNS.
- GitHub Pages is disabled on the repo (free plan + private at the time) and was
  NOT the host. A "GitHub authentication error" in DO had broken the deploy
  connection (last deployed commit 04690ec from Feb of the prior year); Ryan
  reauthorized it. Repo was made public for the migration clone; can go private
  again (DO deploys private repos).
- Old repo was 863MB: ~360MB ocean hero videos (5 versions, replaced by waves
  canvas), 435MB images total, 149 files, of which the new site uses 37.
  othercontent/ holds two old school essays now public in git history (fine, but
  a fresh single-commit repo is the fix if it ever bothers Ryan).
- Old resume PDFs live in images/ in history.
- Image pipeline: 37 images 15.9MB PNG > 2.4MB WebP (85%), q82, max 1600px,
  method 6, lazy-load below fold, parenthesized filenames cleaned
  (gighubmock1(noshadow).png > gighubmock1.webp; foodtruckmock1 note: the
  (noshadow) variant never existed, plain foodtruckmock1.png is the source).
- foodtrucks.html = redirect stub (meta refresh + canonical) to streeteats.html.
- Webflow: one free year exists; native rebuild abandoned (not worth building
  equity in a paid platform he plans to leave). All pages keep Client-First-style
  class names so a native rebuild stays cheap if ever wanted. Class library
  build order was documented in conversation if needed.

## 8. Future roadmap / parked ideas

1. Real metrics (top priority when available).
2. Remaining screenshots: all BCC frames (lending map is the marquee), LH beats
   2-4 + galleries, RPEC card + 3 frames (SCRUB real lead data before capture).
3. Fresh KeHE card export if the old thumb looks soft on retina.
4. Optional: additional-work text index; competitor side-by-side (interview only);
   headshot in About (currently deliberate text-only); srcset/2x variants if ever
   needed; Webflow native rebuild (unlikely).
4. Interview prep points on file: RPEC AI answer, Juiced sentence, KeHE shipped
   defense, LH calm-language story, breadth-vs-depth positioning (portfolio is
   strongest for startup/in-house hybrid/growth roles; a big-co senior product
   design role would want more craft depth, less Salesforce).
