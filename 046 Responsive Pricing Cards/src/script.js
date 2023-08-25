const pricingOptions = [
  {
    element: document.getElementById("basic"),
    originalText: "199 €",
    alternateText: "19 €"
  },
  {
    element: document.getElementById("professional"),
    originalText: "249 €",
    alternateText: "24 €"
  },
  {
    element: document.getElementById("master"),
    originalText: "399 €",
    alternateText: "39 €"
  }
];

document.getElementById("checkbox").addEventListener("click", () => {
  pricingOptions.forEach((option) => {
    option.element.textContent =
      option.element.textContent === option.originalText
        ? option.alternateText
        : option.originalText;
  });
});
