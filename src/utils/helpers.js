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

export const generateJSCodeForNonVisualizedModels = (modelSlug) => {
  let jsCode = [
    '"use strict";',
    '',
    '// Do NOT modify the lines below.',
    'import * as tf from "https://cdn.skypack.dev/@tensorflow/tfjs";',
  ];
  switch (modelSlug) {
    case 'use': {
      const useJSImport = 'import * as use from "https://cdn.skypack.dev/@tensorflow-models/universal-sentence-encoder";';
      jsCode = [...jsCode, useJSImport];
      break;
    }

    case 'coco-ssd': {
      const cocossdJSImport = 'import * as cocoSsd from "https://cdn.skypack.dev/@tensorflow-models/coco-ssd";';
      jsCode = [...jsCode, cocossdJSImport];
      break;
    }

    case 'body-pix': {
      const bodyPixJSImport = 'import * as bodyPix from "https://cdn.skypack.dev/@tensorflow-models/body-pix";';
      jsCode = [...jsCode, bodyPixJSImport];
      break;
    }

    case 'knn-classifier': {
      const knnClassifierJSImport = 'import * as knnClassifier from "https://cdn.skypack.dev/@tensorflow-models/knn-classifier";';
      jsCode = [...jsCode, knnClassifierJSImport];
      break;
    }

    case 'blazeface': {
      const blazefaceJSImport = 'import * as blazeface from "https://cdn.skypack.dev/@tensorflow-models/blazeface";';
      jsCode = [...jsCode, blazefaceJSImport];
      break;
    }

    case 'deeplab': {
      const deeplabJSImport = 'import * as deeplab from "https://cdn.skypack.dev/@tensorflow-models/deeplab";';
      jsCode = [...jsCode, deeplabJSImport];
      break;
    }

    default:
      jsCode = [...jsCode, ...['']];
  }

  const extraComment = [
    '// Do NOT modify the lines above.',
    '',
    '',
  ];

  jsCode = [...jsCode, ...extraComment];
  return jsCode.join('\n');
};
