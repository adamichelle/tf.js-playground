export default [
  '"use strict";',
  '',
  '// Do NOT modify the lines below.',
  'import * as tf from "https://cdn.skypack.dev/@tensorflow/tfjs";',
  'import * as mobilenet from "https://cdn.skypack.dev/@tensorflow-models/mobilenet";',
  '// Do NOT modify the lines above.',
  '',
  '/**',
  ' * Skip to the classifyImages function to see how the model is used.',
  '*/',
  'const images = [',
  '  "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84",',
  '  "https://images.unsplash.com/photo-1605982466374-9ceda9d25c3a",',
  '  "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5",',
  '  "https://images.unsplash.com/photo-1621841025473-434eea3e9138",',
  '  "https://images.unsplash.com/photo-1595760780346-f972eb49709f",',
  '];',
  '',
  'const randomIndex = Math.floor(Math.random() * images.length);',
  'const randomImageURL = images[randomIndex];',
  'const imageElement = document.getElementById("sampleImage");',
  'const classificationResultsElement = document.getElementById("classificationResults");',
  'const classificationResultsContainerElement = document.getElementById("classificationResultsContainer");',
  'const revertButtonElement = document.getElementById("revert");',
  'const mobilenetModelFormElement = document.getElementById("mobilenetModelForm");',
  'const errorElement = document.getElementById("error");',
  '',
  'document.addEventListener("DOMContentLoaded", function () {',
  '  imageElement.src = randomImageURL;',
  '  classifyImage();',
  '  localStorage.setItem("loadedImageIndex", randomIndex);',
  '});',
  '',
  'revertButtonElement.addEventListener("click", handleRevertButtonClick);',
  'mobilenetModelFormElement.addEventListener("submit", handleUserImageChange);',
  '',
  'function classifyImage() {',
  '  mobilenet.load().then((model) => {',
  '    model.classify(imageElement).then(function (predictions) {',
  '      const transformedPredictions = predictions.map(function (prediction) {',
  '        return {',
  '          className: prediction.className,',
  '          percentageConfidence: (prediction.probability * 100).toFixed(2),',
  '          probability: prediction.probability,',
  '        };',
  '      });',
  '      renderClassificationResults(transformedPredictions);',
  '    });',
  '  });',
  '}',
  '',
  'function renderClassificationResults(predictions) {',
  '  errorElement.style.display = "none";',
  '  classificationResultsContainerElement.style.display = "block";',
  '  classificationResultsElement.innerHTML = "";',
  '',
  '  if (predictions.length === 0) {',
  '    const p = document.createElement("p");',
  '    p.textContent = "No classes found by the model";',
  '    classificationResultsContainerElement.insertBefore(p, classificationResultsContainerElement.children[0]);',
  '    classificationResultsElement.style.display = "none";',
  '    return;',
  '  }',
  '',
  '  classificationResultsElement.style.display = "block";',
  '',
  '  predictions.forEach(function (prediction) {',
  '    const li = document.createElement("li");',
  '    li.textContent = "The model predicts the image is " + prediction.className + " and is " + prediction.percentageConfidence + "% confident. (probability: " + prediction.probability +")";',
  '    classificationResultsElement.append(li);',
  '  });',
  '}',
  '',
  'function handleUserImageChange(e) {',
  '  e.preventDefault();',
  '',
  '  classificationResultsContainerElement.style.display = "none";',
  '  errorElement.style.display = "block";',
  '',
  '  const data = Object.fromEntries(new FormData(e.target).entries());',
  '  const imageUrl = data["image_url"].trim();',
  '',
  '  if (imageUrl === "") {',
  '    errorElement.innerHTML = "<p class=\'text-danger\'>You have not provided a valid image url</p>";',
  '    return;',
  '  }',
  '',
  '  imageElement.src = imageUrl;',
  '',
  '  const isLoaded = imageElement.complete && imageElement.naturalHeight !== 0;',
  '',
  '  const imageLoadTimeout = setTimeout(function () {',
  '    if (!isLoaded) {',
  '      errorElement.innerHTML = "<p>The url you provided does not link to a valid image.</p>";',
  '      return;',
  '    }',
  '  }, 5000);',
  '',
  '  classifyImage();',
  '',
  '  clearTimeout(imageLoadTimeout);',
  '}',
  '',
  'function handleRevertButtonClick() {',
  '  document.getElementById("imageUrl").value = "";',
  '  imageElement.src = images[Number(localStorage.getItem("loadedImageIndex"))];',
  '  classifyImage();',
  '}',
  '',
  '',
].join('\n');
