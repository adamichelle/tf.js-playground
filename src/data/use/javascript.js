export default [
  '"use strict";',
  '',
  '// Do NOT modify the lines below.',
  'import * as tf from "https://cdn.skypack.dev/@tensorflow/tfjs";',
  'import * as use from "https://cdn.skypack.dev/@tensorflow-models/universal-sentence-encoder";',
  '// Do NOT modify the lines above.',
  '',
  '/**',
  ' * Skip to the initQna function to see how the model is used.',
  '*/',
  '',
  'const useFormElement = document.getElementById("useModelForm");',
  'const questionsElement = document.getElementById("questions");',
  'const answersElement = document.getElementById("answers");',
  'const errorElement = document.getElementById("error");',
  'const outputContainerElement = document.getElementById("outputContainer");',
  'const submitButtonElement = document.getElementById("submit");',
  'const clearQuestionsButtonElement = document.getElementById("clearQuestions");',
  'const clearAnswersButtonElement = document.getElementById("clearAnswers");',
  '',
  'const questions = [',
  '  "What is your age?",',
  '  "What will the weather be like today?"',
  '];',
  'const answers = [',
  '  "I will be 5 years old in June",',
  '  "We should expect 20 inches of snow",',
  '  "Apples pies taste lovely",',
  '];',
  '',
  'document.addEventListener("DOMContentLoaded", onDocumentLoad);',
  'useFormElement.addEventListener("submit", onFormSubmit);',
  'clearQuestionsButtonElement.addEventListener("click", function (e) {',
  '  questionsElement.value = "";',
  '});',
  'clearAnswersButtonElement.addEventListener("click", function (e) {',
  '  answersElement.value = "";',
  '});',
  '',
  '',
  'function onDocumentLoad() {',
  '  questionsElement.value = questions.join("\\n");',
  '  answersElement.value = answers.join("\\n");',
  '}',
  '',
  'function onFormSubmit(e) {',
  '  e.preventDefault();',
  '',
  '  submitButtonElement.disabled = true;',
  '',
  '  const data = Object.fromEntries(new FormData(e.target).entries());',
  '',
  '  if (data.questions.trim() === "" || data.answers.trim() === "") {',
  '    errorElement.innerHTML = "<p class=\'text-danger\'>You need to provide some questions and/or answers to use this playground.</p>";',
  '    submitButtonElement.disabled = false;',
  '    return;',
  ' }',
  '',
  '  const formQuestions = data.questions.trim().split("\\n");',
  '  const formAnswers = data.answers.trim().split("\\n");',
  '  initQna(formQuestions, formAnswers);',
  '}',
  '',
  'function initQna(questions, answers) {',
  '  const input = {',
  '    queries: questions,',
  '    responses: answers',
  '  };',
  '',
  '  use.loadQnA().then((model) => {',
  '    const scores = [];',
  '    const embeddings = model.embed(input);',
  '    const embed_query = embeddings.queryEmbedding.arraySync();',
  '    const embed_responses = embeddings.responseEmbedding.arraySync();',
  '',
  '    // compute the dotProduct of each query and response pair.',
  '    for (let i = 0; i < input["queries"].length; i++) {',
  '      let result = {};',
  '      result.question = input["queries"][i];',
  '      result.answers = [];',
  '',
  '      for (let j = 0; j < input["responses"].length; j++) {',
  '        const score = dotProduct(embed_query[i], embed_responses[j]);',
  '        const answersObject = {',
  '          answer: input["responses"][j],',
  '          score',
  '        };',
  '        result["answers"].push(answersObject);',
  '      }',
  '',
  '      scores.push(result);',
  '    }',
  '',
  '    displayResult(scores);',
  '  });',
  '}',
  '',
  '// Calculate the dot product of two vector arrays.',
  'const dotProduct = (xs, ys) => {',
  '  const sum = (xs) => (xs ? xs.reduce((a, b) => a + b, 0) : undefined);',
  '',
  '  return xs.length === ys.length',
  '    ? sum(zipWith((a, b) => a * b, xs, ys))',
  '    : undefined;',
  '};',
  '',
  '// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]',
  'const zipWith = (f, xs, ys) => {',
  '  const ny = ys.length;',
  '  return (xs.length <= ny ? xs : xs.slice(0, ny)).map((x, i) => f(x, ys[i]));',
  '};',
  '',
  'function displayResult(scores) {',
  '  scores.forEach(function (score, index) {',
  '    const div = document.createElement("div");',
  '    div.innerHTML = generateHTML(score, index);',
  '    outputContainerElement.append(div);',
  '    const outputAnswersDiv = document.getElementById("outputAnswers" + (index + 1));',
  '',
  '    score.answers.forEach(function (answer) {',
  '      const li = document.createElement("li");',
  '      li.innerHTML = answer.answer + "<br /> Score: " + answer.score;',
  '      outputAnswersDiv.append(li);',
  '    });',
  '  });',
  '',
  '  submitButtonElement.disabled = false;',
  '}',
  '',
  'function generateHTML(detail, index) {',
  '  return "<div>" +',
  '    "<h2>Question</h2>" +',
  '    "<p>" + detail.question + "</p>" +',
  '    "<h2>Answers</h2>" +',
  '    "<ul id=\'outputAnswers" + (index + 1) + "\'></ul>" +',
  '  "</div>";',
  '}',
  '',
  '',
].join('\n');
