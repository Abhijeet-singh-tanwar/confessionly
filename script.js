function generateConfession() {
  const recipient = document.getElementById("recipient").value;
  const message = document.getElementById("message").value;
  const theme = document.getElementById("theme").value;

  const confessionHTML = `
    <html>
    <head>
      <title>Confession for ${recipient}</title>
      <style>
        body { font-family: 'Comic Sans MS'; text-align: center; padding: 50px; background: ${
          theme === 'hearts' ? '#ffe4e1' : theme === 'vintage' ? '#f5f5dc' : '#f0fff0'
        }; }
        .confession { font-size: 1.2em; white-space: pre-wrap; margin-top: 20px; }
      </style>
    </head>
    <body>
      <h1>Dear ${recipient},</h1>
      <div class="confession">${message}</div>
      <p>💖 From Someone Special 💖</p>
    </body>
    </html>
  `;

  const blob = new Blob([confessionHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}
