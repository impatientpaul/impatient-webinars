const speaker = (name, role, company, image = null) => ({ name, role, company, image });

const webinars = {
  84: {
    title: 'Global Women’s Pharma <em>Summit</em>',
    premise: 'Leadership isn’t just strategic. It’s personal.',
    date: 'Originally held 6 March 2026',
    heading: 'The conversations behind sustainable leadership.',
    summary: [
      'An interactive online summit for women across pharma and life sciences, built around the issues that rarely fit into conventional leadership programmes.',
      'The day moved between ambition and burnout, visibility and invisible labour, personal boundaries and the systems that make them difficult to hold.'
    ],
    topics: ['Imposter syndrome and self-belief', 'Burnout, boundaries and invisible labour', 'Visibility, power and sustainable ambition'],
    speakers: [
      speaker('Jane Galloway', 'Speaker', ''), speaker('Carrie-Ann Wade', 'Speaker', ''), speaker('Thushani Lovatt', 'Speaker', ''),
      speaker('Helen Taylor', 'Speaker', ''), speaker('Sarah Dancy Blackburn', 'Speaker', ''), speaker('Paul Simms', 'Host', 'Impatient Health')
    ],
    recording: null,
    recordingCopy: 'The summit recording is available to members in the Impatient community.'
  },
  85: {
    title: 'Restructure your brand strategy for <em>AI</em>',
    premise: 'If AI is going to execute your strategy, it needs to be able to read it.',
    date: 'Originally broadcast 26 March 2026',
    heading: 'A brand plan built for people and machines.',
    summary: [
      'Most brand plans were designed to be interpreted by experienced humans. AI cannot infer which guidance is fixed, which is flexible and which is merely inherited habit.',
      'This session explored how to turn strategy into clearer instructions without flattening judgement or creativity.'
    ],
    topics: ['Faster execution without strategic drift', 'Cleaner governance across markets and functions', 'AI grounded in explicit brand choices'],
    speakers: [
      speaker('Yazan Iwidat', 'Global Omnichannel Experience Standards Lead', 'MSD', 'yazan-iwidat.jpg'),
      speaker('Megan Reutin', 'Global Head of Data Science and Strategy', 'Grünenthal', 'megan-reutin.jpg'),
      speaker('Huw Jenkins', 'Director, Global Content Strategy', 'Astellas', 'huw-jenkins.jpg'),
      speaker('Tom Botting', 'Director', 'Forge DC', 'tom-botting.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms.jpg')
    ],
    recording: 'https://youtu.be/ReTPB5XCfi8'
  },
  86: {
    title: 'Launch <em>Leadership</em>',
    premise: 'AI can accelerate insight. It cannot make the difficult decision for you.',
    date: 'Originally broadcast 31 March 2026',
    heading: 'Why more insight does not automatically create momentum.',
    summary: [
      'Launch teams are surrounded by evidence, dashboards and increasingly capable AI. Yet the decisions that determine a launch can still stall between functions.',
      'The panel examined the leadership habits that turn abundant insight into clear, timely action.'
    ],
    topics: ['Where launch decisions really stall', 'How AI exposes slow decision cycles', 'Turning analysis into decision-ready intelligence'],
    speakers: [
      speaker('Lance Hill', 'CEO', 'Within3', 'lance-hill.jpg'),
      speaker('Mark Montgomery', 'VP, Global Business Analytics & Commercial Excellence', 'Grifols', 'mark-montgomery.jpg'),
      speaker('Stacey Gorski', 'Head of Medical Excellence, US Oncology', 'AstraZeneca', 'stacey-gorski.jpg'),
      speaker('Alex Condoleon', 'Chief Medical Affairs Officer', 'Pfizer', 'alex-condoleon.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-86.jpg')
    ],
    recording: 'https://youtu.be/9UntM9Hk6lc'
  },
  87: {
    title: 'Launch Leadership: the <em>summit push</em>',
    premise: 'The operating model behind faster, better launch decisions.',
    date: 'Originally broadcast 29 April 2026',
    heading: 'Insight only matters when someone owns the next move.',
    summary: [
      'This follow-up session moved from the problem to the operating model: who owns a decision, how often the team returns to it and what evidence is genuinely enough to proceed.',
      'The discussion focused on practical cadence, credible AI-supported insight and the discipline of deciding before certainty arrives.'
    ],
    topics: ['Clear ownership and decision cadence', 'Defining good-enough evidence', 'Making AI insight credible inside the team'],
    speakers: [
      speaker('Lance Hill', 'CEO', 'Within3', 'lance-hill-87.jpg'),
      speaker('Mark Montgomery', 'VP, Global Business Analytics & Commercial Excellence', 'Grifols', 'mark-montgomery-87.jpg'),
      speaker('Stacey Gorski', 'Head of Medical Excellence, US Oncology', 'AstraZeneca', 'stacey-gorski-87.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-87.jpg')
    ],
    recording: 'https://youtu.be/NomiOQzs1YU'
  },
  88: {
    title: 'The GLP-1 <em>aftershock effects</em>',
    premise: 'Obesity medicines are changing far more than the obesity market.',
    date: 'Originally broadcast 25 June 2026',
    heading: 'What happens when patient pull rewrites the market.',
    summary: [
      'Built on conversations with more than 100 obesity stakeholders, this session looked beyond the first wave of GLP-1 demand.',
      'The panel explored direct-to-consumer behaviour, employer channels and the expansion of the category into adjacent conditions.'
    ],
    topics: ['Patient demand and changing expectations', 'Direct-to-consumer and employer access models', 'The next conditions reshaped by GLP-1s'],
    speakers: [
      speaker('Christine Tsakiris', 'Medical Director', 'Edgewise Therapeutics', 'christine-tsakiris.jpg'),
      speaker('Sean Vander Linde', 'Partner', 'BGBx', 'sean-vander-linde.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-88.jpg')
    ],
    recording: 'https://youtu.be/vEBtZcwuhyE'
  },
  89: {
    title: 'The truth about AI in <em>the field</em>',
    premise: 'Adoption is not a technology problem. It is a trust problem.',
    date: 'Originally broadcast 30 June 2026',
    heading: 'What field teams actually think about AI.',
    summary: [
      'AI promises better coaching, sharper preparation and more relevant HCP conversations. Field teams also see surveillance, imposed workflows and another system asking for their attention.',
      'This panel confronted the gap between the executive promise and day-to-day reality.'
    ],
    topics: ['Trust, adoption and the “Big Brother” fear', 'AI as a coaching tool rather than a compliance layer', 'How HCPs respond to AI-supported engagement'],
    speakers: [
      speaker('Christine Duborg', 'SVP, North & South America Client Relations', 'ADVANCE AI', 'christine-duborg.jpg'),
      speaker('Ryan Beaird', 'Senior Area General Manager', 'Bayer Pharmaceuticals', 'ryan-beaird.jpg'),
      speaker('Joaquin Martinez', 'VP, Head of Marketing', 'Xeris Pharmaceuticals', 'joaquin-martinez.jpg'),
      speaker('Chris Cahill', 'Former VP, Head of Sales', 'The Reflective Professional', 'chris-cahill.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-89.jpg')
    ],
    recording: 'https://youtu.be/mK2kKKU6c6Y'
  },
  90: {
    title: 'The <em>Scoop</em>',
    premise: 'What does it actually take to get shortlisted for the Impatient Health Awards?',
    date: 'Originally broadcast 27 August 2026',
    heading: 'The judges wanted decisions that cost something.',
    summary: [
      'A direct conversation with the people judging the Impatient Health Awards: what they notice, what they distrust and why polish is never a substitute for courage.',
      'The panel explained how to write an entry around the thing that actually happened — the decision, the risk and the consequence.'
    ],
    topics: ['What gets an entry shortlisted', 'Why brave decisions beat polished claims', 'How to tell the story without sanding off the tension'],
    speakers: [
      speaker('Sjaak Vink', 'Founder & CEO', 'Everyone.org', 'sjaak-vink.jpg'),
      speaker('Rina Newton', 'Co-founder', 'Code Clarity', 'rina-newton.jpg'),
      speaker('Lucy Osborne', 'Director of Community & Events', 'Impatient Health', 'lucy-osborne.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-90.jpg')
    ],
    recording: 'https://youtu.be/Pw7_yvjKK-s'
  },
  91: {
    title: 'The HCP engaged. So why didn’t <em>anything change?</em>',
    premise: 'Engagement is not the outcome. A better next decision is.',
    date: 'Originally broadcast 24 September 2026',
    heading: 'When interaction rises but behaviour stays still.',
    summary: [
      'Pharma can report clicks, visits, opens and conversations in extraordinary detail. None of those measures proves that an HCP made a different clinical decision.',
      'The panel asked what has to happen between engagement and action — and which teams must align to make it possible.'
    ],
    topics: ['From engagement to the next-best decision', 'Cross-functional alignment around HCP needs', 'Measuring change rather than activity'],
    speakers: [
      speaker('Carlos Eid', 'Board member, Medical Affairs', 'Novartis Poland', 'carlos-eid.jpg'),
      speaker('Chiara Bolognini', 'Global Lead CJ Marketing & Sales', 'Roche', 'chiara-bolognini.jpg'),
      speaker('Kieran Davey', 'Head of Gynecological Cancers, Global Medical Affairs', 'AstraZeneca', 'kieran-davey.jpg'),
      speaker('Cliff Walton', 'EU Director, Digital (Omnichannel)', 'Syneos Health', 'cliff-walton.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-91.jpg')
    ],
    recording: 'https://youtu.be/AK5PExgFjOQ'
  },
  92: {
    title: 'Market access: built in, <em>not bolted on</em>',
    premise: 'Access cannot rescue an asset it was never allowed to shape.',
    date: 'Originally broadcast 30 September 2026',
    heading: 'What changes when access starts early.',
    summary: [
      'Market access is often asked to translate evidence and price a proposition after the most consequential development choices have already been made.',
      'This panel explored how access thinking can shape the asset itself, expose problems earlier and connect coverage with real adoption.'
    ],
    topics: ['Evidence designed for future access', 'Catching access problems before launch', 'Moving from coverage to adoption'],
    speakers: [
      speaker('Donielle Gangoli', 'VP, ACD, Copy', 'Payer Communications, BGBx', 'donielle-gangoli.jpg'),
      speaker('Jennifer Dong', 'Principal', 'Hayden, BGBx Consulting', 'jennifer-dong.jpg'),
      speaker('Iroda Jurabekova', 'Executive Director, Global Market Access, Oncology', 'Boehringer Ingelheim', 'iroda-jurabekova.jpg'),
      speaker('Yvette Venable', 'Interim Head of Europe and Canada Market Access', 'AstraZeneca', 'yvette-venable.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-92.jpg')
    ],
    recording: 'https://youtu.be/rQRoQy0-7k8'
  },
  93: {
    title: 'Does pharma <em>still need to advertise</em>, now that we have AI?',
    premise: 'When LLMs inform and frame the choice before patients and HCPs see your campaign, creativity needs a new job.',
    date: 'Originally broadcast 5 November 2026',
    heading: 'Advertising is no longer the first influence in the room.',
    summary: [
      'Patients and HCPs are increasingly using AI to interpret symptoms, compare options and decide what deserves attention. That changes where a campaign enters the decision — and what it must do when it gets there.',
      'The panel debated whether pharma should keep investing in advertising, change its role or redirect the money entirely.'
    ],
    topics: ['How LLMs mediate brand and category choice', 'The new job for creativity', 'Where pharma should invest if advertising matters less'],
    speakers: [
      speaker('Sarah Christensen', 'Digital Transformation Lead', 'LEO Pharma', 'sarah-christensen.jpg'),
      speaker('Natalie Bloomfield', 'Director, Patient Strategy, Global Obesity Portfolio & Launch', 'Novo Nordisk', 'natalie-bloomfield.jpg'),
      speaker('Bob Munier', 'EVP, Managing Director, Strategy', 'BGBx Consulting', 'bob-munier.jpg'),
      speaker('Paul Simms', 'Host', 'Impatient Health', 'paul-simms-93.jpg')
    ],
    recording: 'https://youtu.be/1EuNDAQRJuw'
  }
};

const match = window.location.pathname.match(/webinar(\d+)/i);
const webinarNumber = Number(match?.[1] || 93);
const event = webinars[webinarNumber] || webinars[93];

document.title = `${event.title.replace(/<[^>]+>/g, '')} — Impatient`;
document.querySelector('meta[name="description"]').content = event.premise;
document.getElementById('event-title').innerHTML = event.title;
document.getElementById('event-premise').textContent = event.premise;
document.getElementById('event-date').textContent = event.date;
document.getElementById('summary-title').innerHTML = event.heading;

const summary = document.getElementById('event-summary');
event.summary.forEach(text => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  summary.append(paragraph);
});

const topics = document.getElementById('event-topics');
event.topics.forEach(text => {
  const item = document.createElement('li');
  item.textContent = text;
  topics.append(item);
});

const speakerGrid = document.getElementById('speaker-grid');
event.speakers.forEach(person => {
  const card = document.createElement('article');
  card.className = 'speaker-card';
  const initials = person.name.split(/\s+/).map(part => part[0]).slice(0, 2).join('');
  card.innerHTML = `
    ${person.image
      ? `<div class="speaker-image"><img src="../assets/speakers/${person.image}" alt="${person.name}" width="360" height="360"></div>`
      : `<div class="speaker-placeholder" aria-hidden="true">${initials}</div>`}
    <h3>${person.name}</h3>
    <p>${person.role}${person.company ? `<br><strong>${person.company}</strong>` : ''}</p>`;
  speakerGrid.append(card);
});

const recordingCopy = document.getElementById('recording-copy');
const recordingCta = document.getElementById('recording-cta');
const heroCta = document.getElementById('hero-cta');
const headerCta = document.getElementById('header-cta');
recordingCopy.textContent = event.recordingCopy || 'Watch the complete discussion, including the audience questions and the points that could not be reduced to a slide.';

if (event.recording) {
  [recordingCta, heroCta, headerCta].forEach(link => {
    link.href = event.recording;
    link.target = '_blank';
    link.rel = 'noopener';
  });
} else {
  recordingCta.textContent = 'Available in Circle';
  recordingCta.setAttribute('aria-disabled', 'true');
  heroCta.textContent = 'Recording in Circle';
  heroCta.href = '#recording';
  headerCta.textContent = 'Recording in Circle';
  headerCta.href = '#recording';
}
