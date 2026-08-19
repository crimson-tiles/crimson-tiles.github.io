# crimson tiles gameplan

## what this doc is

planning surface for "how does crimson tiles supremely pop off" across the three growth axes: cs project portfolio, NA riichi community involvement, and new member recruitment. complement to `ARCHITECTURE.md` (which is the software-side reference).

local-only for now. like the architecture doc, this is cosmo's planning surface, not yet a contributor-facing artifact.

audience: cosmo today, future-cosmo when re-orienting, joseff if/when looped in.

---

## the three growth axes

- **cs project portfolio** — credible "we do real work" surface for recruiting CS undergrads, generating resume material, and legitimizing SGA asks
- **NA riichi community involvement** — travel to tournaments + eventually host one + community goodwill (american mahjong ladies, neighboring clubs)
- **new member recruitment** — growth engine, especially around get-on-board-day and the fall semester influx

these are interlocked. more members → more contributors + more travelers + more justification for funding asks. better cs portfolio → better recruitment pitch + better SGA credibility. tournament involvement → recruitment hook + member experiences worth coming back for.

---

## rough timeline

### summer 2026 (now → aug)

- cosmo + tim continue active project work; joseff back from finals mid-may, can be looped in once the dust settles
- skip the may-aug 2026 NA tournament cluster for FAC purposes (registration windows already past or imminent, fall FAC doesn't open until 9/14)
- email FAC (`fac@ua.edu` / 205-348-4536) on three load-bearing questions:
  1. can FAC reimburse pre-paid expenses (registration, deposits) approved in a later funding window?
  2. is there a per-application or per-semester cap not shown on the public pages?
  3. when does the spring 2027 application window open?
- email FAC: clarify "secure on-campus storage" rules — lockers, departmental offices, anything beyond "not dorms"
- find a treasurer (joseff = pres, treasurer = open). without one, the club can't actually receive disbursements.
- joseff post-finals: confirm whether he wants to take supabase ownership instead of cosmo; close the coordination gap from his 4/29 "i was considering designing a SQL database" message
- tim: keep cooking on tile recognition ML, push when ready; small training-data drops are fine
- cosmo: ramp on supabase project setup (account creation, schema sketch, migration plan for tracker), bot deploy bridge to oracle vm if blake's hosting isn't ready
- /learn chapters: parked on `learn-rewrite` branch, finish the content fills (chapter 03 hands, lonely-pair table) when motivation strikes; chapter 01 polished version makes a great gobd handout
- **joseff: resubmit org app by aug 15** for the august provisional-club cohort (the gating step for GOBD registration). prior submission stalled out — uainvolvement confirmed 2026-05-07 that resubmission lands us in the cohort in time. cohort timeline per the New Organizations page: proposal review aug 15 → 20, **provisional period aug 15 → sept 30, full status oct 1**. fallback if missed: september cohort (sept 1 deadline, full status nov 1) — but september cohort misses GOBD entirely.
- **prep the org-app supporting docs in parallel**: 10 UA student member roster, named president/VP/treasurer (treasurer still open!), full-time UA-employee advisor confirmed, the constitution itself (`CONSTITUTION-DRAFT.md` is ready pending placeholder fills), and the **Child Protection and Hazing form** (separate from the constitution, also required for full status).

### fall 2026 (sep → dec, plus aug GOBD)

- **provisional period runs aug 15 → sept 30; full official club status starts oct 1** → SGA funding eligibility unlocks at full status, NOT during provisional.
- **draft constitution** before the provisional → full-club transition. `CONSTITUTION-DRAFT.md` is the working draft (cosmo's, 2026-05-07, structurally complete pending placeholder fills); `CONSTITUTION-TEMPLATE.md` is UA's official sample for reference; riichi nomi's https://www.riichinomi.com/about-us is a real-world riichi-flavored voice model.
- **get on board day: thursday, aug 27, 2026, 5-9 PM on the quad.** registration window apr 6 → **aug 13** (already open, registration is the gating step). $25 per table for student orgs, max 2 tables, credit card only, non-refundable. **provisional-club status is sufficient to register** (confirmed 2026-05-07 via uainvolvement call) — joseff resubmits the org app to land in the august provisional cohort, then we register for GOBD off that. plan: 1 table demo (4 regulars playing live) + handout w/ QR to /learn, or 2 tables (demo + teaching) if budget allows. mahjong set on display, signage in club colors, chapter 01 mini-mahjong example for absolute beginners.
- **provisional-period restrictions to plan around**: cannot apply for FAC funding (gates first SGA ask — see below), cannot use UA trademarked brands in marketing (avoid "Crimson Tide" / "Bama" / etc; "Crimson Tiles" itself is fine, just be careful with handout/signage copy), cannot host events requiring mySource event-form registration (GOBD doesn't require this — it's hosted by Student Involvement directly).
- FAC fall window opens 9/14, weekly Sunday deadlines through 11/16. **but provisional clubs can't apply for FAC** — so the effective crimson tiles FAC window is 10/1 → 11/16 (~6.5 weeks instead of 9). plan the first ask submission for the 10/5 sunday at earliest.
- **first SGA application** (~$4000 first ask, see funding section below) — submit week of 10/5 once full status lands
- bot deploy: blake's hosting if his summer storage worked out, otherwise cosmo's oracle vm as bridge
- tracker → supabase migration begins (parallel write while sheet sync continues; cutover later)
- if any sep-dec NA tournaments materialize, apply for travel funding via the weekly window
- (magic of mahjong / american mahjong ladies near sokol park play american mahjong, not riichi — community goodwill is fine but it's not a recruitment lever)

### spring 2027 (jan → apr)

- spring FAC window opens (date TBD, ask FAC)
- travel apps for the may-aug 2027 NA tournament cluster — apply early
- continue website / bot / MV development
- finish supabase phase 3 (clients swap reads, retire google sheet sync if no one wants it)
- consider running a small in-club tournament (bracket display via borrowed projector, no external attendees, low logistics) to learn the format
- consider club dues ($10-25/sem typical) to build a non-FAC treasury for things FAC won't fund (prizes, food, registration risk)

### summer 2027

- members travel to NA tournaments (registration funded via spring 2027 FAC)
- cosmo + tim continue, others uncertain
- MV camera could ship if tim stays on it through summer

### fall 2027 (year 2 ambitions)

- bigger SGA ask informed by year-1 spend discipline + member growth
- consider hosting a UA Riichi Open or similar regional tournament (with sponsorship for prize pool — mahjong soul / riichi city / japanese restaurants)
- mature club: more contributors, visible projects, tournament results to point to

---

## new member recruitment

### get on board day

**fall 2026: thursday aug 27, 5-9 PM, the quad. registration apr 6 → aug 13 (already open). $25/table, max 2 tables, credit card only, non-refundable. spring GOBD also runs each year — fallback if fall timing breaks.**

- **demo table**: 4 regulars playing an actual game, draws people in by being a real thing in motion
- **1-2 teaching tables**: chapter 01's mini-mahjong example (5-tile hand, 1 suit) — bite-sized, low intimidation, can teach in 5 minutes
- **printed handout**: small flyer with QR code to /learn, club meeting time, discord invite, mahjong/cs split (so cs undergrads see the tech angle). printing via crimson copies, design needs strat comms approval if branded.
- **visual hooks**: a mahjong set on display, signage in club colors
- **timing**: gobd is brutal competition with hundreds of orgs. a game-in-progress is one of the better passive hooks because it's tactile and unfamiliar
- **funding**: $25 table fee comes from cosmo's pocket or club dues (FAC fall window opens 9/14 = after gobd, can't reimburse and FAC won't fund table-rental retroactively). budget the $25-50 (1-2 tables) accordingly.

### ongoing recruitment

- ask current members to bring a friend each semester
- cross-pollinate with adjacent UA orgs: gaming, anime, asian student associations, kami-con - the huntsville riichi club did a demo at kami-con huntsville
- consider /r/capstone post once or twice a semester
- the github org itself is a recruitment hook for cs undergrads — "we have a real software stack you can plug into"
- maintain visible website presence — works passively when people google "mahjong club tuscaloosa"
- post tournament results / project ships to discord at minimum, broader channels (instagram, etc) only if someone wants to own that

### why riichi-niche actually helps

- low base rate of "people who already know riichi" means we're recruiting from "people who'd find it interesting once they tried it"
- the chapter 01 pedagogy is designed for that audience
- competing for attention against fewer similar orgs

---

## NA riichi community involvement

### travel (geography-ranked from tuscaloosa)

1. **heart of america open (kansas city, may)** — closest by car (~10hr drive), shortest funding ask
2. **philly WRL major (july)** — flight, mid-cost
3. **riichi nomi NYC (august)** — flight, higher hotel costs
4. **boston open (august)** — flight, similar to NYC
5. **toronto open (august)** — passport required, higher friction
6. **vegas WRL major (may, varies)** — flight, west coast logistics

realistic year-1 budget: 2-3 members to one trip, ~$2500 total. spring 2027 FAC funds the 2027 cluster.

### hosting

**year 1 (spring 2027 candidate):** small in-club tournament, members only, no external attendees. low logistical burden, learn the format. bracket via borrowed projector. potluck or self-pay for food (FAC won't fund).

**year 2 (fall 2027 / spring 2028 candidate):** regional UA Open with external attendees. requires:
- venue (student center room is free; larger venue needs UA Contract Management 3-week routing)
- prize pool from sponsorship (mahjong soul / riichi city have done charity-tournament sponsorships, worth a pitch)
- food via potluck or sponsorship (FAC won't cover unless cultural-education + UA caterer)
- registration system (could be a club cs project — tournament bracket app)
- promo (with strategic communications pre-approval, printed via crimson copies)
- guest commentator/teacher (Professional Service Agreement, 3 weeks lead time, FAC can fund honorarium)

### community building

- attend other clubs' events when traveling (heart of america is closest)
- list crimson tiles on portal.nariichi.org as the UA representative
- post club tournaments to the NA riichi calendar
- maintain visible online presence (instagram, website)
- be the southeast US's riichi club presence — there's not much within driving distance, that's a niche to own

### outreach to other clubs (intel-gathering)

**why:** other established clubs have already solved the problems we're staring at — recruitment, officer turnover, tournament hosting logistics, sponsorship strategy. one good email saves months.

**who to reach out to first:**

- **campus clubs** (best signal for recruitment + sustainability questions):
  - Berkeley Riichi (well-established, large, west coast; check portal.nariichi.org for current contact)
  - MIT / Harvard area clubs (boston scene, academic-tied)
  - UT Austin Ronhorn (long shot — appears mostly inactive per github, but worth one ping; the post-mortem itself would be useful intel)
  - any other campus clubs on portal.nariichi.org — scan and pick 2-3
- **tournament-hosting clubs** (best signal for hosting questions, doesn't have to be campus-based):
  - KCRM (kansas city, geographically nearest; heart of america organizers)
  - Riichi Nomi NYC (large, frequent hosts)
  - CRIC (ottawa, well-organized)
  - VDMC (vegas, WRL major hosts)

**questions for campus clubs (recruitment + sustainability):**

1. how do they recruit at their school's involvement fair / gobd equivalent? what worked, what flopped?
2. rough breakdown of where members come from — involvement fair vs word of mouth vs social vs other
3. teaching approach that works best for absolute beginners (one suit? smaller hand? online client first? in-person tiles first?)
4. how do they handle officer turnover when seniors graduate — explicit succession planning, or organic?
5. typical active membership size + how stable it's been over years
6. ever had a "key person left and it almost died" moment? what saved it (or didn't)?
7. what keeps members coming back between meetings — events, online play together, discord activity, league structure?
8. balance of casual vs serious / competitive players — does the same club serve both, or split?
9. school funding situation — SGA-equivalent? caps? other income sources (dues, merch, sponsor)?
10. anything they wish they'd known starting out

**questions for tournament-hosting clubs:**

1. minimum club size + helper count to credibly host
2. rough cost breakdown of first tournament + a recent one (line items, not just total)
3. sponsorship strategy — which sponsors did they approach (Mahjong Soul, Riichi City, japanese restaurants, others), how did they pitch, what landed?
4. venue: campus vs off-campus, how chosen, any UA-Contract-Management-style paperwork pain
5. prize structure — what they did, what worked. alternatives when no prize budget?
6. registration system + bracket software (custom, OSS, paid?)
7. number of attendees year 1 vs current — growth curve
8. biggest mistakes / things they wish they'd known
9. ARA certification process — worth pursuing for credibility, or unnecessary at small scale?
10. lead time from "let's host" to event day — months? a year?
11. how to attract out-of-town players (and is that even desirable for a first tournament?)
12. logistics: tile sets needed, scoring rules used, round timing, break structure
13. would they be open to co-promoting a future crimson tiles tournament to their members?

**outreach mechanics:**

- introduce in 1-2 sentences (UA, new official org fall '26, riichi-focused, ~10 active members), then ask 2-4 specific questions per email rather than the full list. saves the recipient time, gets better answers.
- offer to share what we learn back to them or to the broader portal.nariichi.org community — reciprocity helps.
- followup after 1 week if no reply, then drop it. some clubs will be responsive, others won't.

---

## cs project portfolio

### current state (as of 2026-05-02)

- **website** — live at crimson-tiles.github.io, react/vite/ts on github pages. owner: cosmo. open invitation for anyone to push.
- **mahjong-tracker** — python CLI, gspread sync to google sheet. owner: tim. **not yet in crimson-tiles github org** (still on tim's account).
- **discord-bot** — rust, written by joseff. exists in crimson-tiles org. **not yet deployed.**
- **autotable fork** — deployed at riichi.ratmachine.com. owner: cosmo.
- **MV / tile recognition** — in development by tim. point-stick reader was earlier work, since pivoted to tile.
- **/learn pedagogy** — parked on `learn-rewrite` branch. not yet shipped.

### near-term project ideas (pick what catches interest)

ranked from "5-minute small thing for any contributor" to "weeks of weekend work":

- **discord-bot link on /projects page** (5 min, any contributor)
- **website data freshness signal** (most-recent-game date display) (1-2 hours, any frontend-curious contributor)
- **website data layer refactor** (clean fetch interface to ease phase-3 supabase swap) (afternoon, intermediate)
- **bot deploy + uma alignment to [20,10,0,-10]** (one evening, joseff or cosmo)
- **bot fixups**: `game_type_weights` apply, `generate_scorecard` implement, `Box::leak` storm cleanup (weekend each, intermediate rust)
- **supabase project setup + schema sketch** (cosmo + maybe joseff)
- **MV tile recognition pipeline** (tim, ongoing)
- **tracker → supabase migration** (cosmo, weeks-shaped)
- **MIGRATION.md in tracker repo** (output of schema sketch work)

### future project ideas (open invitations)

- **tournament bracket app** — could crib from OSS tournament managers, learning opportunity
- **club merch storefront** — with strat comms approval friction noted
- **training site / drill mode** — using autotable + /learn content, the "play-along" sandbox
- **statistical dashboards** — player rankings over time, hand frequency, tile efficiency analysis
- **annotated game replay viewer** — scrubber UI for tenhou logs / tracker games with per-turn shanten + ukeire + EV calls via mahjong-cpp wasm. teaching-flavored (each move shows what was the optimal play and why). ties tenhou-stats + mahjong-tracker + autotable replay-rendering together. high-leverage because all the pieces already exist. gating: spike `emcmake` mahjong-cpp build first (one weekend) before committing to the rest.
- **mobile app for game tracking at the table** — react native / flutter project
- **autotable controller firmware** — if the club ever buys a physical autotable
- **hand recognition from photos** — extension of MV camera work for replay analysis

---

## SGA funding strategy

### load-bearing constraints (from FAC pages)

- **prizes / gifts of any kind: prohibited.** trophies likely fall here too. external sponsorship or self-fund only.
- **food: only UA approved caterer + cultural-education events.** standard tournament refreshments don't qualify. potluck or member self-pay.
- **t-shirts: prohibited** for promotional purposes via FAC.
- **promo items: need strategic communications pre-approval** + printing via crimson copies.
- **secure on-campus storage required** for equipment. dorms explicitly out. other rules unclear, ask FAC.
- **no general operating budget category.** every ask must attach to a specific event, trip, or equipment purchase.
- **fall window**: weekly sundays 9/14 → 11/16, funds disbursed friday after senate approval.

### immediate actions (summer 2026)

1. email FAC on the three pre-paid / cap / spring-window questions
2. email FAC on storage rules
3. recruit a treasurer
4. confirm joseff officer paperwork is on track for fall
5. (optional) start drafting the fall application content even before the window opens

### fall 2026 first ask (proposed ~$4000)

| line | $ | category | notes |
|------|----|----------|-------|
| mahjong sets (4) | 500 | equipment | locker storage required |
| MV camera hardware | 400 | equipment | pi + camera + mount + reference mat |
| tournament travel | 2500 | travel | 2-3 members, one trip; depends on pre-paid reimbursement answer |
| promotional materials | 250 | other | needs strat comms approval + crimson copies printing |
| misc supplies | 350 | other | printing, signage, etc |
| **total** | **~4000** | | well under cap, full of justifiable line items |

### spring 2027 ask (planning)

- larger amount based on first-semester spend discipline
- targets the may-aug 2027 NA tournament cluster
- includes spring tournament hosting if planned (venue rental + promo + guest honorarium)

---

## open questions / blockers

- **storage rules** — pending FAC response
- **pre-paid reimbursement** — pending FAC response, gates the tournament-travel strategy
- **per-application cap** — pending FAC response
- **spring 2027 window date** — pending FAC response
- **joseff supabase ownership** — pending coordination ask after his finals
- **treasurer** — open
- **blake hosting** — pending his summer storage situation
- **member willingness to travel** — interest signal not yet collected
- **noah github status** — unknown
- **majors/years** of noah, matt, blake, will, supercasualgamer, jackson — unknown

---

## resources / contacts

- **portal.nariichi.org** — NA riichi calendar and club registry
- **magic of mahjong** (instagram) — local Tuscaloosa american mahjong club (different game from riichi). neighborly, not a recruitment channel.
- **fac@ua.edu** / 205-348-4536 — UA Financial Affairs Committee
- **crimson copies** — UA's required printer for promotional materials
- **strategic communications** — UA branding pre-approval gate
- **the source / center for student involvement** — broader org admin
- **jr. SGA / org services portal in mySource** — disbursement tracking once funded
- **uainvolvement@ua.edu** / 205-348-6114 — Get On Board Day contact, recognition status questions, provisional-club cohort intake
- **sourceneworg@ua.edu** — alt email for new-org provisional-period requests (extension requests, etc.)
- **GOBD registration**: student orgs https://epay.ua.edu:443/C20219_ustores/web/product_detail.jsp?PRODUCTID=2290&SINGLESTORE=true
- **UA New Organizations page**: cohort table + provisional-period rules + required submission docs (Create an Org Packet, Child Protection and Hazing form, etc.) — search "studentinvolvement.sl.ua.edu new organizations"
- **Bama SoS Brigade 2024 constitution** (`~/Downloads/Bama_SoS_Brigade_Constitution_2024_(1).docx`) — example of an approved UA student-org constitution; useful reality check on the actual UA enforcement bar (theirs has unfilled template placeholder text in Article VIII Finances and got approved anyway)
- **CONSTITUTION-TEMPLATE.md** (sibling file) — UA's official sample constitution (Aardvark Tiddlywinks), structural skeleton for reference
- **CONSTITUTION-JOSEFF-DRAFT.md** (sibling file) — joseff's draft (verbatim, received 2026-05-07), preserved for reference and diffs
- **CONSTITUTION-DRAFT.md** (sibling file) — cosmo's working draft with inline `// note:` design rationale, evolved 2026-05-07 from the UA template + Longhorn Riichi (UT Austin) + Bama SoS Brigade + joseff's strong ideas
- **CONSTITUTION-MERGED.md** (sibling file) — clean merged proposal combining cosmo's draft + joseff's strong ideas; no annotations, ready-to-submit-style. this is what we'd propose to joseff as the unified version.
- **CONSTITUTION-MERGED-VS-JOSEFF.md** (sibling file) — annotated section-by-section comparison of merged vs joseff's draft. each change tagged MUST / SHOULD / PREFERENCE with rationale. **use this when messaging joseff**.
- **UA constitution writing guide**: https://studentinvolvement.sl.ua.edu/organization-registration/constitution-writing-guide/ — procedural how-to for what each article should cover
- **riichi nomi about page**: https://www.riichinomi.com/about-us — real-world riichi-flavored constitution/voice reference
- **Longhorn Riichi (UT Austin) constitution** — full text shared via chat 2026-05-07; riichi-specific peer reference, source of anti-gambling / anti-hazing / member-removal patterns
- **Bama SoS Brigade 2024 constitution** (`~/Downloads/Bama_SoS_Brigade_Constitution_2024_(1).docx`) — example of an approved UA student-org constitution; useful reality check on the actual UA enforcement bar (theirs has unfilled template placeholder text in Article VIII Finances and got approved anyway)
- **BAMA (Bama Anime and Manga Association) constitution** — full text shared via chat 2026-05-07; shows tiered membership, bylaws separation, ratification block patterns
- **UA ACM chapter bylaws 2026** (`~/Downloads/ACMBylaws2026.docx`) — UA's CS-org-of-record. SOURCE of crimson tiles' Article II mission-3 CS-purpose language and Article VII committee structure (Development Team / Hackathons / etc)
- **Crimson Smash Club constitution** (`~/Downloads/Constitution_of_the_Crimson_Smash_Club_.docx`) — UA tabletop-game peer org. shows two-VP pattern (one per competitive community); broad "no relationship" language with same ARA-blocking issue as joseff's draft
- **UA Chess Club constitution** (`~/Downloads/Chess_Club_Constitution_With_Non-Discrimination.doc`) — minimal UA game-club approved constitution. dissolution beneficiary alternative (UA Student Org Scholarship Fund)
- **Poker Society at Alabama 2025-2026 constitution** (`~/Downloads/2025-2026_Constitution.pdf`) — most structurally sophisticated UA peer reference. shows specialized officer roles (Director of Programs / Director of Recruitment / Sergeant-at-Arms with 50-member-threshold activation), Finance Committee, bylaws-as-separate-article. potentially worth pulling from if the club grows past 50 members
