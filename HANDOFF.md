# Portfolio project: context handoff

Read this first. It is the state of the ryanlayton.com rebuild as of August 2026,
written to bring any session (Cowork, Claude Code, or a fresh chat) fully up to speed.
DECISIONS.md is the companion file holding the full reasoning behind the original build.

## Changelog: August 2026 session
Everything below is already done and saved. Listed so a fresh session does not redo it.
- Deleted the stale pre-launch NOTES.md. Its checklist contradicted reality (it still asked
  for WebP cards and an Instagram URL that had been dropped).
- Resume source added and renamed to resume-source.html to match what this file references.
  Its UX Manager bullet was corrected to match resume.pdf exactly: "design systems and 50+
  location- and situation-specific SEO pages" replaced the older "46-state SEO landing page
  footprint, and an interactive lending-coverage map" wording. Everything else already
  matched. HANDOFF and DECISIONS now agree with the filename on disk.
- Added the shared navbar to all 8 case-study subpages (only index.html had one). This
  required injecting the nav CSS into 7 of them, since only leverage-homes.html already
  carried those styles.
- Fixed dead bottom CTAs: "Back to work" pointed at #work, which only exists on the
  homepage, and the "Next: Brick City Capital" and "Next: Leverage Homes" buttons pointed at
  #brick-city and #leverage-homes anchors that never existed anywhere. They now point at
  index.html#work and the actual page files.
- All Resume links (9 navs plus the homepage "View Full Resume") now open in a new tab.
- Replaced images/lh-homepage-hero.webp with the current homepage screenshot, twice (the
  second version changed the form headline to "Get a cash offer within 24 hours!").
- Restructured the LH beat assignments and added the success-story narrative (see below).
- Converted and placed nine new LH screenshots (see the image names in conventions).
- Built out the whole Brick City Capital case study: 13 purpose-cut WebP crops, the annotated
  state-page teardown, the three-email anchor, the hand-drawn design-system figure, and the
  deliverability strip. Details in the BCC section below.
- Retired the steel accent (#90A5BA) from the portfolio's drawn figures in favor of warm gray
  #5C5551. PORTFOLIO ONLY, at Ryan's explicit instruction. Webflow was NOT touched.

## What this folder is
The complete new portfolio for Ryan Layton (ryanlayton.com). Ten HTML pages,
resume-source.html (the HTML source of the resume; edit it and re-export via Chrome print
to PDF), an images/ folder of optimized WebP, resume.pdf, and these notes (HANDOFF.md +
DECISIONS.md; the old NOTES.md pre-launch checklist has been removed). It replaces the 2023
student portfolio that previously lived in this repo.

## Deployment pipeline
- Repo: github.com/ryalay/portfolioRepository (main branch)
- Host: DigitalOcean App Platform, app "ryans-portfolio", static site, $0/mo tier
- Autodeploy: ON. Any push to main deploys to ryanlayton.com in about a minute.
- DNS: DigitalOcean nameservers. Cloudflare IPs in front are DO's edge; do not change DNS.
- GitHub Pages is NOT used. The repo may be public or private; DO deploys either.

## Site structure
- index.html: homepage. Hero uses an interactive waves canvas (script at end of body)
  with a radial fade overlay (.hero-fade) so text stays readable.
- Three work sections: Brand Ownership (leverage-homes, brick-city-capital),
  Featured UX Work (juiced, spot), Interface Design & Selected Projects
  (rpec FIRST, then kehe, streeteats, gighub).
- foodtrucks.html is a redirect stub to streeteats.html (old URL preservation).
- Old-site filenames kept where they existed: juiced, spot, kehe, gighub.
- Shared fixed navbar on every page: Ryan Layton (home) / Work / About / Resume. On the
  case-study subpages Work/About point back to index.html#work and #about, and Resume opens
  in a new tab. Brick City Capital uses a light-text nav variant over its dark hero. The nav
  turns solid on scroll (small script at the end of each subpage). Hero top padding is
  bumped by the nav height so nothing hides under it.

## Design system ("Architectural Narrative")
- Canvas #F5F2EE, Ink #141414, Slate #5D737E, Olive #707A5E, Warm Gray #8D8D8D,
  Obsidian #1A1A1A, Field #EBE8E4, Hairline #D8D3CB, Muted #4C4A47
- Type: Inter 800 uppercase for big display names; Playfair Display for statements,
  headlines, card titles; Inter for body and ui-labels (0.1em tracking, uppercase).
- 0px border radius everywhere. No box shadows. Depth via tonal layering only.
- 1200px container, 32px gutter, 160px section rhythm (80px pad on adjacent sections).
- Category dots are the only circles: slate=UX, olive=growth, warm gray=systems/personal.
- BCC case study: dark obsidian hero only; body stays warm. LH: warm throughout.
- Brand identity shows through screenshots, never through page chrome.

## Copy rules (hard rules, apply to everything)

NO FORWARD REFERENCES THE READER CANNOT CASH YET. Ryan caught a caption in Beat 1 that said "the
state pages are assembled from these pieces": "saying 'the state pages' is kind of random, the
user doesnt know what they are yet". Correct. Beat 1 is the first beat and state pages are not
introduced until Beat 2. His wording, now live: "This is also what makes the next section
possible: large groups of pages for SEO are built with this design system." Describe the thing
generically on first mention and name it once the reader has met it.

NO DESIGN-SYSTEM JARGON IN READER-FACING TEXT. Ryan's instruction, August 22: "can you not talk
about semantic tokens i dont know what that means". Banned words in copy, captions, alt text and
aria-labels on both brand pages: semantic, token, primitive, alias. He is a UX manager, so
typeface, type scale, component and class name are all fine. It is specifically the
design-systems-engineering vocabulary that has to go.
What the wording became, so it stays consistent:
  "seven color primitives aliased by ten semantic tokens" -> "six colors that every page calls
  by name" (aria-label)
  "5 primitives, 1 raw value" -> "Six colors, each called by name" (figure note)
  "Ten semantic tokens sit on these, so no page ever names a raw hex." -> "Every page calls a
  color by name, never by its hex value." (figure note)
  "brand tokens" -> "the brand colors" (LH caption)
  "Every token, class name and value" -> "Every name, class and value"
The IDEA is still on the page and is still the point: the palette is small and nothing hardcodes
a hex. Only the vocabulary changed. Note that HANDOFF itself still uses the technical words in its
own descriptive notes, which is fine because HANDOFF is internal. Do not copy that phrasing into
the pages.

NEVER MENTION THE LOAN MACHINE. Ryan's instruction, August 22, given flat with no caveat: "dont
talk about the loan machine anywhere". It was removed from three places on the BCC page: the
Beat 4 intro copy, the fourth Beat 4 callout, and its own build item in the Beat 4 builds strip.
Do not reintroduce it in copy, diagrams, alt text, aria-labels or captions, and do not screenshot
it. If a future beat feels thin without it, fill the gap with something else.

USE THEY, NOT HE, for brokers, borrowers and sellers, everywhere including aria-labels.

- No em dashes anywhere, including comments and titles.
- No "not X, but Y" or "X, not Y" contrast constructions. Use "rather than",
  "instead of", or restructure. This ban is BROADER than it looks and Ryan catches
  every instance: it also covers "was never just A, it was B", "doesn't just A, it B",
  "The point isn't A. It's B", and "two axes, not one". If a sentence sets up a thing
  only to knock it down, rewrite it as a plain statement of what is true.
- NO METAPHORS unless a metaphor is genuinely the clearest way to describe the specific
  thing. Ryan does not use them in his own writing. Removed in the August pass: plumbing,
  foundation, bridge, machine, noise, temperature, screaming categories, streams,
  carrying weight, sharpening, doors left open, burning sends, dead inboxes, babysitting,
  slipping through cracks, moving parts, dead ends, from the ground up, streamlined.
  Dead-metaphor UX jargon that stayed: "land" on a page, "low-friction", "warm" for tone
  (a Leverage Homes brand voice word), "layers" for the four beats.
- No swagger/aphoristic/tagline-sounding copy. Boldness from facts, plain statements.
- Calm, human, conversational. Write how a person talks.
- Prefer plural and plain phrasing: "we publish new success stories regularly" reads
  better than "we publish a new success story regularly".

## Brick City Capital: current state (August 2026)
BCC now mirrors Leverage Homes structurally. Same two-column intros (.intro-cols, headline
left at 36px, body right), same tonal alternation, context strip inside the obsidian hero.

Beat assignments were corrected. Everything market or state related used to sit in Beat 1,
which was wrong for the same reason LH's situation pages were: those pages are intent
capture, so they belong with SEO.
- Beat 1 (Website & UX): homepage hero is the ANCHOR. Then a two-up gallery (About page and
  Mobile views, both real), then a full-width DESIGN SYSTEM FIGURE. Brand and craft only. NO
  PLACEHOLDERS LEFT IN THIS BEAT.

  bcc-mobile-views.webp, 2438x2320, is TWO iPhone captures composed into one tile: a deal review
  page and the FAQ accordion, side by side with an 80px gap filled with the portfolio canvas
  #F5F2EE so the gap matches the page behind it. Ryan sent four captures; these two were chosen
  because the accordion shows a real interactive component rather than a scaled-down page, and the
  deal review shows editorial type and a photo, so the pair is visually varied. The other two were
  a dark CTA carrying Safari's full bottom toolbar, and a Recent Closings view where the floating
  URL pill sat on top of the caption text.
  Both are cut at y 2320. Safari's floating brickcitycapital.com pill starts at y 2415, so that is
  the ceiling on any crop from these captures. The iOS status bar is deliberately KEPT, since it
  is what makes the tile read as a real phone. Composed aspect 1.0509 renders 556px beside the
  About page's 578px, which is close enough to read as a row.

  THE DESIGN SYSTEM FIGURE IS DRAWN, AND EVERY VALUE IN IT IS REAL. It replaced the "Component
  library" gallery placeholder on August 21. It is a hand-built inline SVG in .frame.has-diagram
  under the title "The system every page is built from", full width so it stays legible, which a
  379px screenshot of a style guide never would be.

  EVERY TOKEN, CLASS NAME AND VALUE WAS READ OUT OF THE LIVE WEBFLOW PROJECT through the Webflow
  MCP, not transcribed by eye from screenshots. Site id 6891378b6da8e393c4897fdb, variable
  collection "Base collection". If the system changes, re-read it the same way rather than
  guessing. What it shows:
    7 primitives   color-neutral-0 #FFFFFF, color-neutral-100 #fcf9f8, color-neutral-200 #ebe7e7,
                   color-neutral-600 #4c6173, color-neutral-900 #131313,
                   color-blue-steel #90A5BA, color-brand-gold #BC983B
    10 semantic tokens alias those. Four are shown: background-color-dark, text-color-accent,
                   background-color-alternate, text-color-muted. That two-layer structure is
                   itself the credential, so do not flatten it to a row of swatches.
    Type scale     Manrope throughout, from .heading-style-display 96px/700 down to
                   .text-size-tiny 12px/400, eleven steps, real class names and real values.
    Components     the gold CTA, .button_component (white on dark, Manrope 700, 1rem), a gold
                   uppercase section label, a card on background-color-secondary, and a stat row.

  Drawn rather than screenshotted for the legibility reason recorded further down: an SVG at 1:1
  renders its own 11 to 13px type at 11 to 13px, while a screenshot of the same content at tile
  width lands around 4px.

  STEEL WAS RETIRED FROM THE PORTFOLIO ON AUGUST 21, AT RYAN'S CALL. color-blue-steel #90A5BA is
  gone from this repo entirely. Everywhere it was used, the warm gray #5C5551 replaced it: the
  design system figure's own label and hex type (.ds-note, .ds-hex, .ds-cls) and the Beat 4
  attribution diagram (.bc-tag, .bc-total, .bc-arrow). The figure now shows SIX primitives, and
  the warm gray appears in the semantic list as text-color-secondary #5C5551 with its own swatch,
  which is honest because that token holds a raw hsla value rather than aliasing a primitive:
  hsla(21.818, 6.36%, 33.92%) converts to #5C5551.
  Contrast, which is the real argument for the swap: #90A5BA on white is 2.54:1 and FAILS WCAG AA
  for body text. #5C5551 is 7.31:1 and passes.

  ALSO REMOVED, August 21: color-neutral-600 #4c6173 and the text-color-muted token that aliased
  it. Verified before removing, and Ryan was right: ZERO styles reference either the primitive or
  the token. One style, .closing_card-meta-text, hard-codes the same hex #4c6173, which is the
  same pattern steel had. So if neutral-600 ever gets deleted in Webflow, that one style keeps the
  colour as a raw value and will not break.
  The figure now shows 5 primitives plus text-color-secondary as a raw value.

  THE SEMANTIC ALIAS LIST WAS CUT, and this was the right call. It listed four rows of
  "this token name points at that primitive name". Earlier notes here called that two-layer
  structure "the credential", which overvalued it: to anyone reading the portfolio it is plumbing
  with nothing visible to show. It is now ONE line under the swatches, "Ten semantic tokens sit on
  these, so no page ever names a raw hex", which states the same structure in twelve words. Do not
  rebuild it as a list.

  A CONTRAST PANEL WAS CONSIDERED AS THE REPLACEMENT AND REJECTED, for a reason that matters more
  than the panel. Measuring every real pair on the site turned up that WHITE ON THE GOLD CTA
  (#FFFFFF on #BC983B) is 2.73:1, which fails WCAG AA even for large text. That is the primary
  call to action on the live site. Putting a contrast panel on the portfolio would have advertised
  it. Everything else passes comfortably: ink on white 18.58, warm gray on white 7.31, gold on
  dark 6.81, warm gray on the alternate surface 5.96. Fixing the button is a live-site job for
  Ryan, and until it is fixed do not put contrast numbers on the case study.

  On-dark labels in the figure are WHITE. The warm gray sits at about 1.9:1 on the #131313 chip
  and could not be read. White is color-neutral-0, so it stays on system.

  THE PORTFOLIO IS NOW AHEAD OF THE LIVE WEBFLOW PROJECT ON THIS. Webflow still has
  color-blue-steel and still has 24 styles hard-coding #90a5ba. Ryan said "just on my portfolio
  for now", so the figure documents where the system is going rather than exactly where it is.
  When Webflow is cleaned up, nothing in this repo needs to change. If it is NOT cleaned up, the
  figure is the one place on the site that overstates, so revisit it before any interview.

  DO NOT WRITE TO THE WEBFLOW PROJECT FROM A PORTFOLIO SESSION. Reading it through the Webflow
  MCP to get real tokens is the right move and is how the figure was built. Writing to it is not.
  On August 21 a request to retire steel was read as a Webflow change, 23 styles were edited, and
  Ryan stopped it. All 23 were reverted and verified, and nothing was ever published, so the live
  site was never affected. One residue to check: update_style resolved the bare names "border-left"
  and "border-left-blue" to COMBO classes
  (.flex-row.keep-direction.gap-16px.flex-start-start.border-left and
  .flex-column.border-left-blue) rather than the global classes of the same name, so a
  border-left-color was briefly added to those two combos and then removed. If either combo had
  its own border-left-color before that, it is gone. Worth eyeballing those two in the Designer.
  Lesson for the tool: always pass parent_style_names, or target by style id, never a bare name.

  FOUND WHILE READING THE PROJECT, worth telling Ryan and not on the page: the Webflow project
  still carries a full set of leftover "Untitled UI" variables (purple #7f56d9 primaries, gray
  ramps) and .uui-* classes on system-ui from the template the site started on. They are unused
  by the BCC system but they are still in the project. Cleaning them would make the variables
  panel tell the truth. Also: the Beat 4 attribution diagram uses greys #E3E8ED / #EEF1F4 /
  #F4F6F8 that are NOT in the real token set; the real neutrals are #fcf9f8 and #ebe7e7. Minor,
  but the diagram is off-system by a hair.
- Beat 2 (SEO): the interactive "Our Markets" lending map is the ANCHOR, since it is where
  coverage and search intent meet and it is the entry point to every market page. Below it
  sits the framework diagram, then the New Jersey page as the framework filled in, then a
  a two-up gallery of the loan product page and the resources library. The Search Console
  placeholder was DROPPED on August 21 at Ryan's call: a screenshot of Search Console would not
  carry an argument, and the two real pages read better at full width. Do not add it back.
- Beat 3 (Email & Marketing): gained a second paragraph covering deal reviews and the
  industry events page. The deal reviews are the direct parallel to LH's success stories:
  published proof that the outbound campaigns point at. The events page was missing from the
  case study entirely before this.
  Added August 21, mirroring the LH success-story treatment exactly: ONE deal review shown in
  two parts, in a .gallery.gallery--two under the title "One deal review, end to end", sitting
  between the anchor and the gallery.
    bcc-deal-review-open   1408x2140  y 0 to 2140. Hero with the stat bar (loan amount,
                                      leverage, term, time to close), THE GOAL, the property
                                      photo, and THE CHALLENGE including the Other Lenders
                                      versus Brick City Capital comparison box, which is the
                                      strongest single element on the page. 2140 is a gutter.
    bcc-deal-review-close  1408x1760  y 2340 to 4100. HOW WE EXECUTED week by week, WHY THIS
                                      MATTERS, the 16 days stat, the closing quote from Matt
                                      Neptun (VP Originations), and who the deal speaks to.
                                      Both 2340 and 4100 are gutters.
  The deal is the $1.05M Chicago four-family refinance that closed in 16 days out of a bridge
  loan maturity default, with a legal nonconforming zoning issue. Full page archived as
  images/source/bcc-deal-review-full.webp.
  THE BEAT 3 ANCHOR IS THREE EMAILS SIDE BY SIDE, in a normal 3-up .gallery with the callouts
  below it. This is the third attempt at that anchor and the reasoning matters, because the first
  two look reasonable and are worse.
    bcc-email-deal-review           685x1015   "The answer to the zoning objection was in the
                                               appraisal report"  (the $1.05M Chicago four-family
                                               that the deal review page below also covers)
    bcc-email-lending-fundamental   685x1015   "How Borrowers Qualify When DSCR Doesn't Work"
                                               (the bank statement loan product)
    bcc-email-market-update         685x1015   "9,447 institutional homes listed. Half with
                                               price cuts."  (Wall Street stopped buying houses)

  ATTEMPT 1 was the email BODY only, no mail client, one email at 380px wide. It read as another
  narrow web page, which is exactly what Ryan said. A tall bordered column of designed content
  carries no signal that it is email.
  ATTEMPT 2 added a labelled Subject line strip above it in Playfair, .send-meta and
  .send-subject. Honest and on brand, and it did help. It was removed only because attempt 3
  makes it redundant: every email now shows its own real subject line in the header.
  ATTEMPT 3, the one that shipped: captures that INCLUDE THE GMAIL MESSAGE HEADER, cropped tight
  to subject line, sender, "to", timestamp and the Inbox chip. No sidebar, no toolbar, no other
  inbox rows. Two things fixed at once. The header says email, and three of them side by side say
  campaign programme rather than one-off.

  WHY REAL GMAIL RATHER THAN A RECREATED MAIL CLIENT. Drawn mail chrome is a picture of software
  Ryan did not build, presented as context for work he did. This portfolio's whole position is
  that every claim survives the follow-up question, and DECISIONS already rejected this category
  twice (drawn markers on screenshots, the ChatGPT diagram). The real chrome is also more
  convincing precisely because it is plain: it says this went out and landed in an inbox.

  PRIVACY, ALREADY HANDLED, KEEP IT HANDLED. The lending fundamental and market update captures
  carried a Gmail label chip reading rlayton@brkcty.com, which is a harvestable address on a
  public page. It is masked with a white rectangle at x 119 to 234, y 36 to 57, which is flat
  background so the mask is invisible. The Inbox chip is left alone. "to rlayton" is left in all
  three, since a first-initial-plus-surname username is not an address. If these are ever
  recaptured, check that chip row again.

  All three are cropped to exactly 685x1015, the smallest common box, so the row renders dead
  even at 561px per tile. They are viewport captures rather than full-page, so the bottom edge is
  arbitrary anyway and trimming to a shared height costs nothing.

  The callouts were rewritten for the set, and two of them are now provable from the artifacts:
  the subject lines state findings rather than promotions, and the sender address is on an
  isolated subdomain, which is the visible evidence for the deliverability rebuild claim that
  previously had none. Do not put the sending subdomain in the callout text itself; it is legible
  in the screenshots and does not need repeating in copy.
  Removed with attempt 3: .anchor--tall, .send-meta and .send-subject, all now unused.
- Beat 4 (Systems): lead-flow diagram as the anchor, then the enumerated builds strip, now
  TWO items (Salesforce architecture, Lead attribution). No Salesforce screenshots, same
  reasoning as LH.

One hand-built inline SVG diagram remains, the attribution chain in Beat 4. It matches BCC's
brand system on colour and radius
(#131313 body text, steel blue #90A5BA on labels and arrows, gold #BC983B accent, supporting
greys #E3E8ED / #EEF1F4 / #F4F6F8, and no rx anywhere so square corners hold). As of August 21
they match on type too: Manrope at 400, 500 and 600 on .bc-head, .bc-lb, .bc-lb2, .bc-total and
.bc-btn. .bc-tag stays monospace on purpose, since it reads as a field name.
- "Attribution, from first click to sourced deal" in Beat 4.

BEAT 2 WAS RESTRUCTURED ON AUGUST 21. It is now anchor, then one annotated figure, then a
two-up gallery. Three things were removed along the way; read this before adding any of them back.

REMOVED 1, the "One framework, 46 states" SVG. Its right half was 30 empty rectangles standing in
for 46 markets under the label APPLIED PER MARKET, which argued nothing and read as unfinished.
Do not rebuild it as a diagram.

REMOVED 2, the standalone framework list and a low-fidelity page wireframe that briefly replaced
that SVG. Both were built and both were dropped, because side by side they were a drawing of a
page next to a description of a page: two explanations and no evidence.

REMOVED 3, the New Jersey mid-page crop (bcc-market-new-jersey.webp, y 1288 to 2723). Ryan's
objection was that it was a big pasted block of text from the middle of a page with no way in.

SHIPPED, the annotated full page. .teardown is a two-column grid: the whole New Jersey state page
on the left at 400px wide (bcc-market-new-jersey-page.webp, 1277x4245, y 0 to 4245, which is the
page minus the generic CTA and footer), and the five framework sections named beside it on the
right, each with a hairline leader line. Note positions are PERCENTAGES of the image height, so
they hold at any width:
    01 That state's DSCR environment           18.73%   (page y 795)
    02 The structural realities, one by one    30.34%   (page y 1288)
    03 How we underwrite each one              48.48%   (page y 2058)
    04 Why brokers send complex files here     64.17%   (page y 2724)
    05 Deals actually closed in that state     77.03%   (page y 3270)
If the crop ever changes, recompute every percentage as y divided by the crop height. Notes are
absolutely positioned and stack to static below 860px. Verified with no overlap at 1440, 1024,
860, 768 and 420 wide.

Why this shape works: the screenshot is sized to be SEEN rather than read, and the annotations
carry the meaning, which is the same typographic-callout-beside-the-image pattern both brand
pages already use. It is also the whole real page rather than a schematic.

REJECTED, a collage of state hero sections arranged on a US map. Reasons, so it does not get
retried: the state hero looks like one template with a different city photo and state name, so a
collage of six would accidentally argue that the pages are all the same, which is the opposite of
the claim; the anchor directly above is already a US map with all 46 states; and screenshot cards
floating around a map with leader lines is a stock deck composition on a page whose strength is
real artifacts. The per-state substance lives in the middle sections, not the heroes.

SHIPPED, a TWO-state row, Texas and Florida. It sits between the anchor and the teardown under
the title "The same framework, two more states", in .states3, its own grid rather than a .gallery.

IT WAS THREE STATES FOR ABOUT AN HOUR, INCLUDING NEW JERSEY, AND TWO IS BETTER. At three columns
each tile is 379px and a state page heading renders at 13.5px. At two columns each tile is 584px
and the same heading renders at 20.7px, with body copy close to legible as a bonus. Nothing was
lost by dropping New Jersey from the row, because the teardown directly below is the whole New
Jersey page annotated, so the beat still covers three states and no longer shows New Jersey twice.
Do not add a third tile back here. If a state is swapped, swap Texas or Florida.
bcc-state-new-jersey.webp was moved out to _converted-originals; regenerate it from
images/source/bcc-market-new-jersey-full.webp at y 0 to 1304 if it is ever needed again.

EACH TILE CARRIES A QUOTED LINE FROM ITS OWN PAGE UNDERNEATH, and this is the point of the block
rather than decoration. Measured type sizes across every screenshot treatment on this page:
    state tile, 3-up               26.9% scale   16px ->  4.3px
    email tile, 3-up               55.3% scale   14px ->  7.7px  (subject line 22px -> 12.2px)
    teardown page, 400px column    28.4% scale   16px ->  4.5px
    Beat 2 two-up                  37.7% scale   16px ->  6.0px
    deal review two-up             41.5% scale   16px ->  6.6px
    a state tile at FULL width     85.2% scale   16px -> 13.6px
READ THOSE NUMBERS AS BODY COPY ONLY, WHICH IS THE WRONG THING TO OPTIMISE. Body copy never
becomes readable at any tile size short of full width, and nobody needs to read body copy inside a
screenshot. What decides whether a tile READS is whether its headings survive, and there the
column count matters a lot:
                        3-up (379px)      2-up (584px)
    page H2 heading      13.5px            20.7px
    post headline        11.9px borderline 18.3px
    body copy             4.3px             6.6px
So a 3-up tile only works when its DISPLAY type carries the message, and a 2-up tile also gets
headlines and subheads. Pick the column count from what the tile has to say rather than from how
many artifacts there are. Ryan called this correctly by eye before it was measured.

Illegible body copy is FINE in a tile whose job is to show that a page exists and what shape it
is, which covers the Beat 1 gallery, the Beat 2 two-up, the deal review two-up, the email bodies,
and the teardown, which was designed that way on purpose with annotations carrying the meaning.
The three-state row was the ONE place it was a real problem, because that row's whole argument is
that the per-state copy differs, and at 4.3px a reader could see three different city photos and
had to take the rest on faith. The quotes are the fix: the screenshot carries the shape, the quote
carries the evidence, at 18px Playfair.

The quoted fragments are verbatim from the live pages, deliberately the distinctive clause rather
than the whole first sentence:
    Texas       "structural complexity, particularly in newer construction condo projects with
                elevated investor ownership"
    Florida     "concentrated in three places: condos, insurance, and short-term rental income"
New Jersey's line, if it is ever needed, is "a judicial foreclosure state carrying some of the
highest property taxes in the nation"
The caption previously paraphrased these differences in Ryan's portfolio voice. Real quotes beat a
paraphrase here, because a reader can check them against the screenshot directly above. If a state
is ever swapped, requote from that page rather than writing a summary.

.states3 is its own grid, not a .gallery, specifically so each quote stays under its own tile at
every breakpoint (2 columns, 1 below 560px). A .gallery plus a separate text row
would have desynchronised on the way down. It exists to prove the one thing the
teardown cannot claim on its own: that the per-state content is genuinely different rather than
one template with a state name swapped in.
    bcc-state-texas       1408x1304   hero + Structuring Complex Investor Transactions Across
                                      Texas
    bcc-state-florida     1408x1304   hero + the same section for Florida
ALL THREE ARE EXACTLY 1408x1304, so the row renders dead even. Keep it that way. New Jersey's dark
section actually runs 31px longer, to y 1335, and cutting it at its own edge made that tile 359px
against 351px for the other two, which Ryan spotted immediately. Cutting all three at 1304 is safe
because New Jersey's last row of content is at y 1200, so the 31px removed is flat padding. That
leaves 104px of bottom padding on New Jersey against 121px on the other two, which is invisible.
The reverse fix, extending Texas and Florida to 1335, was rejected: below their dark sections the
page is WHITE, so it would have added a thin white strip to two tiles and read as a mistake.
Each crop is HERO PLUS THE ONE SECTION UNDER IT. The heroes do
share a layout, so the crop deliberately includes the dark section below, which is where the copy
actually diverges: judicial foreclosure and tax load in New Jersey, investor concentration in
newer construction in Texas, insurance and condo structure in Florida. A hero-only crop would
have argued the pages are all the same.

ALL THREE CAPTURES ARE 1408 WIDE ON PURPOSE. Ryan re-shot New Jersey at the Texas and Florida
viewport (the file was named with a _RESIZE suffix) so the three tiles share an aspect and render
at 359, 351 and 351px in a row. The older 1277-wide New Jersey capture was replaced everywhere,
including in the teardown, so the state page layout matches across the whole beat. If a fourth
state is ever added, capture it at the same width or the row goes ragged.

TEARDOWN NOTE POSITIONS WERE RECOMPUTED for the 1408-wide capture. They are percentages of the
crop, and the crop changed from 1277x4130 to 1408x4220, so every one moved:
    01 That state's DSCR environment           18.01%   (page y 760)
    02 The structural realities, one by one    31.64%   (page y 1335)
    03 How we underwrite each one              49.93%   (page y 2107)
    04 Why brokers send complex files here     65.71%   (page y 2773)
    05 Deals actually closed in that state     81.35%   (page y 3433)
4220 is where the dark CTA band starts. .td-notes min-height is 1199px, which is the image height
at 400px wide. Any recapture means redoing all of this: find the section edges, divide by the crop
height, update five percentages and the min-height.

IMPORTANT correction already applied: the framework diagram originally listed invented
section names (property types, closing timelines, broker FAQs). The REAL per-state framework,
read off the live New Jersey page, is: that state's DSCR environment / the structural
realities one by one / how we underwrite each one / why brokers send complex files here /
deals actually closed in that state. That is problem, underwriting answer, proof. Do not
replace these with generic SEO-page section names again.

The New Jersey page is worth understanding: elevated property taxes, judicial foreclosure,
non-warrantable condo concentration, appraisal risk, investor concentration, operating
history, each paired with how BCC underwrites around it. The 46 pages are substantive
per-state content rather than one template with the state name swapped, which is a stronger
claim than the case study currently makes in its body copy.

BCC images: eight full-page screenshots, CONVERTED on August 21 from 27.6MB of raw PNG down to
3.24MB of WebP, an 88% reduction. Pillow at quality 82, method 6, with a fully opaque alpha
channel dropped from each one. The exact filenames, verified against the images/ folder and
against the src paths in brick-city-capital.html, all .webp:

  bcc-homepage-hero        bcc-about-page          bcc-markets-map      bcc-market-new-jersey
  bcc-loan-product-sfr     bcc-insights-page       bcc-deal-reviews-page   bcc-events-page

An earlier version of this section listed seven of those eight names wrongly (bcc-homepage,
bcc-about, bcc-product-page, bcc-resources, bcc-deal-reviews, bcc-events, bcc-new-jersey). None
of those files exist. If a future session finds this list disagreeing with the HTML, read the
images/ folder and trust the folder. The source PNGs were deleted from the repo root and all
eight src paths were updated to match, verified in Chromium with zero broken images.

CROPPING WAS REVERSED ON AUGUST 21. Read this before touching a BCC image or frame.

The old rule was "never pixel-crop, the crops live in CSS." That is no longer true, and the
reason it changed is that CSS cropping was cutting content off. object-fit cover picks a band
by percentage, which cannot know where a section ends, so it sliced a headline on the About
tile, dropped the "Submit a Deal Scenario" button off the homepage hero, cut the legend off
the lending map, and left the New Jersey page showing one section chopped mid-way.

Crops now live IN THE FILES, cut to each frame's job, and the CSS no longer crops at all:
- .crop-30 and .crop-28 are GONE, both the rules and the class usages.
- .frame.is-anchor.has-img and .section-shot .frame.has-img no longer force an aspect ratio.
- The three large frames carry .is-exact, which sets aspect-ratio auto and img height auto, so
  the frame takes the image's own height. Nothing is cropped a second time.
- Gallery image tiles have NO PADDING and NO fixed ratio. Ryan asked for the hairline border
  and nothing else, so .gallery .frame.has-img sets padding 0 and aspect-ratio auto, and its
  img sets height auto. The frame hugs its file.
- .gallery gets align-items start, so tiles top-align and a shorter page just makes a shorter
  box. Placeholders take align-self stretch so they still fill the row.

What each crop contains, and why:
- bcc-homepage-hero, 1278x926, y 0 to 926. Nav, both headline lines, the subcopy, the Submit a
  Deal Scenario button, and the whole Quick Closing / Fast Terms value-prop strip. 926 is where
  the white section starts. Ending at 885 slices through the strip's letterforms; do not.
- bcc-markets-map, 1277x1487, y 0 to 1487. The hero plus the entire States we lend in section
  including the ACTIVELY LENDING / NOT YET AVAILABLE legend. 1487 is the dark-to-white edge.
- bcc-market-new-jersey-page, 1277x4245, y 0 to 4245. The whole New Jersey state page minus the
  generic CTA and footer, used inside .teardown at 400px wide. The older mid-page crop
  bcc-market-new-jersey.webp (y 1288 to 2723) is OBSOLETE and unreferenced; delete it in Finder.
- The five gallery tiles show HERO PLUS FIRST SECTION, each from y 0, each cut on a real
  section edge. Ryan rejected a hero-only version as cutting things off. They are:
    bcc-about-page        1278x1265  hero + the whole Our Story section
    bcc-loan-product-sfr  1549x2286  hero + Why choose a DSCR loan + Simple qualification
    bcc-insights-page     1277x1860  hero + featured post + 4 more posts
    bcc-deal-reviews-page 1277x1690  hero + featured deal + 3 more deals
    bcc-events-page       1277x1046  hero + the NPLA card, cut just below it. The card content
                                     ends at 988 and the crop leaves 58px of white below, which
                                     matches the 58px above it. An earlier 1238 version ran to
                                     the footer edge and carried dead whitespace.
  Insights and deal reviews carry their post lists because Ryan asked for the latest few posts
  on those two specifically. Events is short because that page only has one upcoming event;
  going further would pull the footer in, so its tile is legitimately shorter than its
  neighbour and that is fine.

  Do NOT try to force one ratio across the five. It is impossible: hero-plus-first-section
  needs about 1.01 on the About page, 1.02 on Events, 0.68 on the SFR product page and 0.69 on
  Insights. A single ratio either cuts content or pads it. That is why the tiles run at their
  natural heights instead. Within a row the rendered heights happen to land close anyway (558
  and 551 in Beat 2, 500 and 367 in Beat 3).

CLEANUP IS DONE, August 21. Everything converted was moved OUT of the repo to
/Users/Ryan/Documents/GitHub/_converted-originals/, which sits beside the repo rather than inside
it, so none of it can be committed. Nothing was deleted, so it is all recoverable. What moved:
five screencapture-*.png page captures, three email-capture-*.png email captures, plus three
superseded WebPs (bcc-market-new-jersey.webp, bcc-deal-review-email.webp and
bcc-deal-review-email-full.webp). Verified after the move: all 16 images referenced by
brick-city-capital.html exist, and images/ has no unreferenced files left outside source/.

THE DEVICE SHELL CAN MOVE FILES BUT NOT DELETE THEM. Earlier notes said cleanup needed Finder.
That is only half true: rm fails, but mv works, so moving unwanted files to a folder outside the
repo is the practical equivalent and does not need Ryan. The mount has to be up for it, which is
intermittent.

macOS SCREENSHOT FILENAME GOTCHA, cost real time. Files named "Screenshot 2026-08-21 at 12.05.55
AM.png" contain a NARROW NO-BREAK SPACE (U+202F) before AM, not a normal space. device_stage_files
returns "does not exist" for a path typed with a regular space, and the failure looks like the file
is missing. Do not retype the path. Rename with a glob through the device shell first
(for f in Screenshot*.png; do mv "$f" simple-name-$i.png; done) and then stage the simple names.

The full-page originals are archived in images/source/ as bcc-*-full.webp, 3.0MB, referenced by
nothing. They exist because the source PNGs were already deleted, so these are the only copies
left to re-crop from. Do not delete them, and do not point the page at them.

Display weight went from 3.24MB to 1.18MB, since each file is now a band rather than a whole
page. Any recrop starts from images/source/, never from the display copy.

TWO CSS TRAPS FOUND AND FIXED HERE. Both are easy to reintroduce:
1. .gallery used grid-template-columns repeat(3, 1fr). 1fr floors at min-content, so a wide
   image blew one column to 568px against two at 379px. It is now repeat(3, minmax(0, 1fr)) at
   every breakpoint, and .frame.has-img carries min-width 0.
2. Placeholders need aspect-ratio AUTO alongside align-self stretch. Stretch makes the height
   definite, and a leftover aspect-ratio then derives the WIDTH from that height, which pushed
   a placeholder to 992px and gave the whole document a horizontal scrollbar. Verified clean at
   1440, 1024, 768 and 420 wide after the fix.
The frame padding was its own trap: .frame.has-img sets padding 0, but .gallery .frame set
padding 16px, and both are two-class selectors, so source order decided it and the gallery rule
won. Images had been sitting in a 16px inset the whole time. .gallery .frame.has-img now sets
padding 0 explicitly, which is a three-class selector and wins outright.

Leverage Homes shows its screenshots WHOLE, via .gallery--full and .mobile-shot, because Ryan
crops those deliberately before sending them. BCC now also shows whole files; the difference
that remains is only that a BCC file is a purposeful band of a page rather than the whole page.

BEAT 4 DIAGRAM WAS REPLACED ON AUGUST 21. The old one was a four-panel attribution chain
(Campaign click -> Broker record -> pricing portal -> Sourced deal) and Ryan said he was
"kind of confused" by it. Fair: it drew an abstract funnel, every panel was the same generic
stack of gray bars, and it never showed a system anyone would recognize.

IT WAS THEN REBUILT A SECOND TIME, SAME DAY. The first replacement was four detailed panels plus
a separate captioned gold band underneath, and Ryan said that one was "a bit confusing" too. The
diagnosis, worth keeping so it does not get rebuilt this way a third time:
  1. GOLD MEANT TWO THINGS. It marked the tag AND the brand buttons (email CTA, Submit), plus a
     solid fill, a left rule, a band line and four nodes. A color doing two jobs does neither.
  2. THE VALUE RENDERED FOUR DIFFERENT WAYS. ?utm_campaign=deal-review, then a dashed box, then
     an unlabeled gold BAR with no text at all, then "Campaign: deal-review". The one thing that
     needed to look identical in four places looked different in four places.
  3. THE BAND WAS A SECOND TIMELINE. Its four captions restated the four panel titles, so the
     eye had two left-to-right sequences to reconcile that said nearly the same thing.
  4. TOO MANY SHAPES. About fifty, for a four-step idea.

IT WAS REBUILT SEVERAL MORE TIMES THE SAME DAY. The short version of the history, so nobody
retreads it: a four-panel version with a separate captioned gold band underneath ("a bit
confusing"), then a sparse four-panel version with one thread ("confusing" in a different way),
then a version with brackets across the top labelling broker-facing versus internal. On the
brackets he first said the perspective was better, then compared it side by side against the
Leverage Homes lead-flow diagram and said the Leverage Homes one was simply better, and asked for
that one built for Brick City with the UTM tracking and the email step added. That is the current
version and it is settled.

THE CURRENT VERSION: a DIRECT COUNTERPART to the Leverage Homes lead-flow diagram, four panels.
Title "Lead flow, from deal review email to Slack alert".
  01 Deal review email    subject bar, a content block, the gold "View full deal review" button.
  02 Scenario form        two labeled inputs, gold "Submit scenario" button.
  03 Salesforce / broker  broker, company, loan amount as light bars, then Stage as a FILLED warm
                          gray bar, mirroring the dark teal Situation bar on Leverage Homes.
  04 Slack / deal alert   dark avatar square, "Broker reengaged", message bars, then an outlined
                          "Open record" pill and a gold dot with "AE responds".

COPIED FROM LEVERAGE HOMES, deliberately, so the two case studies read as a pair: panel
proportions, the small uppercase muted panel header sitting over a hairline, uppercase field
labels, light gray input and value bars, a solid accent CTA, one filled bar for the categorical
field, the outlined pill plus dot for the human action, handoff arrows between panels, and the
numbered captions underneath.

CHANGED ON PURPOSE, all brand-correct for BCC and none of it up for grabs: SQUARE corners rather
than rx 12, because the design system figure on this same page says "square, no radius"; gold
rather than green; Manrope rather than Poppins. DO NOT UNIFY THE CORNERS.

ADDED, and the reason this diagram exists at all: the email panel, and a footer band in every
panel. Each footer is opened by a rule at y 262, carries an uppercase label saying WHERE the tag
lives (In the link / Hidden field / Original campaign / In the alert), and holds an OUTLINED gold
chip containing the literal string deal-review. All four chips are identical. One gold line runs
through all four at y 306 with arrowheads in the gaps.

TWO CHANNELS, TWO MEANINGS, and this is the one place BCC must diverge from Leverage Homes: the
handoff arrows at y 180 are WARM GRAY, not gold. Leverage Homes can spend its green on arrows
because it has no tag thread competing for attention. BCC cannot. Gold means the tag.

The rules, in priority order:
  GOLD IS ONLY THE TAG. The two CTA buttons are the one exception, and they are allowed because
  the tag lives inside the link the first one points at. Never add a third gold meaning.
  CHIPS ARE OUTLINED, BUTTONS ARE FILLED. That is the only thing separating a value from a
  control, so do not fill a chip.
  THE THREAD IS DRAWN BEFORE THE CHIPS in document order, so the white chip fills paint over it
  and it reads as passing behind each one. Reordering breaks the effect.
  THE WHERE LABELS SIT ABOVE THE CHIPS, never beside them. A label placed on the thread's own
  row gets struck through by the line. This was tried and it looked broken.
  REPETITION IS THE DIAGRAM. If a future edit varies the four chips, it has deleted the point.
  USE THEY, NOT HE, for brokers and borrowers. Ryan's instruction, applies to all copy on both
  brand pages, including aria-labels.

REJECTED, so it does not come back: a separate captioned gold band under the panels; brackets
across the top reading "What the broker does" and "What the broker never sees" (he called the
second label weird, and he was right, it made routine internal plumbing sound clandestine); and
a .bc-total summary sentence inside the diagram, dropped because Leverage Homes does not have one
and the numbered captions already close it.

Geometry, so nobody has to re-derive it: viewBox 0 0 1200 440. Panels w 254.5 h 320 at y 20.75,
x 0.75 / 315.25 / 629.75 / 944.25 (step 314.5, gap 60). Content columns start at 20 / 334.5 /
649 / 963.5 and are 215 wide. Panel header y 50, header rule y 62, CTA row y 208 h 30, footer
rule y 262, chip label y 284, chips y 292 h 28 w 110, thread y 306, arrowheads at gap centers
285 / 599.5 / 914. Captions .bc-step y 388 and .bc-cap y 414 at x 0 / 314.5 / 629 / 943.5.

CSS: two classes were added for the captions, .bc-step and .bc-cap, mirroring Leverage Homes'
.flow-step and .flow-cap, plus .bc-fl for the small uppercase muted label used by BOTH panel
headers and field labels, which is how Leverage Homes treats them. Five rules went dead across
these rebuilds and were deleted rather than left to rot: .bc-head, .bc-lb2, .bc-total, .bc-row
and .bc-cell. Only .bc-lb survives from the old set, used once for the Slack message headline.

Verified: no text leaves its 215px column, nothing leaves the viewBox, no document overflow at
1440 / 1024 / 768 / 420, four chips present, and Manrope really loaded rather than falling back.

A NOTE ON THE VERIFICATION SCRIPTS in /home/claude/bcc. fit.js keys off the aria-label prefix,
a hardcoded list of content-column x positions, a column width, and a probe class for the font
check. All four changed across these rebuilds, and a stale copy reported seven false overflows
that were only the previous geometry, then crashed on a class that no longer existed. If it fires
or throws, check it against the current diagram before believing it.

The BCC diagram typeface is settled: Manrope was added to the font link on August 21 and the
.bc-* classes moved onto it. Details and the verification gotcha are in Pending work item 5.

NO PLACEHOLDERS REMAIN ANYWHERE ON THE BCC PAGE. The last one, Deliverability setup in Beat 3,
was filled on August 21 with WORDS rather than an image, at Ryan's call: "i dont think an image
would do it justice anyway, maybe just explain more in detail how i tackled deliverability". A
screenshot of DNS records proves nothing to a reader, which is the same reasoning the .builds
strips already use elsewhere on both brand pages.

It is a four-item .builds strip under the title "Rebuilding the sending, before any of it could
land", after a Beat 3 gallery that dropped to two-up.

REWRITTEN ON AUGUST 21 AFTER RYAN CONFIRMED THE INFRASTRUCTURE. He said: "i did set up records,
created a warmup schedule, and verified with neverbounce (for leverage homes too)". The first
version of this strip was deliberately conservative because none of that was confirmed. It is now
four concrete items:
  Isolated sending domain            m.brkcty.com. Legible in the Gmail header of all three
                                     email captures in that beat's anchor, so the page proves it.
  Authenticated and monitored        SPF, DKIM, DMARC on the sending domain, aggregate reports
                                     coming back.
  Dedicated IP, warmed on a schedule Reputation belongs to us, ramped rather than opened at full
                                     list size.
  Lists verified through NeverBounce Every address checked before a send.

Leverage Homes got the same facts folded into its existing Beat 4 "Email verification" build item
rather than a new strip: NeverBounce named, plus SPF/DKIM/DMARC and the warmed dedicated IP in the
same paragraph. LH already had a builds strip there, so a second one would have been redundant.

DNS VERIFIED INDEPENDENTLY (dnspython, August 21) rather than taken on trust. What is actually
published, so a future session does not have to re-check:
  m.brkcty.com          SPF present, SendGrid includes plus dedicated IP 149.72.90.98.
                        MX Google and Mailgun. NO DMARC record at the subdomain.
  brkcty.com            DMARC p=none, sp=none, EasyDMARC aggregate reporting.
  brickcitycapital.com  DMARC p=quarantine. NO SPF at the apex.
  lvghomes.com          SPF present, dedicated IP 149.72.90.71. DMARC p=none.
So the copy on both pages is accurate as written. Two real gaps were surfaced to Ryan: the sending
domains sit at p=none (monitor only) while the corporate domain is already at p=quarantine, and
brickcitycapital.com publishes no SPF at the apex. Neither belongs in portfolio copy; they are work
items for his day job.

BCC's homepage carries real company metrics ($800M+ closed, 80% close rate, 77% repeat
clients, 1,000+ investors funded). Same call as the Leverage Homes stats: these are COMPANY
numbers, not Ryan's results, so they are not claimed as outcomes anywhere in the copy. They
appear incidentally inside the homepage screenshot, which is fine.

## TWO MACHINES: read this before editing anything
This project has been worked on from two Macs, and the copies diverged. Usernames differ, so
the path tells you which copy you are in:

- /Users/ryanlayton/Documents/GitHub/portfolioRepository  built all the HTML through Aug 19
  and holds the fullest HANDOFF text. Its BCC images were never converted.
- /Users/Ryan/Documents/GitHub/portfolioRepository  did the Aug 21 image conversion, deleted
  the source PNGs, and updated the eight src paths.

Neither copy was ever committed or pushed, so there is no shared ancestor to merge against.
Resolution: the /Users/Ryan copy is the base, because the image work is the harder half to
redo. This HANDOFF.md is the merged text and should be copied over it wholesale. Once that is
done and pushed, delete the other copy or re-clone, and never run two local copies again.

READ THE .git PARAGRAPH UNDER "Environment status" BEFORE ACTING ON THAT RESOLUTION. The
/Users/Ryan copy has no .git, so it cannot push as written, and the two options for fixing that
are laid out there. This is still undecided.

## Environment status
The code-execution VM repeatedly failed to mount this repo (VM_DISK_SPACE_INSUFFICIENT). The
machine had about 13GB free on a 228GB drive, and a pending macOS update wanted 23.29GB and
could not download. Restarting, reinstalling the workspace, freeing space, and temporarily
moving .git out of the folder were all tried; the VM came up exactly once across a long
session. File reads, edits and staging keep working when the VM is down, so image conversion
can be done in the cloud workspace after staging. Deletes and renames on the user's machine
have to happen in Finder. Preview exporting to JPEG at about 80% is the no-tooling fallback.

.git IS PRESENT AND INTACT, ON /Users/ryanlayton ONLY. Verified there by direct file read:
.git/HEAD reads "ref: refs/heads/main" and .git/config holds the origin remote
https://github.com/ryalay/portfolioRepository.git. It was temporarily moved to the Desktop
during mount troubleshooting and then moved back.

The /Users/Ryan copy has NO .git, and that is a real absence rather than a tooling blind spot.
The device bridge does list dotfiles in that folder (.DS_Store shows up in every listing) and
.git is not among them, and a direct path check on it returns "does not exist". An earlier note
here blamed the report on tooling that would not list hidden dotfiles. That explanation was
wrong, and it matters: it tells a future session to distrust a check that actually works. The
two reports were describing two different folders, and both were correct.

THIS CREATES A CONFLICT WITH THE MERGE PLAN ABOVE, WHICH IS STILL UNRESOLVED. That plan names
/Users/Ryan as the base and then says to push once the merged text is in place. That copy
cannot push, because it has no .git. Two ways out, and Ryan has not picked one:
  a) Carry the August 21 artifacts (the eight bcc-*.webp files, brick-city-capital.html, and
     this HANDOFF.md) into the /Users/ryanlayton copy, delete the raw PNGs still sitting in
     that copy's root, and push from there. Nothing has to move except finished files.
  b) Move .git from /Users/ryanlayton into /Users/Ryan and push from /Users/Ryan as planned.
     Fewer files to copy, but it moves the one artifact that is expensive to lose.
Option (a) is the safer of the two, because it never puts .git in transit.

NOTHING IS COMMITTED OR PUSHED. Git HEAD is stale and still contains the old "Owned" label and
the ~18 month timeframes, so the live site does not reflect any of this work. Apple Command
Line Tools would not install, so there is no git binary on the command line; GitHub Desktop
bundles its own and is the way to commit and push. Pushing to main autodeploys to
ryanlayton.com. Push from the merged copy only.

## Page tone and rhythm (design system change, August 2026)
The brand pages used to be one flat canvas colour top to bottom, which read as monotonous
over a long scroll. Both now alternate tones down the page:

  hero -> setup(canvas) -> beat 1(canvas) -> beat 2(field) -> beat 3(canvas) -> beat 4(field)
  -> close(canvas)

Beats 2 and 4 carry .beat--tint, which is background: var(--field). The hairline that used to
sit between beats was REMOVED, because a rule plus a colour change at the same boundary is
redundant. The only place two same-tone sections touch is setup into beat 1, which is
separated by 160px of combined padding and the numbered beat eyebrow.

Hero backgrounds: Leverage Homes is var(--field), Brick City Capital stays var(--obsidian).
An all-dark-heroes version was built and rejected. Reasons, so it does not get retried:
a dark hero over a light body is the most common template on the web and trips the AI Slop
Test in the ui-design skill; obsidian is cold and Leverage Homes is deliberately warm; and
making every hero dark would erase the warm/cold split between the two brands, which is
evidence that Ryan designed differently for two different audiences. The tonal alternation
above was the actual fix for the monotony, since a dark hero only treats the first screen.

The context strip (Role / Timeframe / Scope / Status) now sits INSIDE the hero on both brand
pages, not in its own section below. Reason: a background change should mark a meaningful
boundary, and the strip is part of the cover rather than the narrative, so the tone break now
falls where the story actually starts. Its bottom hairline was dropped because the hero's
background edge is the divider. On Brick City Capital the strip sits on obsidian, so
.hero .context-item .ui-label / .val / .status-live are overridden to the on-dark tones.
The id="work" anchor moved with the strip on both pages; do not drop it.

Timeframes were corrected: Leverage Homes ~8 months, Brick City Capital ~12 months.
Both previously said ~18 months, and git HEAD still contains the stale values plus the old
"Owned" label that DECISIONS replaced with "Scope". Do not restore context strips from HEAD
without checking them against these notes.

## Dots (design system change, August 2026)
Dots are now BULLET MARKERS ONLY. The decorative category dots were removed from hero
eyebrows, beat and section eyebrows, and the "Ongoing" status chip across every page (22
removed). The only dots left are the ones marking items in .callout lists, on
leverage-homes (14) and brick-city-capital (10). The .dot, .dot--ux, .dot--growth and
.dot--systems CSS is still defined and still color-codes the callouts by category, so the
original "category dots are the only circles" rule now applies only inside callout lists.

## Honesty decisions (do not walk these back)
- Brand identity was collaborative: pages say "We designed the brand"; credits lines
  on both brand pages credit "our Creative Marketing Manager" (title only, no name).
- Context strips say "Scope:" (not "Owned:") for Brand · Web · SEO · Email · CRM.
- Socials are the coworker's; CRM has two heavier users. Ryan solely owns websites,
  SEO, email marketing. Salesforce claims are specific builds only.
- Juiced is a client collaboration, NOT employment. On resume it lives under
  Selected Projects. Tag: "UX Design · Client Collaboration".
- KeHE tag: "Enterprise UX · Professional Work" (the word "Shipped" was retired from
  tags; the shipped story lives inside the KeHE page).
- RPEC: Ryan was sole designer & builder (AI-assisted code; no stack disclosure on
  the page, direct answer if asked in interviews).
- No invented metrics anywhere. Real numbers are the top future addition.

## Leverage Homes page: beat assignments (decided, keep stable)
The four-beat arc is unchanged, but which asset proves which beat was reworked so each
beat has exactly one job:
- Beat 1 (Website & UX) owns the first credible impression: brand built from scratch, the
  homepage, and the reusable component system. Its copy no longer introduces situation
  pages. Assets: homepage hero (anchor), a full-width homepage-sections shot (reviews +
  "Why choose" highlights + results bar), and the About page at the mobile breakpoint.
- Beat 2 (SEO) owns the situation pages, because they are intent and keyword capture
  rather than general website craft. This was moved here deliberately: Beat 2 previously
  described search intent in the abstract while the actual pages sat in Beat 1. Its anchor
  is the homepage "Feel stuck? We're here to help" solutions hub, which routes each
  situation to its own page. Assets: solutions hub (anchor), too-many-repairs page,
  relocation page, resources page.
- Beat 3 (Email & Marketing) owns success stories. Considered moving them to Beat 1 (they
  live on the site and build credibility) or Beat 2 (they are pages), and kept them in
  Beat 3: their job is social proof that converts someone still deciding, distributed by
  email and social, which is exactly Beat 3's thesis. Assets: Success Stories index, plus
  one story shown in two parts (the opening/challenge, and the outcome with the closing
  quote from the VP of Acquisitions).
- Beat 4 (Systems) is complete. Lead-flow diagram as the anchor, then the enumerated builds
  strip (Field architecture, Email verification, Campaign segmentation) in place of a gallery.
  See Pending work item 2.

Situation pages: the four are too many repairs, inherited, relocation, tired landlord
(the "foreclosure page" frame was replaced by "too many repairs" at Ryan's request).
Foreclosure still appears in narrative copy and email-variant examples, which is accurate.

Success stories, how they work (documented in Beat 3 copy): closers are interviewed to
surface a specific seller situation and how Leverage helped, that becomes a story used in
email follow-up and on social, and it lives on the site's Success Stories page. Framed as
"we" because it is collaborative and social is the coworker's domain, while the owned
surfaces (email follow-up, the on-site page) stay visible.

## Diagrams (new pattern)
Beat 4's anchor is now a hand-built inline SVG lead-flow diagram: cash offer form ->
Salesforce lead created and routed -> Slack speed-to-lead alert with a "Claim lead" action
(the Claim lead button is confirmed real). It is inline rather than a file so it uses real
webfonts, scales crisply, and adds no image weight. Poppins was added to the page font link
for it.

Decision on which design system diagrams use: diagrams are drawn in the BRAND's system
(Leverage Homes navy #103255, teal #247573, green #38B992, Poppins, 8 to 16px radius), not
the portfolio's Architectural Narrative system. Reason: a diagram sits inside a frame
surrounded by brand-colored screenshots, so portfolio-system colors would make it the one
alien object on the page. The frame and the callouts around it stay Architectural Narrative.
BCC diagrams should therefore use BCC's system (Manrope, #131313, #90A5BA, gold #BC983B,
0px radius), which is consistent with the deliberate warm/cold split.

A first draft was made in the portfolio system and rejected for the reason above. A
ChatGPT-made version was also rejected: right palette, but rounded-rectangle-with-drop-shadow
and icon-tile-above-heading are AI-slop tells banned by the ui-design skill.

The brand systems for both companies live in the ui-design SKILL, not in this repo. Load
that skill before doing any brand-colored work. Claude does not carry memory between chats,
so anything not saved in a skill, this file, or project knowledge is lost between sessions.

LH tokens VERIFIED against the live lvghomes.com markup (not just the skill): #103255 navy,
#247573 teal, #38B992 green, teal-to-navy gradient, Poppins 300 to 700 plus Varela 400.
The site ships a real semantic class system: text-display-large, text-heading,
text-subheading-medium, text-subheading-small, text-body, text-caption-m,
text-section-label, button, link-button, card, icon-frame (is-small / is-medium /
is-extra-small), layout-grid (is-2-col through is-6-col), section-label, section-header,
padding-section-large / medium / small, container-default, background-blue-green-gradient-
horizontal, background-offwhite-grid. The logo is images/lh-logo.png (196x23, the
Size=Small Color=Color export). A larger export would be better for retina.

QA FINDING, not yet fixed on the live site: #BC983B (Brick City Capital's gold accent)
appears inside Leverage Homes markup, in the .icon-frame.is-secondary arrow on every
"Get my cash offer" button and in all four "Why choose" card icons. Likely a leaked shared
component or a copied embed. Worth checking in Webflow.

Still unverified in the diagram (Ryan to confirm, do not present as fact): how leads are
routed and segmented in Salesforce (by situation, territory, round robin), what the cash
offer form actually collects, and any real speed-to-lead timing number. No timing claim is
made anywhere because inventing one would break the no-invented-metrics rule.

## Image handling decisions
- Company stats (1,000+ homeowners helped, $400M+ in clients' pockets, 21-day average
  close, 200+ five-star reviews) are real and live on the LH site, but they are COMPANY
  numbers and not Ryan's results, so they are not claimed as outcomes anywhere in the
  case study copy. The solutions-hub anchor was cropped to exclude them. They do appear
  incidentally in the full homepage-sections screenshot, which is fine because that image
  is presented as page design Ryan built rather than as his metrics.
- LEVERAGE HOMES: screenshots are shown WHOLE. Ryan crops them deliberately before sending,
  so do not crop further. Two display patterns were added to leverage-homes.html for this:
  .gallery--full (two-column grid, natural height, no object-fit cropping) for full-page
  screenshots, and .mobile-shot (centered, max-width 340px, hairline border) for phone
  screenshots. The standard 4:3 .gallery tiles crop to the top and are only for
  placeholders or small artifacts.
- BRICK CITY CAPITAL: as of August 21, each file is a purpose-built crop and the CSS does not
  crop at all. The full rules, the exact crop windows, and why each boundary was chosen are in
  the "CROPPING WAS REVERSED ON AUGUST 21" block in the Brick City Capital section above. Read
  that before editing a BCC image or frame. Recrops start from images/source/bcc-*-full.webp.
  The old .crop-30 and .crop-28 classes no longer exist.
- Empty placeholder tiles were removed from beats that now carry full screenshots, so real
  images do not sit beside empty boxes. They can return as real images later.
- The only image that was pixel-cropped is images/lh-solutions-hub.webp (its source PNG is
  gone). Ryan chose to keep that crop as-is.

## Current title and history
UX Manager, Leverage Companies, May 2025 to present. Before: IT & Marketing Manager
(Jan to May 2025), Tech & Marketing Analyst (Oct 2024 to Jan 2025).

## Pending work
The site is deployed and live on DigitalOcean, and resume.pdf is the current version.
Remaining items are:
1. RPEC card image: images/card-rpec.png does not exist yet (card shows broken on
   homepage until added). Needs a scrubbed portal screenshot in a laptop mockup,
   matching the other cards. Also 3 placeholder frames inside rpec.html.
2. Beat 1 is DONE. The Component library slot is now a hand-built design system graphic
   (inline SVG, LH brand system) showing the real logo, color tokens, Poppins type scale,
   and components with the actual class names they ship under. The Brand system frame was
   cut (the brand already shows through every page screenshot) and the Cash-offer form
   frame was cut (that form is visible in the hero anchor). Beat 2 still needs the
   inherited and tired landlord pages plus Search Console. Beat 4 (Systems) needs nothing
   further: its anchor is the lead-flow diagram and its three gallery frames were
   deliberately replaced by the enumerated builds strip (Field architecture, Email
   verification, Campaign segmentation), because Salesforce config screenshots show nothing
   readable. Verified in the markup: zero placeholder frames remain in LH Beat 4. Do not add
   gallery frames back to it.
3. Brick City Capital: thirteen crops plus two drawn figures are placed. The marquee shot is the
   interactive lending map, the Beat 2 anchor. ZERO placeholder frames remain, verified in the
   markup: none. Every frame on the page is real. The drawn figures are the Beat 1 design system
   and the Beat 4 attribution chain.
4. DONE August 21. loading="lazy" is now on all eight BCC images and all ten Leverage Homes
   images, which is what the working conventions below asked for.
5. DONE August 21. Manrope was added to the brick-city-capital.html Google Fonts link at
   weights 400, 500 and 600, and .bc-head, .bc-lb, .bc-lb2, .bc-total and .bc-btn moved off
   Inter onto it. .bc-tag stays monospace on purpose. Both diagrams now match BCC's brand
   system on type as well as colour and radius.
   Verified properly, which took a detour worth recording: Google Fonts is unreachable from
   the Cowork cloud container (ERR_TUNNEL_CONNECTION_FAILED), so a first render "passed" only
   because NEITHER font loaded and both versions fell back to the same system face. The real
   check needs the font files inlined locally, via npm install @fontsource/manrope
   @fontsource/inter, base64 into @font-face rules, then render. Any future font or webfont
   check in this container has to do that, or it proves nothing.
   Result: Manrope runs slightly NARROWER than Inter at these sizes rather than wider, so
   there was never a viewBox risk. Widest label went 673px to 648px in the attribution
   diagram and 502px to 479px in the framework diagram. Zero text nodes outside either
   viewBox, confirmed by getBBox against viewBox.baseVal in both versions.
6. Real performance metrics, when available, are the highest-value content addition. Note
   the company stats above are deliberately not used as Ryan's outcomes.

## BCC full-page read-through (August 22) and the copy rules it produced

Ryan asked for a step back: does it flow like a story, does it make sense with no context, is it
skimmable, is the order logical. Verdict: the spine is strong and the order is right (build the
destination, make it findable, drive traffic to it, instrument it). Five things were fixed.

  THE BEAT HEADLINES ARE THE STORY SPINE. Keep them chained and keep them distinct:
  01 "The first thing we needed was somewhere credible to send people."
  02 "Then we needed people to actually find it."
  03 "Next we needed a way to stay in front of the ones who weren't ready yet."
  04 "And we needed infrastructure to make all of it repeatable."
  Beats 2 and 3 both opened with "Then we needed", which flattened four rungs into a list. Beat 3
  is now "Next". Do not let two beats share an opening word again.

  DEFINE DSCR ONCE, EARLY. It appeared about ten times, including the hero, and was never
  explained. A reader outside real estate lending was lost by the second paragraph. The setup
  paragraph now opens with it: the loan qualifies on what a property earns in rent rather than on
  the borrower's own income, so the customers are investors and the brokers who place their deals.
  Do not delete that sentence to save space. Same rule for other insider shorthand: "AE" is now
  spelled out as account executive on first use. LTV and non-warrantable condo appear only inside
  screenshots and alt text, which is acceptable.

  NO DANGLING SCOPE CLAIMS IN THE HERO. The deck and the setup both promised "pricing
  infrastructure", left over from when the page discussed the pricing portal. With that removed
  the page delivered nothing against it. Both now say Salesforce and attribution, which is exactly
  what Beat 4 shows. Whenever a beat's content changes, re-read the hero deck against it.

  THE DESIGN SYSTEM FIGURE MUST BRIDGE INTO BEAT 2. On its own it is hex values and class names
  with no stated reason to care. Its caption now ends by saying the state pages are assembled from
  these pieces rather than designed one at a time, which is both true and the reason a 46-state
  footprint was buildable. That sentence is a seam weld between beats 1 and 2, not filler.

  SKIMMABILITY IS ALREADY GOOD and comes from the bold callout leads. Reading only the bold
  fragments top to bottom still yields a coherent argument. Preserve that property: every callout's
  bold lead should carry the claim on its own, with the rest of the sentence as support.

  KNOWN IMBALANCE, ACCEPTED BY RYAN. Beat 3 carries 12 callouts plus a 4-item strip against 4
  callouts each in beats 1, 2 and 4, so it is roughly double the reading weight. It was offered for
  trimming (the four index-and-events callouts are the most expendable, since the intro paragraph
  already argues interconnection in prose) and he said to leave it: "i think its ook". Do not trim
  it on your own initiative.

## BCC Beat 3 order (fixed August 22, do not shuffle it back)

Ryan: "the section about email sending and domain authentication and stuff is separate from the
emails shown in the beginning of that section... the talk about rebuilding sending is under
website screenshots". He was right. The deliverability strip had drifted to the very end of the
beat, so it sat under the deal-review and index screenshots while describing the three emails at
the top. THE ORDER IS NOW, and this is the correct one:
  1. intro copy
  2. .anchor: the three email captures + four callouts
  3. .section-shot: "Rebuilding the sending, before any of it could land" (the four-item strip)
  4. .section-shot: "One deal review, end to end" + four callouts
  5. .gallery: deal reviews index and events + caption + four callouts
The strip's own closing line, "None of the campaigns above land without them", and its first item,
"It is visible in the header of every send above", both now point at the emails directly overhead
rather than at a screenshot of a blog index. Those two sentences are why this order matters.

THE THREE EMAIL CAPTURES WERE READ PROPERLY, and they contain more than the page was using.
Verified, all three: sender is "Brick City Capital <sales@m.brkcty.com>" in every Gmail header, so
the isolated-subdomain claim is provable three times over. All three share one template: logo
lockup, a hero band with a bold statement, body copy, a structured data block, then a dark
"Submit a deal" CTA. Subject lines are "The answer to the zoning objection was in the appraisal
report", "How Borrowers Qualify When DSCR Doesn't Work", and "9,447 institutional homes listed.
Half with price cuts."
TWO FINDS worth keeping:
  The market update carries THE BRICK CITY MINUTE, a video block with a thumbnail and "Both
  numbers in 60 seconds", fronted by a named VP. That is real content-and-media interconnection,
  and it is now callout 3 on the email anchor.
  The deal review email is built from the SAME FILE as the deal review page crops further down the
  beat: $1.05M, Chicago, 75% LTV, 16 days, legal nonconforming. Callout 4 now says so explicitly,
  which ties the two sections together instead of leaving the reader to notice.
The old callout 3, "Sent from an isolated subdomain", was CUT. With the strip now sitting directly
beneath the emails it repeated the strip's first item word for word. Do not add it back.

## Credibility and interconnection copy (added August 22, both brand pages)

Ryan asked for the case studies to carry the trust argument explicitly: that the work shows the
company has done this many times before, that it explains the process, and that all the content
and media is interconnected. He then asked for the same treatment on Leverage Homes. Both are done.

EVERY CLAIM BELOW WAS READ OFF THE ACTUAL SCREENSHOTS FIRST rather than assumed. Verified detail,
so a future session does not have to re-open the images:
  BCC deal review page: a HOW WE EXECUTED timeline (WEEK 1 file intake and appraisal transfer,
  WEEK 2 underwriting the legal nonconforming issue, DAY 16 closing), a WHY THIS MATTERS section
  explaining nonconforming zoning generally, a 16 days stat on a $1.05M four-family refinance, a
  photographed quote from the VP of Originations, and a WHO SHOULD BRING US DEALS LIKE THIS block
  naming three broker situations.
  BCC deal review index: headline "The deals behind our lending portfolio", entries dated Aug 17,
  Jul 17, Jun 23 and Jun 9 2026, each headline leading with the number and the obstacle, spread
  across Chicago, Los Angeles and Atlanta, and a recurring note that another lender had already
  failed on the file.
  LH success story: a LOCATION / PROPERTY TYPE / CHALLENGE strip at the top (Irvington NJ,
  Single-Family, Stalled Probate), a "Get your own cash offer" CTA above the fold, THE CHALLENGE
  narrative, an itemized THE OUTCOME block, a photographed quote from the VP of Acquisitions, and
  a CONSIDERING YOUR OPTIONS block that names the situation and offers a call.
  LH success stories index: subhead "Whatever your situation looks like, chances are we've worked
  with someone in a similar spot", six or more dated stories, and the closer who handled each one
  composited into the card photo, with the same faces recurring across stories.

WHAT WAS ADDED. BCC gained a fourth Beat 3 intro paragraph carrying the credibility argument and
the interconnection thesis, plus two callout sets on sections that previously had captions and no
annotation: four on the deal-review pair (process on the page, the constraint named, the VP quote,
the who-should-bring-us-this ending) and four on the index and events pair (the library campaigns
draw from, the dates, the events page, everything feeding one funnel with one tag).
LH's success-story block was split from one big .gallery--full holding four children and two
captions into TWO annotated .anchor blocks, "One success story, end to end" and "Where every
story lives", each with four callouts. Both captions were dropped because the callouts say more.
This makes LH structurally match BCC, which is the standing rule.

TWO NAMED PEOPLE APPEAR IN THESE SCREENSHOTS, the VP of Originations at BCC and the VP of
Acquisitions at LH. Both are referred to BY TITLE ONLY in all copy, never by name. Keep it that
way. Their faces are already in the screenshots, which is fine, but the portfolio should not put
a real colleague's name in its own prose.

ONE THING TO RAISE WITH RYAN: the Loan Machine nav item is visible inside several BCC screenshots
(the deal review index capture, among others). His instruction was not to TALK about it, and no
copy does, so this is being treated the same way as the company revenue metrics that appear
incidentally inside the homepage screenshot. If he wants it gone from the images too, those crops
need masking or recapturing.

## The six older case studies (spot, juiced, kehe, rpec, gighub, streeteats)

Two changes on August 22, both asked for by Ryan.

PHONE MOCKUPS WERE OVERSIZED AND UPSCALED. He noticed them rendering "really big". The cause was
.frame img { width: 100% } inside a half-width two-column row: a portrait phone stretched to the
full column, which at a 0.495 aspect made it ~1150px tall AND scaled it past its own resolution.
showcase2.webp is only 358px wide natively, showcase3 is 368, gighubmock1 is 471.
THE FIX, and why it is a height cap rather than a width cap:
  .feature-media img / .set-media img { width: auto; max-width: 100%; max-height: 640px; }
One rule covers both orientations. A tall phone is bounded by height and shrinks; a wide
screenshot is still bounded by max-width. width:auto guarantees nothing is scaled UP. Measured:
showcase2 renders 319x640 (no upscale), showcase1 1208x705 renders 568x331 (unchanged).
THIS IS STILL IN PLACE. Do not undo it.

JUICED FEATURE ROWS: media column is 6fr against 4fr text, and the flipped template is reversed
to 4fr 6fr so the wide column follows the media (with order:2 the media lands in grid cell 2).
The outer .frame chrome inside .feature-media was removed, since it put a padded bordered box
around an image that already had its own 1px edge. The screenshots went from ~518px to 682px out
of a 1600px source. STILL IN PLACE.

CONTAINER WIDTH: TRIED NARROW, REVERTED. On Aug 22 the container went 1200 -> 900 so the capped
text measures would fill it, with a .bleed utility letting media rows break back out to 1160.
Measured well (text fill 46% -> 61-77%, no overflow at six widths) and Ryan still said "im not a
big fan of how it looks now. bring them to the same width they were before". Reverted to 1200 and
the .bleed utility was deleted, because at a 1200 container a 1160 bleed would make media rows
NARROWER than the plain container. DO NOT REINTRODUCE EITHER. Note streeteats.html has an
unrelated pre-existing comment containing the word "Full-bleed"; that is not the utility.

THE ACTUAL FIX HE WANTED WAS FULL WIDTH, NOT NARROWER. His words: "all this stuff can just be
vertically stacked and span full width". So the caps came off instead of the container coming in:
  .measure          62ch -> none
  .sec-head         26ch (24ch on juiced) -> none
  .hmw .statement   26ch -> none
  .decision-note .statement (kehe) and .outcome-note .statement (rpec)  30ch -> none
.hero-statement KEEPS its 22-24ch cap on every page. A deliberately short hero line is a
different thing and he never complained about it.

MEASURED CONSEQUENCE, flagged to him rather than silently softened: body copy now runs about 123
characters per line at a 1440 viewport, and about 153 on kehe whose prose font is narrower.
Comfortable reading measure is 45 to 75 characters and the usual ceiling is about 85. If he ever
says the paragraphs read long, the fix is to cap .measure alone at 85ch (roughly 760px, 63% of
the container) and leave every heading full width. Do not reintroduce a container change for it.

SPLIT ROWS ARE THE FINAL ANSWER, and they are what he actually wanted. His request: "cant you put
what is juiced on the left, body on the right, then my role on the left, that body on the right?"
.split is a 4fr / 8fr grid with a 56px gap. LEFT = the label side (eyebrow plus heading, a bare
subhead, or a note's ui-label). RIGHT = the content that follows it.
WHY IT WORKS NOW WHEN THE EARLIER ATTEMPT DID NOT, and this is the whole lesson:
  1. IT ONLY WORKS AS A STACK. The first attempt converted some blocks and left others full width,
     so the page carried three alignment systems and every converted row looked like a mistake.
     Now EVERY label-and-content pair in a container becomes a row, so the left column reads as a
     deliberate label column even when the label is as short as "My role".
  2. THE CAPS ARE OFF. In the first attempt .measure was still 62ch, so prose sat at 552px inside
     a 763px column and left a gap INSIDE the right column. Double-narrow. With the caps removed
     the right column fills.
  3. Continuation prose with no label of its own gets .split--cont, an empty left cell, so every
     paragraph on the page shares one left edge. Verified: all long paragraphs start at x=557.
Row counts: spot 9, kehe 5, rpec 4, juiced 4. Headings step down inside a split (headline-lg to
36px, headline-md to 28px) because a 48px display line in a 383px column wraps to four cramped
lines. gighub and streeteats got ZERO rows, correctly: their text lives in .set-note captions
inside media rows, not in label-and-content pairs.
SIDE EFFECT WORTH KEEPING: this fixed the reading measure for free. Body copy went from about 123
characters per line at full width to 78, which is inside the comfortable 45 to 75 band's upper
edge. The earlier full-width state was the readability cost of pleasing the eye; splits do both.

BUILT WITH AN HTML PARSER, AND THIS MATTERS. A first pass at the same conversion used regex and
silently corrupted three of the four files: the wrapper insertion swallowed closing tags, and
three paragraphs on spot.html ended up detached from .container-large entirely, rendering at 1376
and 1440px edge to edge. It was caught by measuring paragraph ancestry, not by looking at the
page. The files were restored from the device copies and redone with BeautifulSoup. DO NOT
RESTRUCTURE MARKUP WITH REGEX. The check that catches it: assert every long paragraph has a
.container-large ancestor and renders under about 820px.

FOUR CORRECTIONS AFTER SEEING IT RENDERED, all from Ryan spotting it:

  1. LINES AND BOXES: A DISTINCTION WORTH KEEPING. "you can remove all these lines and boxes"
     was about the .stats band, and I over-applied it to the .insight list as well. He came back
     with "some lines here are ok" and put those back. The rule:
       DECORATIVE FRAMING GOES. The ink rules above and below .stats, the vertical hairlines
       between stats, and the same ink rules on .hmw. Spacing carries that separation now.
       SEPARATORS THAT DIVIDE A LIST INTO ITEMS STAY. .insight keeps its border-bottom and
       .insights keeps its border-top, so the list reads as one list with items in it.
       The section hairlines (.sec + .sec) also stay; he never flagged those.
     The test to apply before deleting a rule: is it framing a block, or is it dividing repeated
     items from each other. Framing is decoration. Dividing is structure.

  2. TWO GRIDS WERE STACKED, and that was the real cause of "spacing and hierarchy is a bit
     confusing". .insight was 1fr 1fr while .split rows above it were 4fr 8fr, so the right column
     started in a different place on adjacent rows. .insight is now 4fr 8fr with a 56px gap and
     align-self start, matching .split exactly. VERIFIED: every two-column row on spot now starts
     its left column at x=120 and its right column at x=557. If a new two-column component is ever
     added to these pages, give it 4fr 8fr / 56px or it will break the grid.
     Also: .insight .pain was 26px Playfair sitting directly under a 28px Playfair heading, so a
     list item and a section heading read as the same level. .pain is now 21px. And a .subhead
     inside a split was pushed down 48px by its own margin-top, which both misaligned it from its
     body and opened a 96px hole; .split .subhead now has margin-top 0.

  3. .split--cont WAS A MISTAKE AND IS GONE. The idea was that a paragraph with no label of its
     own would take an empty left cell so every paragraph shared one left edge. In practice it
     indented hero decks and standalone paragraphs into the right column with a large void beside
     them, which Ryan flagged twice ("layout is weird here too"). All eight of those wrappers were
     unwrapped across the four pages. Standalone prose now sits at the container's left edge.
     What replaced it: ONE READING MEASURE. .measure is 78ch, which is about the same width as the
     split body column, so a paragraph reads at the same width whether it is inside a split or at
     the left edge. .hero-sub is capped tighter at 62ch, because at the hero's larger size 78ch
     came out at 868px and about 89 characters. Result across all four pages: 70 to 71 characters
     per line, down from 123 at full width.

  4. A LONE EYEBROW IS NOT A HEADING. kehe's reflection section had a small-caps eyebrow, "What It
     Taught Me", with no h2 under it, so the converter left the eyebrow full width and indented the
     body. Ryan: "this should be the bigger header instead of the small eyebrow font". It was
     promoted to h2.headline-md.sec-head and now pairs with its prose as a normal split row. RULE:
     if a section has an eyebrow and body but no heading, promote the eyebrow rather than letting
     it try to hold a label column on its own. Only kehe had this shape.

THREE MORE PASSES ON THE SAME SECTIONS, and the last one is the rule that matters:

  A. BODY TEXT AT TWO LEFT EDGES was the actual cause of "still feels disorganized". Inside one
     section, split bodies sat at x=557 while a leftover paragraph sat at x=120, so the section
     had two competing text columns. .split--body now wraps those leftovers in a row with an empty
     label cell, putting them in the body column with everything else.
     THE RULE THAT MAKES THIS SAFE, and it is what the earlier .split--cont got wrong: only
     indent a labelless paragraph when its container ALREADY RUNS SPLIT ROWS. Hero containers have
     no splits, so a hero deck keeps the container's left edge and is never pushed right. That
     one condition is the whole difference between this working and the version Ryan rejected.
     Verified on spot: body paragraphs now sit at 557 (ten of them), with 120 for labels and
     531/752/941 belonging to component grids that legitimately have their own columns.

  B. VERTICAL RHYTHM OPENED UP. "maybe vertically space everything more". Rows were 36px apart,
     close enough to the gap inside a row that a section read as one dense block. Rows are now
     64px apart and the component bands (.stats, .findings, .insights) get 80px above and below so
     they read as their own beat rather than as another row.

  C. GIGHUB AND STREETEATS WERE LEFT BEHIND. When .measure moved from none to 78ch, only the four
     pages with split rows were updated, so those two kept a full-1200px hero paragraph. Ryan
     caught it: "the paragraph here is too wide make it like the other case studies". Both now
     carry .measure 78ch and .hero-sub.measure 62ch. ALL SIX hero decks now measure 690px and
     about 70 characters. If a measure or grid value changes again, change it on all six.

STATS MOVED INTO THE BODY COLUMN, TWO UP. "could these stats be all on the right side of the page
with the rest of the body? its fine if its 2 on the top row and 1 on the bottom". .stats is now
wrapped in a .split--body row, so it starts at x=557 at 763px wide, and it runs repeat(2, 1fr)
with a 40px row gap, giving two on the top row and one on the bottom. The per-.stat padding that
used to space the columns was replaced by a grid gap, and its margin is 0 because the wrapper row
already carries the 64px spacing.
A SILENT NO-OP WORTH KNOWING ABOUT: the earlier pass that bumped component bands to 80px matched
on the string ".stats { margin-top:", but margin-top is third in that rule, not first, so .stats
never got the bump while .findings and .insights did. String-anchored CSS edits fail quietly like
this. Check the rendered value, not the fact that the script ran.

HOW MIGHT WE IS FULL CONTAINER WIDTH, and the label is now inside the sentence. Ryan asked for
both: "can the how might we's span full container width and include how might we in the sentence".
The separate small-caps ui-label is deleted and the statement reads "How might we help drivers
make a quick, informed decision on where they should park?" on spot and the equivalent on juiced.
THIS IS THE ONE BLOCK ON THESE PAGES THAT IS DELIBERATELY NOT A TWO-COLUMN ROW. It is a single
display line and it commands the whole measure. On juiced it had to be hoisted out of a
.split--body wrapper, which had caught it because .hmw carried the "measure" class. If .hmw ever
regains that class, the leftover-prose pass will swallow it again.

A CHECKER FALSE POSITIVE, fixed: structchk.js flagged the how-might-we line as a too-wide body
paragraph. Display type is supposed to span, so the check now skips .statement and anything inside
.hmw. Spot's line slipped through only because it is 83 characters and the check ignores anything
under 90, which is exactly how a heuristic hides a rule you did not mean to write.

CHART FRAMES on spot's .findings had the same problem juiced's features had: a bordered grey card
wrapped around an image that already has its own white plate and edge. .finding .frame now carries
padding 0, no border, transparent background, with object-fit contain on the image.

Verified on all six pages at 1440 / 1024 / 900 / 420: no document overflow, no image rendered
above its intrinsic width, no image taller than 660px.

## VOICE: Ryan writes in TWO registers, and this was measured not guessed

Asked on August 22 to make the brand pages sound like the older case studies. Measured markers per
1,000 words across all five:
                contractions   you/your   rhetorical questions
  spot.html          7.1          6.2            7
  juiced.html        3.7          9.3            2
  kehe.html          0.0          0.0            0
  brick-city         1.0          0.0            0
  leverage-homes     4.2          5.4            0

THE FINDING: he already writes in two registers, and it tracks the work, not the year. spot and
juiced are consumer and student projects, and they are conversational: second person, rhetorical
questions, contractions, scenario openings ("Say you found parallel parking downtown..."). kehe is
his professional enterprise case study and it is formal: zero contractions, zero second person,
zero questions, flowing sentences with parenthetical detail.
So BCC's formality is CORRECT. Its closest comparable is kehe and it matches it. Leverage Homes
sits between juiced and spot on second person, which is right for a consumer brand. DO NOT make
BCC conversational to "match the portfolio". That would break the register it should be in.

WHAT ACTUALLY DEPARTED was three habits of mine, not the register:
  1. APHORISTIC CALLOUT LEADS. "The coverage question, answered first:", "Spend becomes
     measurable,", "Plain-language headline", "Third-party trust up front:". Compressed noun
     phrases and epigrams with NO counterpart anywhere in Ryan's own writing. Fourteen were
     rewritten as ordinary sentences with a verb: "The coverage question gets answered first,
     because...", "The visual language is institutional, which signals...". Keep callout leads as
     sentences. The bold lead still has to carry the claim on its own, which is the skimmability
     rule, but it should read like a clause, not a headline.
  2. NO REFLECTIVE CLOSE. kehe ends personally: "Until KeHE, I had designed consumer interfaces
     for people like me... It also changed my perspective... That lesson still shapes how I
     approach design work today." spot has a "What I learned" section. BCC and LH both end on
     "Where it's headed", which is forward-looking but impersonal. THIS IS THE REAL REMAINING GAP.
     It was deliberately NOT written for him: a reflection is his own experience, and inventing a
     personal lesson on a portfolio is the one thing that cannot be faked. Raised with him instead.
  3. Contractions were checked and left alone. BCC at 1.0 per 1k is in line with kehe at 0.0. Do
     not add contractions to BCC to hit some average.

## COMING BACK TO THE HOMEPAGE: two cards Ryan wants added

TWO ITEMS HE ASKED TO BE NOTED on August 22. Neither is done. Both belong in the third homepage
section, "Interface Design & Selected Projects".

  1. RPEC PORTAL, RETURNING. It was pulled from the site on August 22 as a temporary removal, in
     his words "for now", and he immediately added that he does want it back "at some point soon".
     WHAT WAS DONE: only the card in index.html was deleted. rpec.html IS STILL ON DISK,
     untouched, and nothing else in the repo ever linked to it, so restoring it means putting one
     card back. DO NOT DELETE rpec.html. Before it goes back it still needs images/card-rpec.png,
     which has never existed and was the reason that card rendered broken, plus the 3 placeholder
     frames inside rpec.html.
  2. DEALS AND DOLLARS WEBSITE, to be added. A site he wants represented on the portfolio. No
     assets, copy, screenshots or scope notes yet. Ask him what the work was and what he owned on
     it before writing anything, since it is not clear from anything currently in the repo whether
     this is Leverage Companies work or something separate.

THE GRID MATH, so this does not surprise anyone: that section is still class .grid-4 but now runs
THREE columns, because removing RPEC left three cards (KeHE, StreetEats, GigHub) and four columns
would have left a hole. Adding both items back makes FIVE cards, which does not divide into three
or four cleanly. Decide the column count then, and consider renaming the class, since .grid-4
already lies about itself.

CARDS IN A ROW ARE NOW EQUAL HEIGHT, and this is a real fix rather than a coincidence of the
current copy. .card was display:block, so a grid row stretched the card but the body stayed at
content height; a card whose tag line wrapped to two lines ("Enterprise UX · Professional Work"
at four columns) made its neighbours look short. .card is now flex column with .card-body at
flex: 1 1 auto, so every card in a row ends level whatever the copy does. Verified at 1440 / 1200
/ 1024 / 760 / 420: every row equal, no overflow. Keep this when the two new cards go in, because
five cards will almost certainly reintroduce a wrapping tag line.

## Working conventions
- Screenshots go in as WebP, quality 82, max 1600px wide, lazy-loaded below the fold.
- Placeholder frames are intentional-looking; swap the .shot div for an <img> inside
  the .frame (use .frame.has-img pattern from leverage-homes.html).
- Anchor images get callout annotations written to match what is actually visible.
- CALLOUT SPACING IS FIXED AND BOTH BRAND PAGES NOW MATCH. A callout list belongs to the image
  ABOVE it, so the spacing has to say so: .callout-list gets margin-top 16px (--stack-md), and
  the clear air goes on .anchor { margin-bottom: 64px }. BCC had it backwards, 48px above and
  nothing below, so the bullets floated between two images and Ryan could not tell which one they
  described. Adjacent margins collapse, so a .gallery or .builds following an anchor still sits
  at 64px rather than 112px. Do not raise the top gap again.
- CALLOUT DOTS: .callout .dot { margin-top: 9px }, which is (26px line-height minus 8px dot) / 2,
  so the dot centres on the first line of its text. BCC had 6px and sat 3px high. Ryan caught it
  by eye. If .body-md line-height ever changes, recompute this.
- STATE PAGE TEARDOWN IS NOW HALF AND HALF. It was a fixed 400px screenshot column beside a
  flexible notes column, which made a 4220px-tall page unreadably small. Both columns are now
  minmax(0, 1fr) with the same 48px gap, so the screenshot renders 576px wide at a 1440 viewport.
  TWO THINGS HOLD IT TOGETHER, do not undo either:
  align-items must stay STRETCH (the grid default). The row height comes from the image, .td-notes
  stretches to match it, and the percentage tops on .td-note resolve against that height. The old
  min-height: 1199px was the image height at 400px wide and is wrong at every other size, so it
  was deleted. Do not reintroduce it and do not set align-items: start.
  The img needs its width and height ATTRIBUTES (1408 and 4220). They are load-bearing rather
  than decoration: the image is lazy, and without the intrinsic ratio reserved up front an
  unfetched image gives the row zero height, so every note collapses to the top and overlaps.
  Measured at a 900px viewport: 4 overlapping notes before the attributes, 0 after.
  Verified at 1440 / 1200 / 1024 / 900: notes column height matches the image height exactly,
  zero overlaps, every note lands inside the image.
- Keep all pages sharing the same class names so a future native Webflow rebuild
  stays possible.
- Image intake workflow: Ryan drops raw PNGs in the repo ROOT, they get converted with
  Pillow (quality 82, method 6, resize only if wider than 1600px), saved into images/ with
  a descriptive lowercase hyphenated name, and the source PNG is deleted. Current LH image
  names: lh-homepage-hero, lh-homepage-highlights, lh-solutions-hub, lh-repairs-page,
  lh-relocation-page, lh-resources-page, lh-success-stories-page, lh-success-story-open,
  lh-success-story-close, lh-about-mobile. Replacing an image by reusing its filename
  needs no HTML change.
- Pasting an image into chat does NOT create a file that can be converted. It has to be
  saved into the repo folder as an actual file.
- Naming: any file Ryan sends gets renamed to the repo convention (lowercase, hyphenated,
  brand-prefixed) rather than left as a screencapture or IMG dump name.

## Environment notes (local Cowork sessions)
- This work has been done in LOCAL Cowork sessions, which run on one machine and do not
  sync to other devices. To continue on another laptop: connect the same folder there and
  have the new session read HANDOFF.md and DECISIONS.md first. Keeping this file current is
  the actual mechanism for moving between devices.
- The Linux VM that runs shell commands and image conversion is separate from the file
  tools. It repeatedly failed to start ("not enough disk space") and then repeatedly failed
  to mount this repo, while file reads and edits kept working the whole time. Restarting
  the app, reinstalling the workspace, freeing disk space, and temporarily moving .git out
  of the folder did not fix the mount; it eventually started working on its own. If the VM
  is unavailable, file edits still work, and Finder can be used for moves and deletes.
- Deleting files needs delete permission granted for the folder, and moves and renames need
  the VM. When the VM is down, do renames and deletes in Finder.
- Git note: the .git folder carries the old 863MB history as loose objects (the old ocean
  videos and images). If the repo ever needs slimming, the fix is a fresh single-commit
  history: back the folder up, delete .git, git init, commit, then force push to the same
  remote. Ryan has confirmed he does not need the old history. Apple Command Line Tools
  were not installed at the time (the installer errored with "not currently available from
  the Software Update server"), so git was unavailable locally; GitHub Desktop has git
  built in if needed.
