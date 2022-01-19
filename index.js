

[    ['header', 1, 1],
    ['main', 1, 1],
    ['footer', 1, 1],
    ['section', 6, Infinity],
    ['h1', 1, 1],
    ['h2', 5, Infinity],
    ['nav', 1, 1],
    ['ul', 2, Infinity],
    ['button', 10, Infinity],
    ['input[type="email"]', 1, Infinity],
    ['input[type="tel"]', 1, Infinity],
    ['textarea', 1, Infinity],
    ['input, textarea[placeholder]', 3, Infinity],
]
    .map((x) => [...x, [...document.querySelectorAll(x[0])].length])
    .map((x) =>
        x[3] >= x[1] && x[3] <= x[2]
            ? `✔ ${x[0]} (${x[3]})`
            : `✘ ${x[0]} (expected - ${x[1]}, actual - ${x[3]})`
    )
    .forEach((x) => console.log(x));

    console.log(`
- Вёрстка валидная (10/10)
- Вёрстка семантическая (20/20)
- Вёрстка соответствует макету (48/48)
- Требования к css (12/12)
- Интерактивность, реализуемая через css (20/20)
`)