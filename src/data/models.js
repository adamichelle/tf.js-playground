import qna from './qna';
import textToxicityDetection from './text-toxicity-detection';
import imageClassification from './image-classification';
import use from './use';
import visualizationPlaceholder from './visualization-placeholder';
import speechCommands from './speech-commands';
import { generateJSCodeForNonVisualizedModels } from '../utils';

export default {
  models: [
    {
      name: 'Image Classification',
      alias: 'mobilenet',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/mobilenet',
      slug: 'mobilenet',
      description: 'Classify images with labels from the ImageNet database.',
      icon: 'image',
      code: {
        html: imageClassification.html,
        css: imageClassification.css,
        javascript: imageClassification.javascript,
      },
      isVisualized: true,
    },
    {
      name: 'Question and Answer',
      alias: 'qna',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/qna',
      slug: 'qna',
      description: 'Use a pre-trained BERT model from Tensorflow.js to answer questions based on the content of a given passage.',
      icon: 'align-justify',
      code: {
        html: qna.html,
        css: qna.css,
        javascript: qna.javascript,
      },
      isVisualized: true,
    },
    {
      name: 'Text Toxicity Detection',
      alias: 'toxicity',
      slug: 'toxicity',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/toxicity',
      description: 'Detect whether text contains toxic content such as threatening language, insults, obscenities, identity-based hate, or sexually explicit language.',
      icon: 'thumbs-down',
      code: {
        html: textToxicityDetection.html,
        css: textToxicityDetection.css,
        javascript: textToxicityDetection.javascript,
      },
      isVisualized: true,
    },
    {
      name: 'Universal Sentence Encoder',
      alias: 'use',
      slug: 'use',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder',
      description: 'Encodes text into 512-dimensional embeddings that be used as inputs to natural language processing tasks such as sentiment classification and textual similarity analysis.',
      icon: 'file-text',
      code: {
        html: visualizationPlaceholder.html,
        css: visualizationPlaceholder.css,
        javascript: generateJSCodeForNonVisualizedModels('use'),
      },
      isVisualized: false,
    },
    {
      name: 'Universal Sentence Encoder for Question Answering',
      alias: 'use qna',
      slug: 'use-qna',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder',
      description: 'Encodes question and answer texts into 100-dimensional embeddings. The dot product of these embeddings measures how well the answer fits the question',
      icon: 'file-text',
      code: {
        html: use.html,
        css: use.css,
        javascript: use.javascript,
      },
      isVisualized: true,
    },
    {
      name: 'Object Detection',
      alias: 'coco ssd',
      slug: 'coco-ssd',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd',
      description: 'Localizes and identifies multiple objects in a single image.',
      icon: 'box',
      code: {
        html: visualizationPlaceholder.html,
        css: visualizationPlaceholder.css,
        javascript: generateJSCodeForNonVisualizedModels('coco-ssd'),
      },
      isVisualized: false,
    },
    {
      name: 'Body Segmentation',
      alias: 'BodyPix',
      slug: 'body-pix',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/body-pix',
      description: 'Segments an image into pixels that are and are not part of a person, and into pixels that belong to each of twenty-four body parts.',
      icon: 'users',
      code: {
        html: visualizationPlaceholder.html,
        css: visualizationPlaceholder.css,
        javascript: generateJSCodeForNonVisualizedModels('body-pix'),
      },
      isVisualized: false,
    },
    {
      name: 'Speech Command Recognizer',
      alias: 'speech commands',
      slug: 'speech-commands',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/speech-commands',
      description: 'Enables recognition of spoken commands comprised of simple isolated English words from a small vocabulary.',
      icon: 'mic',
      code: {
        html: speechCommands.html,
        css: speechCommands.css,
        javascript: speechCommands.javascript,
      },
      isVisualized: true,
    },
    {
      name: 'KNN Classifier',
      alias: 'KNN classifier',
      slug: 'knn-classifier',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/knn-classifier',
      description: 'A utility for creating a classifier using the K-Nearest Neighbors algorithm',
      icon: 'layers',
      code: {
        html: visualizationPlaceholder.html,
        css: visualizationPlaceholder.css,
        javascript: generateJSCodeForNonVisualizedModels('knn-classifier'),
      },
      isVisualized: false,
    },
    {
      name: 'Simple Face (Blazeface) Detector',
      alias: 'blazeface',
      slug: 'blazeface',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/blazeface',
      description: 'A lightweight model that detects faces in images.',
      icon: 'smile',
      code: {
        html: visualizationPlaceholder.html,
        css: visualizationPlaceholder.css,
        javascript: generateJSCodeForNonVisualizedModels('blazeface'),
      },
      isVisualized: false,
    },
    {
      name: 'Semantic Segmentation (Deeplab)',
      alias: 'deeplab',
      slug: 'deeplab',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/deeplab',
      description: 'A standalone implementation of the DeepLab inference pipeline for running semantic segmentation using TensorFlow.js.',
      icon: 'layers',
      code: {
        html: visualizationPlaceholder.html,
        css: visualizationPlaceholder.css,
        javascript: generateJSCodeForNonVisualizedModels('deeplab'),
      },
      isVisualized: false,
    },
  ],
};
