module.exports = {
  content: ["./index.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        washi: "#F9F8F5",
        "washi-2": "#F2EFE9",
        "washi-3": "#EAE6DE",
        ink: "#121214",
        "ink-soft": "#1C1C1F",
        sumi: "#0C0C0E",
        vermilion: "#C82A2A",
        "vermilion-deep": "#9E1F1F",
        brass: "#C5A059",
        "brass-ink": "#8A6A22"
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        marc: ["Marcellus", "serif"],
        eyebrow: ["Cinzel", "serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
        kanji: ['"Shippori Mincho"', "serif"],
        label: ["Oswald", "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"]
      }
    }
  }
};
