# Crimson Tiles constitution — joseff's draft vs proposed merged version

annotated section-by-section comparison, tagged for severity:

- **MUST** — UA-rejection risk, Alabama law, or other compliance concern. non-negotiable.
- **SHOULD** — strong defensive recommendation. negotiable but with substantive reasons.
- **PREFERENCE** — style/design choice. up for joseff to push back on.

each entry shows joseff's section, the proposed change in the merged version, and a short "why" cosmo can paraphrase when messaging joseff.

raw unified diff at the bottom for reference.

---

## Article I: Name

### change 1 — short-form abbreviation

**[PREFERENCE]**

> joseff:
> "The name of this organization shall be the Crimson Tiles Riichi Mahjong Association."

> merged:
> "The name of this organization shall be the Crimson Tiles Riichi Mahjong Association ('Crimson Tiles,' 'the club'). All references to 'Crimson Tiles' or 'the club' in this constitution refer to the Crimson Tiles Riichi Mahjong Association."

**why:** the long form is heavy to repeat — joseff's draft says "Crimson Tiles Riichi Mahjong Association" 30+ times. defining a short form once at the top lets the rest of the document use "Crimson Tiles" or "the club" without ambiguity. BAMA's constitution does this with "Bama Anime and Manga Association (BAMA)."

---

## Article II: Purpose

### change 2 — restructure to three primary missions, with member-led tech work mentioned at purpose level

**[SHOULD]**

> joseff (2.1 + 2.2 — 6 lines):
> "The purpose of this club is to promote an interest in the strategy of Riichi Mahjong and to provide opportunities for members to play Riichi.
> ...
> - Host social events that provide opportunities for members to play Riichi
> - Discuss game strategy and theory
> - Introduce the game to new people and increase membership
> - Organize trips to possible Riichi tournaments"

> merged (2.1 — three primary missions framing):
> "Crimson Tiles is an organization at The University of Alabama for the play, study, and promotion of Japanese riichi mahjong. The club's three primary missions are:
> 1. **Play and community.** ...
> 2. **Learning and improvement.** ...
> 3. **External engagement and community contribution.** Represent The University of Alabama at North American riichi mahjong tournaments, and contribute to the broader riichi community through content sharing, inter-club coordination, and member-led software, learning, and analytics projects that serve the riichi community."

**why:** UA's constitution writing guide flags "vague purpose statements lacking uniqueness from other organizations" as a rejection reason. joseff's purpose ("play riichi, host social events, discuss strategy, organize trips") could fit any tabletop-game club. the three-mission structure makes the riichi-specific scope and external engagement explicit. mission 3 acknowledges the actual character of the club — that members frequently spin up software, learning, and analytics projects related to riichi as part of being in the club — without elevating tech to its own mission or putting operational rules in the constitution.

note: original draft had heavier CS framing (mission 3 named "open-source software and computing project portfolio," referenced ACM-at-UA partnership in 2.2, named GitHub repository as a constitutional commitment). that framing was correctly pushed back on 2026-05-07: rules around a club code repository, GitHub-vs-GitLab choices, etc. are operational, not constitutional. this lighter version mentions tech work at purpose level only, without operationalizing it.

### change 3 — anti-gambling clause

**[SHOULD]**

> joseff: (none)

> merged (2.3):
> "Crimson Tiles explicitly prohibits any form of gambling within club activities, at club events, or on club premises."

**why:** riichi's historical association with gambling is a known UA-risk-management concern. preempting it with an explicit prohibition is one sentence and removes the read-through risk. Longhorn Riichi (UT Austin) has this verbatim in their Article I.

---

## Article III: Relationship

### change 4 — fix the ARA-blocking wording (CRITICAL)

**[MUST]**

> joseff:
> "The Crimson Tiles Riichi Mahjong Association Mahjong Association is unaffiliated with any local, state, or national organization or entity. ..."

> merged (3.1 + 3.2):
> "Crimson Tiles is not chartered by, and does not derive its governance from, any external organization. ...
>
> Crimson Tiles may participate in non-governing affiliations, certifications, and registrations with external riichi mahjong organizations and bodies, including but not limited to:
> - listing in the North American Riichi League registry at portal.nariichi.org;
> - registration as a club with the American Riichi Association (ARA) for the purpose of hosting ARA-certified tournaments and contributing to World Riichi League ranking-eligible play;
> - coordination with other riichi clubs and tournament organizers in North America."

**why:** joseff's "unaffiliated with any local, state, or national organization or entity" reads as a constitutional bar on registering with the American Riichi Association. ironic given his Article 10 names ARA as the dissolution beneficiary — the constitution would self-defeat. swapping "unaffiliated" for "not chartered by, and does not derive its governance from" preserves the UA-required non-liability language while explicitly authorizing non-chartering affiliations. ARA registration is a precondition for hosting WRL-ranking-eligible tournaments, which we plan for year 2. without this fix, the constitution would need amendment before any tournament hosting.

also fixes the duplicated "Mahjong Association Mahjong Association" typo.

### change 5 — affirmative UA-compliance section

**[SHOULD]**

> joseff: (none)

> merged (3.3):
> "Crimson Tiles shall comply with all objectives, rules, regulations, and policies established by The University of Alabama, including but not limited to the Code of Student Conduct, the University's hazing prevention policy, and the registration requirements of the Office of Student Involvement, and shall be responsible to the appropriate University authorities."

**why:** complements the non-liability language in 3.1 with an affirmative compliance statement. defensive against UA risk-management read-through. borrowed near-verbatim from Bama SoS Brigade's approved constitution.

---

## Article IV: Membership

### change 6 — broaden associate membership scope

**[SHOULD]**

> joseff (4.2):
> "Associate membership in the Crimson Tiles Riichi Mahjong Association shall be open to all faculty and staff of The University of Alabama."

> merged (4.2):
> "Associate membership in Crimson Tiles shall be open to:
> - faculty and staff of The University of Alabama;
> - alumni of The University of Alabama;
> - other interested community members who are not currently enrolled UA students."

**why:** joseff's narrower scope (UA faculty/staff only) means non-UA helpers — alumni, former students, off-campus riichi enthusiasts — can't formally be members. cosmo himself is in this category. the broader scope satisfies UA's "50%+1 must be UA students" rule (see change 7) while supporting the actual pattern of how the club runs. matches Longhorn Riichi's model.

### change 7 — add 50%+1 UA-student composition rule (CRITICAL)

**[MUST]**

> joseff: (none)

> merged (4.3):
> "The number of active members in the organization must equal at least one more than fifty percent (50%) of the total membership of Crimson Tiles, in compliance with The University of Alabama's student-organization composition requirement."

**why:** UA's constitution writing guide states: "If non-UA students permitted, at least 50% plus one of the members of any organization must be University of Alabama students." since joseff's draft permits associate members (including potentially non-UA per change 6), this rule must appear in the constitution. UA may reject without it.

### change 8 — clarify ambiguous "two meetings a semester" wording

**[PREFERENCE]**

> joseff (4.3):
> "Persons interested in becoming active members in the Crimson Tiles Riichi Mahjong Association may join after attending two meetings a semester."

> merged (4.4):
> "Persons interested in becoming active members may join after attending two (2) meetings within the same academic semester."

**why:** "two meetings a semester" reads ambiguously — does it mean 2 meetings per semester (rate, applies forever)? or 2 meetings within one semester (one-time threshold to join)? presumably the latter. clarifying.

### change 9 — add dues mechanism

**[SHOULD]**

> joseff: (silent on dues)

> merged (4.5):
> "Crimson Tiles shall not require dues for active or associate membership. The Executive Committee may, by majority vote and with notice provided to the active membership, propose an annual dues structure for ratification by simple majority vote at a business meeting."

**why:** joseff's draft is silent on dues. that means the constitution can't be used to introduce, raise, or remove dues without an amendment. setting dues at $0 with an executive-proposal-and-member-ratification mechanism sidesteps that. the gameplan flags spring 2027 as the candidate window for introducing dues — this provision lets us do it without amending the constitution.

### change 10 — add anti-hazing clause (CRITICAL)

**[MUST]**

> joseff: (none)

> merged (4.7):
> "In compliance with Alabama law (Code of Ala. § 16-1-23) and University of Alabama policy, Crimson Tiles strictly prohibits hazing in any form. ..."

**why:** Alabama Code § 16-1-23 applies to all UA student organizations, not just fraternities/sororities. while UA's constitution writing guide doesn't strictly require an anti-hazing article, the Child Protection and Hazing form is a separate required submission for new orgs, and including the prohibition in the constitution is defensive. UT Austin's Longhorn Riichi has this verbatim as their Article II.

### change 11 — add member removal procedure (CRITICAL)

**[MUST]**

> joseff: (none for member removal — only officer removal in his Article 8)

> merged (4.8):
> [7-step procedure: officer review → notification within 1 business day → 2-day defense window → Executive Committee vote → outcome notification → office vacated if officer]

**why:** joseff's draft only handles officer removal. there's no recourse for harassment situations, theft, or hazing committed by a regular member. this procedure (adapted from Longhorn Riichi) provides due process without making removal too easy. the 1-day-notify / 2-day-defense / Executive-Committee-vote structure is fast enough to be responsive but slow enough to honor the accused member's right to respond.

---

## Article V: Officers

### change 12 — add Secretary as a fourth officer

**[PREFERENCE]**

> joseff (5.1):
> "The officers of the Crimson Tiles Riichi Mahjong Association shall be the President, the Vice President, and the Treasurer."

> merged (5.1):
> "The officers of Crimson Tiles shall be the President, the Vice President, the Secretary, and the Treasurer."

**why:** UA only requires 3 officers (Pres/VP/Treas) at minimum, so joseff is at minimum. without a Secretary, the duties of keeping minutes, member rolls, official-document archiving, and managing the Discord server all fall onto VP and Treasurer. four officers spreads the load and creates a clear owner for communications. recommend adding.

### change 13 — simplify VP duties

**[SHOULD]**

> joseff (5.3):
> "The Vice-President shall:
> - Plan and execute all social activities of the Crimson Tiles Riichi Mahjong Association
> - Organize all advocacy initiatives of the Crimson Tiles Riichi Mahjong Association
> - Schedule and supervise community outreach opportunities
> - Oversee the social media accounts of the Crimson Tiles Riichi Mahjong Association"

> merged (5.3):
> "The Vice President shall:
> - plan and coordinate the regular play meetings of Crimson Tiles;
> - coordinate participation in external tournaments and inter-club events;
> - assume the duties of the President in the President's absence;
> - oversee committee chairs appointed under Article VII."

**why:** joseff's VP duties (advocacy initiatives, community outreach, social media) inherit from UA's sample template's Aardvark-Tiddlywinks VP — overstuffed and not specific to a riichi club. the merged version focuses VP on play meetings + external tournaments (the actual VP-level work) and adds the "fill in for absent President" duty (joseff's draft is silent on this — see change 14). social media moves to Secretary in the merged version.

### change 14 — fix gap on VP-takes-over-for-absent-President

**[SHOULD]**

> joseff: (only addresses succession in 8.2 — when President resigns or is removed; silent on temporary absence)

> merged (5.3, fourth bullet):
> "...assume the duties of the President in the President's absence;"

**why:** joseff's 8.2 covers permanent succession. but if the President is just out for a meeting (sick, traveling), there's no constitutional authority for VP to run that meeting. one bullet closes the gap.

### change 15 — clarify "one year" term

**[PREFERENCE]**

> joseff (5.5):
> "The terms of all officers of the Crimson Tiles Riichi Mahjong Association shall be one year, or two consecutive semesters."

> merged (5.6):
> "The terms of all officers shall be one academic year (two consecutive semesters)."

**why:** joseff's "one year, or two consecutive semesters" reads like alternatives but they're equivalent (probably meant "one academic year, i.e., two consecutive semesters"). clarifying.

### change 16 — strengthen advisor duties

**[PREFERENCE]**

> joseff (5.7):
> "The Advisor shall:
> - Advise the Crimson Tiles Riichi Mahjong Association to ensure compliance with UA policies and procedures
> - Resolve internal disputes between members of the Crimson Tiles Riichi Mahjong Association"

> merged (5.8):
> "The Advisor shall:
> - advise Crimson Tiles to ensure compliance with University of Alabama policies and procedures;
> - attend business meetings of Crimson Tiles when reasonably available, and the annual election meeting in person;
> - assist in the resolution of internal disputes between members or officers."

**why:** adds attendance expectation (reasonable for business meetings, mandatory for the annual election meeting). UA's sample template requires advisor presence at the election meeting.

---

## Article VI: Elections

### change 17 — election timing: August → April

**[PREFERENCE]**

> joseff (6.1):
> "The Crimson Tiles Riichi Mahjong Association will hold officer elections annually during the month of August in The University of Alabama's fall semester."

> merged (6.1):
> "Crimson Tiles shall hold officer elections annually during the month of April in The University of Alabama's spring semester."

**why:** UA's sample template uses April. April aligns with academic-year-end and gives the new officers all summer to ramp up before fall events. August elections puts brand-new officers right at GOBD-prep crunch (GOBD is aug 27) with zero time to learn the role. recommend April. open to discussion if joseff has specific reasons for August.

### change 18 — single-office-per-election rule

**[SHOULD]**

> joseff (6.3):
> "Any active member of the Crimson Tiles Riichi Mahjong Association may nominate any active member of the club, including themselves, to any office. All nominations must be accepted by the nominee."

> merged (6.3):
> "Any active member may nominate any active member, including themselves, to any office. All nominations must be accepted by the nominee. **An individual may accept nomination for only one (1) executive officer position per election.**"

**why:** without the one-office-per-election rule, an edge case opens where one member could be nominated to multiple offices and accept all of them, sweeping the executive committee. cleaner to bar this explicitly. UA template includes this rule.

### change 19 — allow online voting

**[SHOULD]**

> joseff (6.5):
> "Voting shall occur by secret ballot, distributed to the each active member of the Crimson Tiles Riichi Mahjong Association present at the meeting."

> merged (6.5):
> "Voting shall occur by secret ballot. Ballots may be distributed in paper form at an in-person meeting or via a secure online platform designated by the Executive Committee, provided that all active members are notified of the voting platform and timeline in the meeting notice required under Section 9.5."

**why:** locking elections to in-person paper ballot creates a single point of failure (illness, weather, travel, pandemic). allowing a secure online platform as an alternative is conventional and doesn't preclude in-person — just provides a backup.

### change 20 — require advisor at election meeting

**[PREFERENCE]**

> joseff: (silent — advisor presence at election meeting not required)

> merged (6.1, last sentence):
> "The advisor must be present at the election meeting."

**why:** UA template includes this. defensive — gives the advisor a structural role in the most consequential annual meeting and reduces drama if the election is contested.

---

## Article VII: Committees

(no substantive changes — joseff's Article 7 is essentially the same as the merged Article VII. merged version adds named example committees: Tournament, Software Projects, Travel — these are anticipated standing committees per the gameplan.)

### change 21 — add named example committees (light)

**[PREFERENCE]**

> joseff (7.2):
> "Other committees, standing or special, shall be appointed by the President of the Crimson Tiles Riichi Mahjong Association or the Executive Committee as deem necessary to carry on the work of the organization."

> merged (7.2):
> "...Anticipated standing committees include but are not limited to:
> - a Tournament Committee, when Crimson Tiles is hosting an external tournament;
> - a Travel Committee, to coordinate participation in external tournaments.
>
> Committee chairs shall be active members and shall report to the Vice President."

**why:** explicitly authorizes the two committees the gameplan anticipates we'll need at year 1-2 (tournament hosting, member travel to NA tournaments). authorizing them in the constitution now is cheaper than amending later. kept light — operational committees (software projects, recruitment, education, etc) can be created ad-hoc under the general 7.2 authority without needing constitutional sanction, per joseff's reasonable point that operational stuff doesn't belong in the constitution.

---

## Article VIII: Vacancies and Removal

### change 22 — fix "Council President" typo

**[MUST]**

> joseff (8.2):
> "In the event that the **Council President** steps down or is removed from office..."

> merged (8.2):
> "In the event that the **President** steps down or is removed..."

**why:** joseff inherited this typo from UA's sample template (which says "Council President" by mistake). there's no Council President defined anywhere in the constitution. trivial fix but it's a real reference error.

### change 23 — tighten 4-member-floor language to "scheduled business meeting"

**[PREFERENCE]**

> joseff (8.4 — 8.5 are similar):
> "A motion to remove an Executive Officer may be made at any meeting of the the Crimson Tiles Riichi Mahjong Association where at least four members are present..."

> merged (8.4):
> "A motion to remove an officer may be made at any **scheduled business meeting** at which at least four (4) active members are present..."

**why:** joseff's "any meeting" includes social/play meetings, which probably isn't intended (you don't want to motion to remove an officer at a casual game session). scoping to scheduled business meetings ensures the motion happens in a forum with notice + quorum + minutes. also fixes "the the" duplication.

---

## Article IX: Meetings

### change 24 — add business-meeting structure (CRITICAL)

**[MUST]**

> joseff (9.1):
> "At least one 'social meeting' of the Crimson Tiles Riichi Mahjong Association shall be held per month..."

> merged (9.1, 9.2, 9.3 split):
> "9.1 — At least one **business meeting** ... shall be held per semester...
> 9.2 — At least one **play meeting** ... shall be held per week...
> 9.3 — Crimson Tiles shall hold a separate **election meeting** during April..."

**why:** joseff's draft conflates business meetings and social meetings into "social meeting" only. but the constitution treats elections, removal motions, amendments, and dues changes as decisions that happen at "business meetings" (per Articles VI, VIII, XI, IV.5). without a defined business-meeting type, those provisions have no venue. UA's template separates business / social / election meetings for exactly this reason.

splitting:
- **business meeting**: where votes happen. once per semester minimum. requires 7-day notice and 25% quorum.
- **play meeting**: weekly mahjong. no formal business. matches actual cadence.
- **election meeting**: April-only, governed by Article VI, 50% quorum.

### change 25 — weekly play meetings (vs joseff's monthly)

**[SHOULD]**

> joseff (9.1):
> "At least one 'social meeting' ... shall be held per month..."

> merged (9.2):
> "At least one play meeting ... shall be held per week during the fall and spring semesters, provided University facilities are available and University policies permit."

**why:** the gameplan implies the club already meets weekly. setting monthly as the floor signals lower activity to UA than reality, and risks falling out of compliance with our own constitution if anyone challenges meeting frequency. weekly matches actual cadence and signals an active club.

### change 26 — add disruption-removal section

**[PREFERENCE]**

> joseff: (none)

> merged (9.6):
> "Officers may require any individual whose conduct is materially disruptive to a meeting of Crimson Tiles to leave that meeting. Such removal shall apply only to the meeting at hand and shall not affect the individual's membership status..."

**why:** covers the gap between "kick from this meeting" (immediate, single-officer authority) and "remove from membership" (formal Section 4.8 process). bounded so it can't be used as a backdoor membership purge. borrowed from Bama SoS Brigade's approved constitution.

---

## Article X: Finances

### change 27 — add Section 10.1 establishing the bank account

**[SHOULD]**

> joseff (Article 10, single paragraph):
> "...all funds held in the Crimson Tiles Riichi Mahjong Association account at the Alabama Credit Union shall be donated..."

> merged (10.1):
> "Crimson Tiles shall maintain a single primary account for the holding and disbursement of organization funds, at Alabama Credit Union, in the name of Crimson Tiles. The Treasurer shall be the primary signatory; the President shall be a secondary signatory."

**why:** joseff's draft references "the account at Alabama Credit Union" in the dissolution clause but never actually establishes it as the official account or names signatories. UA's writing guide flags "incomplete financial authority documentation (especially account listings)" as a rejection reason. 10.1 makes the account formal.

### change 28 — three-tier dissolution waterfall

**[SHOULD]**

> joseff (Article 10):
> "...donated in full to the American Riichi Association or another riichi mahjong association and the account officially closed."

> merged (10.3):
> "...donated in full to the American Riichi Association (ARA); or, if the ARA has ceased to exist or declines the donation, to another non-profit riichi mahjong organization selected by majority vote of the active membership at the time of dissolution; or, if no such organization is available, to another registered University of Alabama student organization with a substantially similar mission..."

**why:** joseff's "ARA or another riichi mahjong association" is good but leaves "another riichi mahjong association" undefined — no procedure for selecting one. the three-tier waterfall (ARA → other riichi non-profit by member vote → UA student org by member vote) defines a clear selection process at each fallback level. UA flags vague dissolution beneficiaries as a rejection reason.

---

## Article XI: Constitutional Amendments — MISSING ENTIRELY

### change 29 — add the missing Amendments article (CRITICAL)

**[MUST]**

> joseff: (no Article 11; draft jumps from Article 10 Finances to Article 11 Rules of Order)

> merged: full Article XI with sections 11.1 through 11.4
> 11.1 — amendments at any business meeting
> 11.2 — proposed amendments require 14-day notice
> 11.3 — adoption needs 2/3 vote of active members present
> 11.4 — Secretary files updated copy with The SOURCE within 14 days

**why:** UA's constitution writing guide lists Article XI: Constitutional Amendments as MANDATORY. without it, the constitution literally has no procedure to amend itself. UA is likely to reject and send back. this is the single biggest gap in joseff's draft.

note: UA's published sample template ALSO skips this article (jumps from X to XII), which is probably where joseff inherited the omission. the writing guide is authoritative; the sample has a known gap.

---

## Article XII: Rules of Order

### change 30 — renumber from XI to XII

**[MUST]**

> joseff: this article is numbered "Article 11"

> merged: this article is numbered "Article XII"

**why:** mechanical consequence of adding the missing Amendments article. UA's writing guide says Rules of Order is Article XII, not XI. matching the required numbering avoids submission friction.

---

## summary by tag

**MUST** (UA-rejection or compliance risk):
- change 4 (Article III ARA blocker)
- change 7 (50%+1 composition rule)
- change 10 (anti-hazing — Alabama state law)
- change 11 (member removal procedure)
- change 22 ("Council President" typo)
- change 24 (business-meeting structure)
- change 29 (missing Amendments article)
- change 30 (Rules of Order renumber)

**SHOULD** (strong defensive recommendations):
- change 2 (purpose distinctiveness — 3 missions, mention member-led tech work at purpose level only)
- change 3 (anti-gambling)
- change 5 (UA-compliance affirmation)
- change 6 (broader associate membership)
- change 9 (dues mechanism)
- change 13 (simplified VP duties)
- change 14 (VP-fills-in-for-President)
- change 18 (one-office-per-election)
- change 19 (online voting)
- change 25 (weekly play meetings)
- change 27 (formal bank account section)
- change 28 (three-tier dissolution waterfall)

**PREFERENCE** (style/design choices, joseff is welcome to push back):
- change 1 (short-form abbreviation)
- change 8 (clarify "two meetings a semester")
- change 12 (Secretary as fourth officer)
- change 15 ("one year" term clarification)
- change 16 (advisor attendance expectation)
- change 17 (April vs August election timing)
- change 20 (advisor required at election meeting)
- change 21 (named example committees — tournament + travel only)
- change 23 (4-member floor scoped to business meetings)
- change 26 (meeting-disruption removal)

---

## raw unified diff

for reference, here's the literal diff between joseff's draft and the merged version. note: line-level diffs are noisy because the merged version has different article numbering (II vs 2) and section structure (numbered Sections rather than continuous prose), so the high-level per-section comparison above is more useful for review purposes.

```diff
$ diff -u CONSTITUTION-JOSEFF-DRAFT.md CONSTITUTION-MERGED.md
```

(353 lines of unified diff — saved at `/tmp/constitution-diff.txt` if you want to look at it raw)
