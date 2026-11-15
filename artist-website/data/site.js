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
