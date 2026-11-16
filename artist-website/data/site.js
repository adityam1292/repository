// All the text on the website lives in this file. Edit the words here; the design is in css/style.css.
window.SITE = {
  artist: "Ajay Dhandre",

  // Home page: installation views, shown large one under another (ids from data/works.js).
  home: ["2015-2020-022", "2015-2020-020", "2015-2020-019", "2015-2020-021"],

  // The works are shown in year chapters. "name" and "intro" appear above each chapter's works.
  periods: [
    { id: "2004", label: "2004", name: "Line drawings",
      intro: "The earliest sheets in the archive. Small outlined forms sit in rows, like lines of an invented script." },
    { id: "2005", label: "2005", name: "Small watercolours",
      intro: "The forms gain colour and volume. Each sheet holds a single floating craft built from patterned parts." },
    { id: "2006", label: "2006", name: "Craft and habitats",
      intro: "Larger watercolours, mostly 30 × 20 inches. The craft begin to read as buildings and places to live." },
    { id: "2007", label: "2007", name: "First solo show",
      intro: "The year of ‘Hyper-Bio-Nano Materialism’ at Max Mueller Bhavan, Mumbai. Creatures and machines merge, and Michelangelo’s David and Creation of Adam are reworked as androids." },
    { id: "2008-2010", label: "2008–2010", name: "Bio-craft and cyber villages",
      intro: "Bio-aircraft, cyber villages and cybernetic devices in watercolour and pencil. In 2009 his work was part of Sotheby’s Indian Art auction in London." },
    { id: "2011-2014", label: "2011–2014", name: "Watercolour, drawing, sculpture",
      intro: "After a residency at Camac in France in 2011, the work spreads across watercolour, a large body of pencil drawings, and sculpture." },
    { id: "2015-2020", label: "2015–2020", name: "The Creator Series, The Found & the Made",
      intro: "‘The Creator Series’ was shown at Art Musings, Mumbai, in 2017. ‘The Found & the Made’ (2018) lays out natural and man-made objects on canvas. A set of small drawings followed in 2020." },
    { id: "2021-2025", label: "2021–2025", name: "Oil on canvas",
      intro: "Large oil paintings, up to 96 inches across, alongside dense pencil drawings of hybrid organisms." }
  ],

  // Draft 6: the full-screen entrance image and where to centre it on narrow screens.
  gallery: {
    entrance: "images/home/found-and-made.jpg",
    entranceTitle: "The Found & the Made, 2018. Natural and man-made objects on canvas, 64 × 115 in",
    entranceFocus: "58% 38%"
  },

  // Exhibitions, newest first. Used by the exhibition-led drafts (4, 5 and 6).
  // "images" are installation views in images/exhibitions/. "works" lists artwork ids from data/works.js.
  exhibitions: [
    { id: "ephemeral", year: 2026, kind: "Two-person exhibition", title: "Ephemeral", venue: "Art Musings", city: "Mumbai", dates: "June 2026",
      text: "A two-person exhibition at Art Musings, the Mumbai gallery that has shown his work since 2011.",
      works: ["2021-2025-001", "2021-2025-003", "2021-2025-004"],
      worksLabel: "Recent work, 2025" },
    { id: "showkeen", year: 2025, kind: "Group exhibition", title: "Showkeen", venue: "Nehru Centre", city: "Mumbai",
      text: "An exhibition of modern and contemporary Indian art.", credit: "Presented by AstaGuru",
      works: ["2021-2025-005", "2021-2025-006", "2021-2025-007"],
      worksLabel: "Works from 2025" },
    { id: "the-book-project", year: 2025, kind: "Group exhibition", title: "The Book Project", venue: "Shridharani Gallery", city: "New Delhi",
      credit: "Curated by Shijo Jacob. Presented by Apparao Galleries",
      works: ["2021-2025-007", "2021-2025-006", "2021-2025-005"],
      worksLabel: "Works from 2025" },
    { id: "cosmic-duality", year: 2024, kind: "Group exhibition", title: "Cosmic Duality", venue: "Apparao Galleries", city: "Delhi",
      works: ["2021-2025-002", "2021-2025-001", "2021-2025-003"],
      worksLabel: "Works from 2024–2025" },
    { id: "art-musings-20", year: 2019, kind: "Group exhibition", title: "Art Musings: 20th Anniversary", venue: "Jehangir Art Gallery", city: "Mumbai",
      text: "The installation ‘The Found & the Made’ (2018) was shown here: natural and man-made objects laid out on a low plinth and in a glass vitrine, alongside a set of framed drawings.",
      images: ["images/exhibitions/ex-2019-1.jpg", "images/exhibitions/ex-2019-3.jpg", "images/exhibitions/ex-2019-detail.jpg"],
      works: ["2015-2020-019", "2015-2020-020", "2015-2020-022"],
      worksLabel: "From ‘The Found & the Made’, 2018" },
    { id: "the-creator-series", year: 2017, kind: "Solo exhibition", title: "The Creator Series", venue: "Art Musings", city: "Mumbai",
      text: "A solo exhibition exploring creation and existence.",
      works: ["2015-2020-001", "2015-2020-002", "2015-2020-003", "2015-2020-004", "2015-2020-005", "2015-2020-006"],
      worksLabel: "Works from 2015–2017" },
    { id: "india-art-fair", year: 2014, kind: "Art fair", title: "India Art Fair", venue: "Presented by Art Musings", city: "New Delhi",
      works: ["2011-2014-013", "2011-2014-014", "2011-2014-015", "2011-2014-016", "2011-2014-017", "2011-2014-046"],
      worksLabel: "Works from 2014" },
    { id: "camac", year: 2011, kind: "Residency", title: "Artist residency", venue: "Camac Centre d’Art", city: "Marnay, France",
      text: "A residency in France, followed by a research tour through France, Spain and Italy, supported by a Ratan Tata Foundation travel grant.",
      works: ["2011-2014-001", "2011-2014-002", "2011-2014-003", "2011-2014-004", "2011-2014-005", "2011-2014-064"],
      worksLabel: "Works from 2011" },
    { id: "evolution-of-the-species", year: 2010, kind: "Group exhibition", title: "The Evolution of the Species", venue: "ICIA Gallery", city: "Mumbai",
      works: ["2008-2010-011", "2008-2010-012", "2008-2010-013", "2008-2010-014", "2008-2010-015"],
      worksLabel: "Works from 2010" },
    { id: "saffronart", year: 2009, kind: "Online feature", title: "Artist of the Month", venue: "Saffronart", city: "Mumbai",
      works: ["2008-2010-008", "2008-2010-009", "2008-2010-010"],
      worksLabel: "Works from 2009" },
    { id: "hyper-bio-nano-materialism", year: 2007, kind: "Solo exhibition", title: "Hyper-Bio-Nano Materialism", venue: "Max Mueller Bhavan, Museum Gallery", city: "Mumbai",
      text: "His first solo exhibition. Drawings and watercolours of spacecraft, habitats and hybrid creatures, including reworkings of Michelangelo’s David and The Creation of Adam as androids.",
      credit: "Catalogue essay by Ranjit Hoskote, ‘Whispering in the Robot’s Ears’",
      images: ["images/exhibitions/ex-2007-1.jpg"],
      works: ["2007-002", "2007-005", "2007-009", "2007-013", "2007-017", "2007-020"],
      worksLabel: "Works from 2007" }
  ],

  // Critics' words. "show" links a quote to an exhibition id above; "lead" quotes are shown large.
  critics: [
    { lead: true, show: "hyper-bio-nano-materialism", by: "Ranjit Hoskote", role: "Critic and poet",
      source: "‘Whispering in the Robot’s Ears’, catalogue essay, Bombay, December 2007",
      quote: "The aura of science fiction surrounds Ajay Dhandre’s delightful, meticulously detailed paintings. The mechanisms and habitats that he conjures up are presented as jewel-like specimens in a museum of predictions." },
    { lead: true, show: "hyper-bio-nano-materialism", by: "Abhijeet Tamhane", role: "Art & Deal",
      source: "‘Ajay Dhandre Confronts the Coexistence of Science and Emotion’, Art & Deal, 2008",
      quote: "What looked like spaceships and space-stations could also be seen as exotic beetle-like creatures for the non-organic age." },
    { show: "hyper-bio-nano-materialism", by: "Ranjit Hoskote", role: "Critic and poet",
      source: "‘Whispering in the Robot’s Ears’, 2007",
      quote: "The artist proposes an architecture of wonder for worlds to come." },
    { show: "hyper-bio-nano-materialism", by: "Abhijeet Tamhane", role: "Art & Deal",
      source: "Art & Deal, 2008",
      quote: "One is confronted with the army of unanswerable questions about the coexistence of science and emotion, after Ajay Dhandre’s show." }
  ],

  // Series, newest first. Each groups works from data/works.js by period, medium and year.
  series: [
    { id: "oil-on-canvas", title: "Oil on canvas", years: "2024–2025", match: { period: "2021-2025" },
      intro: "Large oil paintings, up to 96 inches across, alongside a dense pencil drawing of hybrid organisms." },
    { id: "drawings-2020", title: "Small drawings", years: "2020", match: { period: "2015-2020", category: "Drawings" },
      intro: "A set of small drawings on paper, most of them 12 × 8 inches." },
    { id: "the-found-and-the-made", title: "The Found & the Made", years: "2018", match: { period: "2015-2020", category: "Installation" },
      intro: "Natural and man-made objects laid out in spirals and rows. Shown at Jehangir Art Gallery, Mumbai, in 2019." },
    { id: "works-on-paper-2015", title: "Works on paper", years: "2015–2017", match: { period: "2015-2020", category: ["Works on paper", "Oil on canvas"] },
      intro: "Watercolours and works on paper from the years of ‘The Creator Series’ (2017)." },
    { id: "sculpture", title: "Sculpture", years: "2011–2013", match: { period: "2011-2014", category: "Sculpture" },
      intro: "Sculptural versions of the hybrid creatures from the drawings." },
    { id: "drawings-2012", title: "Pencil drawings", years: "2012–2013", match: { period: "2011-2014", category: "Drawings" },
      intro: "A large body of pencil drawings made after the residency in France." },
    { id: "watercolours-2011", title: "Watercolours", years: "2011–2014", match: { period: "2011-2014", category: "Works on paper" },
      intro: "Watercolours and works on paper, some up to 84 inches across." },
    { id: "bio-craft", title: "Bio-craft and cyber villages", years: "2008–2010", match: { period: "2008-2010" },
      intro: "Bio-aircraft, cyber villages and cybernetic devices in watercolour and pencil." },
    { id: "creatures-and-machines", title: "Creatures and machines", years: "2007", match: { period: "2007" },
      intro: "The year of his first solo show, ‘Hyper-Bio-Nano Materialism’, at Max Mueller Bhavan, Mumbai." },
    { id: "craft-and-habitats", title: "Craft and habitats", years: "2006", match: { period: "2006" },
      intro: "Larger watercolours, mostly 30 × 20 inches. The craft begin to read as buildings and places to live." },
    { id: "small-watercolours", title: "Small watercolours", years: "2005", match: { period: "2005" },
      intro: "Each sheet holds a single floating craft built from patterned parts." },
    { id: "line-drawings", title: "Line drawings", years: "2004", match: { period: "2004" },
      intro: "The earliest sheets in the archive: small outlined forms in rows, like lines of an invented script." }
  ],

  // About page: a short biography on the left, the résumé on the right.
  bio: [
    "Ajay Dhandre (b. 1977) works in drawing, watercolour, oil and sculpture. His work explores the meeting of the organic and the mechanical: spacecraft, habitats, cyborgs and hybrid organisms, drawn as specimens of possible futures.",
    "He studied painting at the Government College of Art, Nagpur, and has had solo shows at Max Mueller Bhavan and Art Musings in Mumbai. In 2011 he was artist in residence at Camac, France. His work has been included in auctions at Sotheby’s London and AstaGuru."
  ],
  resumeIntro: ["Born 1977", "Lives and works in Wardha, Maharashtra, India"],

  // Résumé. Each entry: [year, text]. Add new entries at the top of the right list.
  cv: [
    { heading: "Education", items: [
      [2018, "MFA (Painting), CISFA College of Art, Nagpur"],
      [2001, "BFA (Painting), Government College of Art, Nagpur"] ] },
    { heading: "Solo shows", items: [
      [2017, "‘The Creator Series’, Art Musings, Mumbai"],
      [2009, "Artist of the Month, Saffronart, Mumbai"],
      [2007, "‘Hyper-Bio-Nano Materialism’, Max Mueller Bhavan, Museum Gallery, Mumbai"] ] },
    { heading: "Two-person shows", items: [
      [2026, "‘Ephemeral’, Art Musings, Mumbai"] ] },
    { heading: "Group shows", items: [
      [2025, "‘Showkeen’, modern and contemporary Indian art, presented by AstaGuru, Nehru Centre, Mumbai"],
      [2025, "‘The Book Project’, curated by Shijo Jacob, Shridharani Gallery, New Delhi, presented by Apparao Galleries"],
      [2024, "‘Cosmic Duality’, Apparao Galleries, Delhi"],
      [2019, "Art Musings 20th anniversary show, Jehangir Art Gallery, Mumbai"],
      [2017, "‘Black / White II’, Art Musings, Mumbai"],
      [2014, "‘Black / White’, Art Musings, Mumbai"],
      [2014, "India Art Fair, presented by Art Musings, Mumbai"],
      [2013, "‘Quarto II’, Art Musings, Mumbai"],
      [2011, "Angel Art Gallery, JW Marriott, Mumbai"],
      [2011, "‘Quarto’, Art Musings, Mumbai"],
      [2010, "‘The Evolution of the Species’, ICIA Gallery, Mumbai"],
      [2009, "‘Labyrinths Urban-Organic’, 1x1 Art Gallery, Dubai"],
      [2009, "‘Resonating Pulse’, Alliance Française, Delhi"],
      [2009, "‘The Miniature Format Show’, Sans Tache Art Gallery, Mumbai"],
      [2008, "‘Third Life’, Bombay Art Gallery, Mumbai"],
      [2008, "‘Millennium Turks’, Art Consult, New Delhi"],
      [2007, "Project 88, Mumbai"],
      [2007, "‘Does Size Matter?’, Art Consult, New Delhi and Mumbai"],
      [2006, "‘Ye Hai Mumbai Meri Jaan’, Lalit Kala Akademi, Delhi"],
      [2005, "‘Point & Line to Plane II’, Gallery Beyond, Mumbai"],
      [2005, "Lalit Kala Akademi, New Delhi"],
      [2004, "‘Point & Line to Plane I’, Gallery Beyond, Mumbai"],
      [2004, "K.C.P. Art Gallery, Bangalore"],
      [2003, "Lalit Kala Akademi, New Delhi"],
      [2003, "Bharat Bhavan, Bhopal"] ] },
    { heading: "Residencies, workshops and research", items: [
      [2018, "National Masters Artists’ Workshop, State University of Performing and Visual Arts, Rohtak"],
      [2011, "Artist residency, Camac Centre d’Art, Marnay, France"],
      [2011, "Art research tour through France, Spain and Italy"],
      [2011, "Ratan Tata Foundation travel grant"] ] },
    { heading: "Auctions", items: [
      [2024, "AstaGuru online auction, contemporary Indian art (also 2023, 2021, 2019, 2016, 2015)"],
      [2011, "Slums of Hope and Lend-a-Hand charity auction, New York"],
      [2009, "Sotheby’s, Indian Art, London"],
      [2009, "Concern India Foundation charity auction, Mumbai (also 2008)"] ] },
    { heading: "Art camps and participations", items: [
      [2009, "RPG annual art camp, Madh Island, Mumbai"],
      [2009, "Le Royal Meridien art camp, Gallery Beyond, Mumbai (also 2007)"],
      [2007, "Maldives art camp, Gallery Art Resource Trust, Mumbai"],
      [2004, "6th Bharat Bhavan International Biennial of Print, Bhopal"],
      [2004, "All India Fine Arts and Crafts Society, New Delhi"],
      [2003, "Art camps at City Palace, Jaipur, and Venu Eye Institute, New Delhi"],
      [2003, "100 Years of the Kalka–Shimla rail track, Barog, Northern Railways"],
      [1988, "Fifth Kanagawa Biennial World Children’s Art Exhibition, Japan"] ] }
  ],

  // Texts page.
  statement: {
    title: "Specimens of Becoming",
    by: "Ajay Dhandre, 2026",
    text: [
      "These drawings explore a world where form is constantly mutating, caught between the organic, the mechanical, and the primordial. Each piece grows intuitively, emerging through layered lines that mimic the slow evolution of living matter. The figures appear as hybrid organisms, building and dissolving themselves in the same breath. Their limbs, textures, and structures suggest a language of transformation rather than fixed identity.",
      "I see these works as specimens of an unknown inner biology, revealing how consciousness might construct form before thought becomes language. They carry the tension between engineered precision and raw, instinctive growth. Together, they form a visual ecosystem of becoming, where creation remains fluid, uncertain, and intensely alive."
    ]
  },
  texts: [
    { author: "Ranjit Hoskote", title: "Whispering in the Robot’s Ears: Recent Works by Ajay Dhandre", where: "Catalogue essay, Bombay, December 2007",
      excerpt: "The aura of science fiction surrounds Ajay Dhandre’s delightful, meticulously detailed paintings. The mechanisms and habitats that he conjures up are presented as jewel-like specimens in a museum of predictions." },
    { author: "Abhijeet Tamhane", title: "Ajay Dhandre Confronts the Coexistence of Science and Emotion", where: "Art & Deal, 2008",
      excerpt: "What looked like spaceships and space-stations could also be seen as exotic beetle-like creatures for the non-organic age." }
  ],

  // Contact page.
  contact: {
    email: "dhandre2ajay@yahoo.co.in",
    location: "Wardha, Maharashtra, India",
    newsletterSubject: "Newsletter",
    newsletterBody: "I would like to subscribe to the mailing list and receive updates on upcoming exhibitions and projects.",
    image: "images/about/portrait.jpg"
  }
};
