import qna from './qna';
import textToxicityDetection from './text-toxicity-detection';
import imageClassification from './image-classification';
import use from './use';

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
      isAvailable: true,
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
      isAvailable: true,
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
      isAvailable: true,
    },
    {
      name: 'Universal Sentence Encoder for Question Answering',
      alias: 'use qna',
      slug: 'use-1',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder',
      description: 'Encodes question and answer texts into 100-dimensional embeddings. The dot product of these embeddings measures how well the answer fits the question',
      icon: 'file-text',
      code: {
        html: use.html,
        css: use.css,
        javascript: use.javascript,
      },
      isAvailable: true,
    },
  ],
};
