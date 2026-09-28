/* Selection for with-feral-hardware.html
   Runs after data.js and before script.js, so script.js only ever sees these works.
   Nothing in data.js is duplicated or changed. */

(function () {
  // Works from data.js to keep (by id).
  const keep = [
    "vig-inc",         // VIGILIA_INCONCLUSA
    "marg-ref",        // MARGINALIA REFRACTIVA
    "presion-deseo"    // HAVE YOU EVER SUFFERED THE PRESSURE OF DESIRE?
  ];

  // Works that only exist on this page.
  const newWorks = [
    {
      id: "meta-owxs-you",
      title: "Meta Owxs You",
      year: "2026",
      category: "art",              // only affects the circle's glow color
      symbols: "",
      thumbnail: "images/owxsyou.png",
      images: [
        "images/owxsyou.png",
        "images/metaowsxyou2.png"
      ],
      decoration: "",               // optional ASCII/HTML shown in the left column
      description: "<p>Do you know how much Google, Meta, or OpenAI owe you? Meta Ow_s You is a speculative artifact that captures the moment collective resignation toward digital feudalism begins to mutate. At its center is a mid-sized consultation station where visitors input their Instagram handle, years of use, and patterns of engagement — and receive a printed ticket calculating how much Meta owes them for decades of unpaid digital labor: attention, data, cultural production, and algorithmic training.<br><br> The project uses the language of communist imaginaries deliberately: algorithmic surplus value, digital means of production, techno-worker class, in order to force a question about which world we'd rather inhabit.<br><br>The artifact plays with the visual tension between communist and labor movement aesthetics (red and yellow, industrial typography, production iconography) and the visual vocabulary of late-stage digital capitalism, optimization culture, visual gentrification, hyperstimulation, exploring what luxury communism might look like as a design language.<br><br>Exhibited at Futuros Pánicos during the Abierto Mexicano de Diseño, Mexico City, 2026.</p>"
    },
    {
      id: "vigilia-inconclusa-installation",
      title: "Vigilia Inconclusa [Installation]",
      year: "2024",
      category: "art",
      symbols: "",
      thumbnail: "images/vig-inc-ins.jpg",
      images: [
        "images/vig-inc-ins.jpg",
        "images/vig-inc-ins2.jpg",
        "images/vig-inc-ins3.jpg",
        "images/vig-inc-ins4.jpg"
      ],
      decoration: "",
      // attributes use single quotes so they don't break the double-quoted string
      description: "<p>After the <a href='with-feral-hardware.html#vig-inc'>audiovisual performance</a> where we paid participants to rest and livestream their rest, we were invited to produce an installation where we used the performance's documentation to build an immersive space.</p><p>We designed the space's atmosphere to make it seem like an office in the 90s was disrupted by a strange force, where the workers abandoned it spontaneously, as if a virus had taken over.</p>"
    }
  ];

  const all = window.galleryData || [];
  const selected = keep
    .map(id => all.find(item => item.id === id))
    .filter(Boolean);

  keep.forEach(id => {
    if (!all.find(item => item.id === id)) console.warn("feral-collection: no work with id", id);
  });

  window.galleryData = selected.concat(newWorks);
})();