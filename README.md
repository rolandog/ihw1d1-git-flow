# web-lab

Tiny front-end project used to practise Git Flow.

## Theme toggle

The button in the header flips `data-theme` on `<body>` between `light` and `dark`.
`script.js` handles the click, and `styles.css` styles `[data-theme="dark"]`.
The choice is not persisted between page loads.

## Run locally

    python3 -m http.server 8000 --bind 127.0.0.1
