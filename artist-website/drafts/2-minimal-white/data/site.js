// All the text on the website lives in this file. Edit the words here; the design is in css/style.css.
window.SITE = {
  artist: "Ajay Dhandre",

  // Home page: installation views, shown large one under another (ids from data/works.js).
  home: ["2015-2020-022", "2015-2020-020", "2015-2020-019", "2015-2020-021"],

  // Selected Works page: the works shown in the slideshow, in this order (oldest first).
  // To show a work, add its id here. Every work in data/works.js stays available.
  selectedWorks: [
    "2004-011", "2004-003", "2004-016",
    "2005-001", "2005-005", "2005-009", "2005-014", "2005-019",
    "2006-002", "2006-006", "2006-010", "2006-015", "2006-020",
    "2007-002", "2007-005", "2007-009", "2007-013", "2007-017", "2007-020",
    "2008-2010-001", "2008-2010-004", "2008-2010-007", "2008-2010-010", "2008-2010-013",
    "2011-2014-002", "2011-2014-006", "2011-2014-010", "2011-2014-015", "2011-2014-022", "2011-2014-028",
    "2011-2014-036", "2011-2014-044", "2011-2014-050", "2011-2014-056", "2011-2014-061",
    "2011-2014-068", "2011-2014-072", "2011-2014-077",
    "2015-2020-001", "2015-2020-003", "2015-2020-005", "2015-2020-008", "2015-2020-010",
    "2015-2020-012", "2015-2020-014",
    "2015-2020-024", "2015-2020-027", "2015-2020-031",
    "2021-2025-001", "2021-2025-003", "2021-2025-004", "2021-2025-005", "2021-2025-006", "2021-2025-007",
    "2024-2026-003", "2024-2026-008", "2024-2026-013", "2024-2026-019", "2024-2026-024", "2024-2026-029",
    "2024-2026-035", "2024-2026-040", "2024-2026-045", "2024-2026-050", "2024-2026-055"
  ],

  // Year links above the slideshow. Each jumps to the first selected work of that period.
  periods: [
    { id: "2004", label: "2004" }, { id: "2005", label: "2005" }, { id: "2006", label: "2006" },
    { id: "2007", label: "2007" }, { id: "2008-2010", label: "2008–2010" }, { id: "2011-2014", label: "2011–2014" },
    { id: "2015-2020", label: "2015–2020" }, { id: "2021-2026", label: "2021–2026" }
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
    image: "../../images/about/portrait.jpg"
  }
};
