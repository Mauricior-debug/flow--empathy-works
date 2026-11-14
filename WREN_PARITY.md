# WREN_PARITY

EmpathyWorks Leadership Consultancy. Static HTML and CSS site. Source of public wording: `wren-source/files/EmpathyWorks-Website-Master-Copy.docx.txt` (September 2026). Other onboarding documents supply the offers, place, team notes and essays named below.

Totals: **built 92**, **tested 92**, **blocked 8**.

Checked in Chrome at 1280×900 and 390×844, plus `node --test tests/enquiry.test.js` for the booking rules. Internal links returned HTTP 200. No horizontal overflow on the eight designed pages or the writing pages.

## Conflicts and blocked items

1. **Blocked — Government Gateway user ID.** Source: `Company-official-information-.docx`. This is a login credential, not website copy. It is not on any page.
2. **Blocked — proposed Corporation Tax reference.** Same document. Tax-account identifier. Not published.
3. **Blocked — Companies House submission receipt number.** Same document. Internal filing receipt. The public company number 16202448 is in the footer instead.
4. **Blocked — DUNS number.** Same document. Not part of the website master copy. Not published.
5. **Blocked — hosted CRM, pipeline, confirmations, reminders and analytics.** Source: `EmpathyWorks_Final_Scope_and_Answers.pdf` and `EmpathyWorks-What-you-re-getting.pdf`. This job is a static site with no database and no mail server. A valid form opens the visitor’s own email application. The page does not claim the message was received. Checked: unit tests and a live validation pass on `contact.html`.
6. **Blocked — agency commercial terms.** £2,200 / £1,100, £149 a month, £3,500 and optional AI fees are agreements with the builder, not EmpathyWorks’ public prices. Not on the site. EmpathyWorks’ own prices are published (subscriptions and the Executive Leadership Programme).
7. **Conflict — subscription tier names.** The older subscription PDF names Leadership Community, Leadership Development Partner and Organisational Partner, without prices. The September 2026 master copy replaces them with Leadership Partner £395, Leadership Development Partner £895 and Strategic Leadership Partner £1,950, all + VAT per month. The master copy is what the site uses. Support types from the older PDF (action learning, away days, advisory work) are included as things a partnership can draw on, not as a second set of tier names.
8. **Conflict — “award winning teacher”.** The briefing paper says this of Steve. The website master copy biography does not. The About page follows the master copy.

## Screens

9. **Home** — `index.html`. Design: `wren-source/screens/Home.jpg`. Full-bleed team photograph, headline “Helping people lead well in hard places.”, subline, orange booking button. Checked at 1280 and 390.
10. **One-to-One Leadership Coaching** — `coaching.html`. Design: split seedling / headline. Checked at 1280 and 390.
11. **Organisational Leadership & Consultancy** — `consultancy.html`. Design: headline left, curved teal-to-purple panel with Workplace Diagnostics, Strategic Reviews, Senior-Team Development. Checked at 1280 and 390.
12. **Leadership Subscription Services** — `subscriptions.html`. Design: centred title and three numbered summaries. Desktop uses the three tinted panels. On a phone they stack as a numbered sequence, not three equal cards. Checked both widths.
13. **Speaking, Workshops & Leadership Events** — `speaking.html`. Design: full-bleed speaker and white headline. The approved mock used a different person at a lectern. The photograph is the client’s stage image, `WhatsApp-Image-2026-09-29-at-14.21.31-1-.jpeg`. Checked at 1280.
14. **About EmpathyWorks** — `about.html`. Design: team photograph, then the heading and the line on compassion and accountability. Checked at 1280.
15. **Evidence & Credibility** — `evidence.html`. Design: centred title, purple quotation mark, the approach sentence. Wording uses “Our approach” from the master copy rather than the mock’s “Their approach”. Checked at 1280.
16. **Contact / Book a Leadership Conversation** — `contact.html`. Design: navy panel, white fields, orange “Send Message”. Extra fields (organisation, telephone, topic, date, time) are there so a conversation can actually be requested. Checked at 1280 and 390, including the validation state.
17. **Writing index and three essays** — `writing.html`, `leave-leadership.html`, `why-good-leaders.html`, `quotes.html`. Not on the design board. Same header, type and colour. The essays are the three documents the client labelled as blogs and notes.

## Header, footer, identity

18. **Logo in the header and footer**, file `images/logo.png`, from `EmpathyWorks-Logo-and-Emblem.png`. Not redrawn. Checked on every page.
19. **Favicon and apple touch icon** from the emblem crop of that logo: `images/favicon-32.png`, `images/favicon.ico`, `images/apple-touch-icon.png`.
20. **Social image** `images/og.jpg` is the same logo on white.
21. **Community emblem** `images/emblem-community.png` and **teamwork emblem** `images/emblem-teamwork.png` on About. The documents do not assign them to a person, so they sit with the shared philosophy, not as portraits.
22. **Navigation**: Home, Coaching, Consultancy, Subscriptions, Speaking, About, Evidence, Contact. Current page marked. Mobile menu opens and closes, including Escape. Checked.
23. **Footer** carries the phone `07850 219310`, Parc Dewi Sant, Carmarthen, company number 16202448, Community Interest Company number 16723785, VAT 486 8223 52, and the privilege quotation from the company information document.
24. **Email is not printed** on the page. The form’s mailto target is `info@leadershipconsultant.co.uk`, the address in the services and subscription documents. Checked by reading the contact page and the unit test.
25. **No invented LinkedIn or Facebook URLs.** The services sheet says they are on those platforms and gives no addresses.

## Home copy (master copy, section 2)

26. Tagline and “Leadership matters most when things are difficult.”
27. Opening paragraphs on pressure, complexity, change and growth, and on humanity with accountability.
28. Brand paragraphs from section 1 (lead well when leadership matters most; people at the heart of organisations).
29. “Leadership shaped by experience, not just theory”, including Cambridge Humanitarian Leadership and the refusal of theory for its own sake.
30. “How we work with you” and the four routes, each with its explore link: coaching, consultancy, subscriptions, speaking.
31. “Leadership credibility built in the real world”: Steve Robertson, Neil Lavis, HMP Guys Marsh, HMP Swansea, HMP Leyhill, COVID-19, HM Cayman Islands Prison Service, Cambridge.
32. “Experience. Evidence. Humanity. Accountability.” and “We believe effective leadership requires all four.”
33. “What are you facing right now?” through “We start by listening.”
34. “Start with a conversation”, including “If we’re not the right people, we’ll tell you.”
35. Primary action “Book a Leadership Conversation” links to `contact.html`. Secondary action calls `07850 219310`.

## Coaching (master copy, section 3, plus the executive programme PDF)

36. “Sometimes leaders need somewhere to think” and the isolating-leadership paragraphs.
37. “Who we coach”, including the eight “You may be” situations and “You do not need to be struggling”.
38. “How our coaching works”, Leadership Diagnostic Assessment, Leadership Discovery, bespoke sessions, turning insight into action, Personal Leadership Blueprint.
39. Three ways: Individual Leadership Coaching, Bespoke Leadership Coaching Programme, Executive Leadership Development.
40. “What you can expect”: Confidentiality, Challenge, Humanity, Experience, Evidence, Application.
41. “Ready to start?” and the booking link.
42. **Executive Leadership Programme** from `EmpathyWorks---Executive-Leadership-Programme.pdf`: Insight, Coaching, Challenge, Growth; 10–12 weeks; £1,495 per person; £1,295 for teams of 5+; steps 01–06 (diagnostic, analysis, three sessions, real-world challenge, between-session access, Personal Leadership Blueprint). The PDF’s step list was jumbled; the six labels at the foot of that PDF are paired with the matching descriptions, in order.

## Consultancy (master copy, section 4, plus services and briefing)

43. “Sometimes you need to understand what is really happening” and the diagnostic-not-prescriptive paragraphs.
44. Workplace Diagnostics, Organisational Culture, Developing and nurturing your people, Senior Team Development, Strategic and Organisational Review, Bespoke Organisational Consultancy. The three hero links jump to diagnostics, strategic review and senior team.
45. How we work: listen, diagnose, make sense, challenge, develop, turn insight into action.
46. “When might you bring us in?” and the eight situations, plus “You don’t need to arrive with a perfectly defined consultancy brief.”
47. **The Human Workspace**, from `This-is-EmpathyWorks.pdf` and the briefing paper: trust, belonging, wellbeing, accountability, visibility, communication, reflection; psychological safety, clear boundaries, belonging, purpose and care; the Human Workspace Diagnostic.
48. **West Wales Leadership Excellence Hub**, Parc Dewi Sant, Carmarthen, from `EmpathyWorks-Services.pdf`: in-person and online, free leadership drop-in clinics, charities, volunteers, veterans, rooms, refreshments, and for some programmes a shared buffet meal.
49. Named adjacent work from the services sheet and briefing: workshops, team development, boundaries and brave conversations, action learning, reflective spaces, leadership clinics, away days, reintegration support, veterans leadership programmes, coaching and mentoring.
50. Sectors named in those documents: local authorities, health boards, police, probation, charities, businesses, health and social care, housing, education, social enterprises, community services.
51. Leadership Institute ambition in Wales, from the briefing paper.

## Subscriptions (master copy, section 5)

52. “Your leadership partner, not simply your leadership consultant” and the Monday-morning paragraphs.
53. “From intervention to partnership.”
54. What a partnership gives: coaching, diagnostic, workplace diagnostics, senior team, consultancy, workshops, responsive support, resources.
55. “The value is in the relationship” and “Not another supplier.”
56. Leadership Partner, £395 + VAT per month, and its list.
57. Leadership Development Partner, £895 + VAT per month, and its list.
58. Strategic Leadership Partner, £1,950 + VAT per month, and its list.
59. “Built around your organisation”: not unlimited retainers, not rigid packages of hours, priorities can evolve, a meaningful period of time for the larger partnerships.
60. “Which partnership is right for you?” and the booking link.

## Speaking (master copy, section 6)

61. “Leadership conversations people remember.”
62. Speaking themes, the ten recurring topics, and keynote, conference, after-dinner, boards and networks.
63. Workshops and leadership development.
64. Facilitated leadership conversations, including “We won’t manufacture agreement where it doesn’t exist.”
65. “Built around your audience” and “Let’s talk about your event.”

## About (master copy, section 7, plus briefing)

66. “Leadership shaped by the real world” and “Why EmpathyWorks exists”, including the five questions.
67. Steve Robertson biography, word for word from the master copy, including Guys Marsh, the quarantine hotel service, and the Cambridge Master of Studies.
68. Neil Lavis biography, word for word, including Swansea, Leyhill, Cayman Islands, and the Leyhill transformation.
69. Kellie, from the briefing paper: mentoring and Reflective Spaces lead, and her work with people through personal trauma. No photograph is captioned with her name, because none of the files identify who is who.
70. Wider team sentence from the briefing paper, and the office manager from the services sheet.
71. “Different experiences. Shared philosophy.” and the closing tagline.
72. Company described as a leadership consultancy that is also registered as a limited company and with a Community Interest Company number. Both numbers are the ones in the official information document. The briefing’s “structured as a Community Interest Company” and the Companies House “Private Limited by Shares” are both recorded rather than collapsed into one.

## Evidence (master copy, section 8)

73. Experience, evidence and application.
74. “Leadership tested in demanding environments” and “People and performance cannot be separated.”
75. Cambridge Master of Studies, Prison Service Journal, Neil’s trauma-informed practice, organisational change and staff engagement.
76. “From evidence to application”: diagnostic, coaching, development, culture, consultancy.
77. “Building our evidence.” No testimonials, client logos or case studies are invented. The page says they will be shared when a client is comfortable.

## Contact and booking rules

78. “Let’s start with a conversation” and the no-obligation paragraphs.
79. “Prefer to send us a message?”
80. “What can we help with?” and the eight areas from section 9, plus “Just tell us what’s happening. We’ll start there.”
81. Form fields: intent (book or enquiry), name, email, organisation, telephone, topic, preferred date, preferred time, message. Button label “Send Message”, as on the design.
82. Validation: name at least 2 characters; email shape; telephone optional but at least 10 digits if present; topic must be one of the listed areas; a booking needs a date today or later and a time; an enquiry does not; message at least a sentence. Checked by `tests/enquiry.test.js` (8 tests, all passing) and by submitting an empty form in the browser, which showed the six expected messages and did not show a success state.
83. A valid submit builds `mailto:info@leadershipconsultant.co.uk` with the subject “Leadership conversation request” or “Enquiry for EmpathyWorks”. The status text says the email application should open and that the page cannot confirm receipt.

## Essays

84. **Why people don’t leave jobs — they leave leadership.** Full essay from `People-dont-leave-jobs-they-leave-Leadership.docx`, including the seven subtle patterns, seen / safe / stretched, the five questions, the five organisational moves, and compassion as a skill. Decorative emoji from the Word file are not used. The statistical sentences are kept as their essay, only on this page.
85. **Why do we need good leaders in the contemporary world?** Full essay. Obvious extraction breaks and the spellings Caesar and Gandhi are corrected; the argument is theirs. Simon Sinek and Kim Cameron are named because the essay names them.
86. **Great leader quotes, and what we think they mean.** Dalai Lama, Gandhi, Mandela, Mother Teresa, Jacinda Ardern, Martin Luther King Jr., Pope Francis, each with the client’s reading. The Pope Francis reading in the extracted PDF repeated “What we think this means”; the page keeps the intended sentence about mercy and a more just world.

## Photographs

87. `tempImage8jmwBp-2.JPG` cropped to remove the baked-in wordmark → `images/team.webp` (home hero, about).
88. `Image-59.JPG` cropped to the hand and seedling → `images/seedling.webp` (coaching hero). The source is 600 pixels wide; the crop is soft if enlarged. It is used at a modest height.
89. `WhatsApp-Image-2026-09-29-at-14.21.31-1-.jpeg` → `images/speaker.webp` (speaking hero, home band).
90. `Image-58.JPG` → `images/conversation.webp` (home close, coaching).
91. `Image-57.jpg` → `images/portrait-navy.webp` (home, evidence).
92. `Image-56.jpg` → `images/portrait-white.webp` (about).
93. `904a5fe2-e76c-445d-afa9-d43f7e39e4e9.jpg` → `images/portrait-blue.webp` (subscriptions).
94. `WhatsApp-Image-2026-09-29-at-14.21.31.jpeg` → `images/portrait-rollneck.webp` (speaking).
95. `image-2.PNG` cropped away from the baked-in logo → `images/portrait-outdoor.webp` (home).
96. `WhatsApp-Image-2026-09-29-at-14.21.31-2-.jpeg` → `images/woman-desk.webp` (hub).
97. `WhatsApp-Image-2026-09-29-at-14.21.31-3-.jpeg` → `images/two-at-desk.webp` (home credibility).
98. `WhatsApp-Image-2026-09-29-at-14.21.31-4-.jpeg` → `images/coaching-table.webp` (home coaching).
99. `paste-1791716963751.png` → `images/workspace.webp` (Human Workspace).
100. `PastedGraphic-1.png` not used in a slot. It is 450×300 and repeats the navy-suit portrait with a logo stamped on it. `Image-57.jpg` is the usable portrait.

No supplied photograph is captioned with Steve, Neil or Kellie’s name. The files do not say which face is which.

## Not claimed

The site does not add testimonials, client logos, awards, or performance statistics of its own. Prices that appear are the ones in the master copy and the Executive Leadership Programme PDF.
