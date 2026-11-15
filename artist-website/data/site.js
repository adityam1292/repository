// All the text on the website lives in this file. Edit the words here; the design is in css/style.css.
window.SITE = {
  artist: "Ajay Dhandre",
  tagline: "Drawings, paintings and sculpture where the organic meets the mechanical.",
  born: "Born 1977. Lives and works in Wardha, Maharashtra, India.",

  // The two works shown side by side at the top of the page (ids from data/works.js).
  heroFirst: "2004-011",
  heroLatest: "2024-2026-045",

  // Timeline chapters, oldest first. "from" and "to" decide which CV entries appear beside each chapter.
  periods: [
    { id: "2004", label: "2004", from: 2003, to: 2004, name: "Line drawings",
      intro: "The earliest sheets in the archive. Small outlined forms sit in rows, like lines of an invented script." },
    { id: "2005", label: "2005", from: 2005, to: 2005, name: "Small watercolours",
      intro: "The forms gain colour and volume. Each sheet, 16 × 12 inches, holds a single floating craft built from patterned parts." },
    { id: "2006", label: "2006", from: 2006, to: 2006, name: "Craft and habitats",
      intro: "Larger watercolours, mostly 30 × 20 inches. The craft begin to read as buildings and places to live." },
    { id: "2007", label: "2007", from: 2007, to: 2007, name: "First solo show",
      intro: "The year of ‘Hyper-Bio-Nano Materialism’ at Max Mueller Bhavan, Mumbai. Creatures and machines merge, and Michelangelo’s David and Creation of Adam are reworked as androids." },
    { id: "2008-2010", label: "2008–2010", from: 2008, to: 2010, name: "Bio-craft and cyber villages",
      intro: "Bio-aircraft, cyber villages and cybernetic devices in watercolour and pencil. In 2009 his work was part of Sotheby’s Indian Art auction in London." },
    { id: "2011-2014", label: "2011–2014", from: 2011, to: 2014, name: "Watercolour, drawing, sculpture",
      intro: "After a residency at Camac in France in 2011, the work spreads across watercolour, a large body of pencil drawings, and sculpture." },
    { id: "2015-2020", label: "2015–2020", from: 2015, to: 2020, name: "The Creator Series, The Found & the Made",
      intro: "‘The Creator Series’ was shown at Art Musings, Mumbai, in 2017. ‘The Found & the Made’ (2018) lays out natural and man-made objects on canvas. A set of small drawings followed in 2020." },
    { id: "2021-2026", label: "2021–2026", from: 2021, to: 2026, name: "Oil on canvas, Specimens of Becoming",
      intro: "Large oil paintings, up to 96 inches across, alongside dense pencil drawings of hybrid organisms. The 2026 drawings are titled ‘Specimens of Becoming’.",
      quote: "I see these works as specimens of an unknown inner biology, revealing how consciousness might construct form before thought becomes language.",
      quoteBy: "Ajay Dhandre, 2026" }
  ],

  about: [
    "Ajay Dhandre was born on 12 June 1977. He studied painting at the Government College of Art, Nagpur (BFA, 2001) and completed his MFA in Nagpur in 2018.",
    "His work explores the meeting of the organic and the mechanical, the known and the speculative. Spacecraft, habitats, cyborgs and hybrid creatures appear as carefully drawn specimens, in watercolour, pencil, oil and sculpture.",
    "He has had solo shows at Max Mueller Bhavan and Art Musings in Mumbai, was Saffronart’s Artist of the Month in 2009, and was artist in residence at Camac, France, in 2011. His work has been included in auctions at Sotheby’s London and AstaGuru.",
    "He draws on thinkers such as U.G. Krishnamurti and Ludwig Wittgenstein, and describes his art as a search for a universal language of forms, one that technology and nature share."
  ],

  statement: {
    title: "Specimens of Becoming",
    text: [
      "These drawings explore a world where form is constantly mutating, caught between the organic, the mechanical, and the primordial. Each piece grows intuitively, emerging through layered lines that mimic the slow evolution of living matter. The figures appear as hybrid organisms, building and dissolving themselves in the same breath. Their limbs, textures, and structures suggest a language of transformation rather than fixed identity.",
      "I see these works as specimens of an unknown inner biology, revealing how consciousness might construct form before thought becomes language. They carry the tension between engineered precision and raw, instinctive growth. Together, they form a visual ecosystem of becoming, where creation remains fluid, uncertain, and intensely alive."
    ],
    by: "Ajay Dhandre, 2026"
  },

  writing: [
    { quote: "The aura of science fiction surrounds Ajay Dhandre’s delightful, meticulously detailed paintings. The mechanisms and habitats that he conjures up are presented as jewel-like specimens in a museum of predictions.",
      by: "Ranjit Hoskote", source: "‘Whispering in the Robot’s Ears’, catalogue essay, Bombay, December 2007" },
    { quote: "What looked like spaceships and space-stations could also be seen as exotic beetle-like creatures for the non-organic age.",
      by: "Abhijeet Tamhane", source: "‘Ajay Dhandre Confronts the Coexistence of Science and Emotion’, Art & Deal, 2008" }
  ],

  // CV. Each entry: [year, text]. Add new entries at the top of the right list.
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

  studio9: {
    title: "Studio 9, Wardha",
    by: "Pit-fired pottery by Rekha Ajay Dhandre",
    text: "Each piece is shaped entirely by hand and transformed by fire and smoke in an open pit. Wood, leaves and sawdust give the clay earthy tones and patterns that can never be repeated.",
    shows: [
      [2024, "Studio Art Pottery, Apparao Galleries, The Chennai Market, Chennai"],
      [2023, "TerraFest, Triveni Kala Sangam, Blue Pottery Trust, Delhi"],
      [2023, "Hyderabad Potters Market, Hyderabad"],
      [2022, "TerraFest, Triveni Kala Sangam, Blue Pottery Trust, Delhi"] ],
    instagram: "studio9_wardha",
    images: ["images/studio9/pot-1.jpg", "images/studio9/pot-2.jpg", "images/studio9/pot-3.jpg", "images/studio9/pot-4.jpg", "images/studio9/pot-5.jpg", "images/studio9/pot-6.jpg"]
  },

  contact: {
    intro: "For purchases, commissions and exhibitions, write to the artist.",
    email: "dhandre2ajay@yahoo.co.in",
    location: "Wardha, Maharashtra, India"
  }
};
