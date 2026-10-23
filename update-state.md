# Update state for ruleoflawfail.com

This file tracks how current the site's content is. The `/update-tracker` skill reads it to set the research window for the next update.

- **Content current through:** October 22, 2026
- **Trump Tyranny Tracker substack:** reviewed as lead source through Day 635 (October 20, 2026)
- **Last update method:** seven parallel research agents (window July 16 – October 22, 2026, run from a stale July checkout and then re-deduplicated against the September 19 remote — see the pull step now in the skill); sources: Trump Tyranny Tracker substack (Days 537–635, lead-finder only), Just Security litigation tracker (downloaded in full and parsed, 985 case rows), Lawfare's "Trials of the Trump Administration" pages and the Free Law Project docket bot (the tracker page itself is Cloudflare-blocked), GAO impoundment page, Revolving Door Project tracker, CREW, Campaign Legal Center, Democracy Docket, Brookings K-12 tracker, Stanford Immigration Policy Tracking Project, and targeted searches

## Source-status notes
- **ALWAYS `git pull --ff-only` before starting.** The site is edited from more than one machine; the October 22 draft was built against a July copy and 16 of 54 rows had to be dropped as duplicates.
- **Just Security tracker** CAN be used: fetch the full page and parse it; 280 of 985 rows had in-window "last updated" dates for July–October 2026. Earlier notes saying it carried nothing window-specific were wrong.
- **Lawfare tracker page** remains Cloudflare-blocked. Substitutes that work: Lawfare's weekly "Trials of the Trump Administration" live/daily pages, and the Lawfare/Free Law Project docket bot (@trumplitigation.bots.law on Bluesky, public API) which surfaces opinions before trackers summarize them.
- **GAO has resumed posting Impoundment Control Act decisions**: B-338788 (Sept 29, 2026, pocket rescission), B-337485 and B-337872 (Oct 7, violations), B-337813 (Oct 7, no violation). Also B-338094 (Oct 1, Vacancies Act). Running count of ICA violations by this administration: 14. No Comptroller General lawsuit yet.
- **Revolving Door Project court non-adherence tracker** still ends November 4, 2025 (checked Oct 22, 2026).
- **Substack**: no posts for Days 575–592 (Aug 17 – Sept 7, 2026); Day 593 carried a retrospective. Day 635 = October 20, 2026.
- **WebSearch `allowed_domains`** rejects apnews.com, nytimes.com, reuters.com, politico.com, newsday.com, providencejournal.com (blocked to the crawler). AP/NYT/WSJ/Reuters/Politico URLs can still be obtained from the substack posts' outbound links and corroborated via search snippets. cbsnews.com returns 406 and courthousenews.com / thehill.com 403 to automated fetches but load normally in a browser.
- **Link check of this update:** 160 of 260 URLs returned 200; the rest were paywall/bot blocks (401/403/406) at the outlets above, not dead links. Two genuine 404s were caught and replaced before publishing.

## Items to re-check on the next update
- Midterm election (Nov 3, 2026): DOJ v. California ballot-segregation suit; DSCC v. Trump over threats to election officials; the four armed-agents-at-polls suits (LULAC, NAACP, DSCC, Arlington County) — no rulings as of Oct 22; DHS voter home-visit PI (N.D. Cal., Oct 21) — appeal?; DOJ's appeal of the Oct 9 voter-roll vacatur (Common Cause v. DOJ)
- Taxpayer-funded ads: TRO runs through Nov 8; PI hearing Nov 4 (S.D.N.Y.); DNC suit in D.D.C.; whether the ~$19M is reimbursed
- Lisa Cook: White House "cause" hearing Nov 5, 2026; expect new litigation
- D.C. Circuit en banc on the Boasberg contempt inquiry — argued Sept 29, 2026, decision pending
- Fourth Circuit Comey/James appeal — argued Sept 15, pending; Comey "86 47" arraignment reset to January 2027
- Supreme Court: third-country removals (D.V.D.) argument December 2026; no-bond detention cert granted Oct 1; CREW v. DOGE (FOIA) cert granted Oct 13; SAVE litigation continues after Sept 25 stay
- Fifth Circuit en banc on no-bond detention (argued Sept 2026)
- First Circuit: Harvard (argued Oct 5–6); NEA (argued Oct 7); AAUP v. Rubio (briefing)
- D.C. Circuit: law-firm EOs + Zaid clearance (argued May 14, 2026, still undecided); Kennedy Center appeal (26-5322); CNN v. Trump press-pass appeal (26-5356)
- Ninth Circuit: Rogoff reinstatement (administratively stayed Oct 4)
- J.O.P. v. DHS compliance reports; E.L.A.'s return
- Judge Brown (E.D.N.Y.) ordered the government to explain by ~Oct 26 how it will remedy the Almonte warrant fabrication — sanctions/contempt possible
- East Potomac golf course: TRO through Oct 26; evidentiary hearing held Oct 19–20
- Omar investigation (D.C. grand jury; denaturalization aim); Hutchinson grand jury (no charges yet); Brennan Florida grand jury (testimony set for Oct 15 — outcome unverified)
- Bolton sentencing Oct 28, 2026
- Hatch Act: OSC still has no findings on any senior official; CREW's six complaints 10+ months old; new complaints on Blanche, Alaska rally officials, Omar raid, Stelson release
- GGRF — cert petition expected; FBI HQ appeal (4th Cir. 26-2158); USDA reorganization stay through Dec 11; Solar for All possible appeal
- Guilfoyle resignation; Herrera Velutini pardon fallout; Kushner CREW suit

## Borderline items considered and deliberately NOT added (October 22, 2026)
- Anthropic supply-chain designation — already on the site (added Sept 19); nothing new in window
- DOJ's ~1,000 election monitors; NAACP suit (lawful tool, pretext alleged)
- Pentagon removal of the "never resided in U.S." option from the overseas-voter form; DNC suit (no ruling)
- 2030 census apportionment NPRM (Sept 10) — added only as a Notes line on the Aug 2025 census entry; still not litigated
- Denaturalization drive (40 suits in six weeks) — lawful tool; mentioned only in the Omar entry's Notes
- ICE removal of final-order detainees from the online locator — added only as a Notes line on the habeas-obstruction entry
- Camp East Montana PI motion (suit predates window); Somali men sent to Guantánamo; Harris County ICE vehicle incident; Evanston mistaken-identity beating; ProPublica's 500+ citizens tally (used only as a Notes line)
- Newsom travel-funding subpoenas; Merchan-daughter firm probe; Boren ranch fire; CFTC retraction order; CISA voting-machine request; DHS $464M idle planes; NSF $1.4B withheld; HHS $12M OMH-to-security transfer; Navarro book promotion — single-outlet or no legal finding
- Stars and Stripes firings (TRO denied); Air Force Maj. Watson court-martial (UCMJ Art. 88 lawful)
- Epstein Files Transparency Act — Sept 17 contempt-warning hearing could not be verified with a major outlet; June 25 ruling predates window
- H-1B fee rulings — conflicting accounts (Mass. June 8 vacatur vs. a reported N.D. Cal. Sept 30 order); dropped pending clarity
- TANF data-sharing suit — Judge Boasberg declined relief Sept 28 (procedural)
- Corporate Transparency Act domestic exemption; OLC opinions on Posse Comitatus "National Defense Areas" and on privilege for private advisers — opinions/rules, no litigation found
- Pre-election ACA/Medicare checks with presidential letter; Ohio disaster aid timed to a rally; Hegseth excluding Democrats from budget briefings; FTC side deals with auto dealers
- Items dated July 10–15, 2026 (pre-window): FBI analysts fired over the Fulton County probe; disinformation-researcher visa ruling (July 14); Treasury $1 gold coin with the president's image; EAC commissioners removed (July 9)
- Previously excluded on Sept 19 and left excluded: RFK Jr. military-aircraft campaigning; second Hegseth Hatch complaint; Trump stock trades; Tbilisi tower; PATRIOT Act §314(a) bank canvass (now mentioned only via NYT/NPR on the Minnesota investigation)

## Excluded as not administration actions
- Missouri/Tennessee mid-decade redistricting; Alaska state-court ruling on DOJ roll handover — state actors
- Jim Jordan's referral of Jack Smith — congressional
