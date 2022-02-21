function convertHexToRGB(hexCode) {
  if (hexCode.length !== 7) {
    return '';
  }

  const matches = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/ig.exec(hexCode);

  if (!matches) { return ''; }

  const rgb = [
    parseInt(matches[1], 16),
    parseInt(matches[2], 16),
    parseInt(matches[3], 16),
  ];

  return `rgb(${rgb.join()})`;
}

export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export const generateHTML = (payload) => `<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style id="_style">${payload.css}</style>
  </head>
  <body>
    ${payload.html}

    <script type="module" id="_script">
      ${payload.javascript}
    </script>
  </body>
</html>`;

export const convertAllHexCodesToRGB = (html) => html.replace(/#[a-f\d]+/ig, convertHexToRGB);
