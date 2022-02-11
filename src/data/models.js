import qna from './qna';
import textToxicityDetection from './text-toxicity-detection';
import imageClassification from './image-classification';

export default {
  models: [
    {
      name: 'Image Classification',
      alias: '',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/mobilenet',
      description: 'Classify images with labels from the ImageNet database.',
      icon: 'image',
      htmlCode: imageClassification.html,
      cssCode: imageClassification.css,
      javaScriptCode: imageClassification.javascript,
      isAvailable: true,
    },
    {
      name: 'Question and Answer',
      alias: '',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/qna',
      description: 'Use a pre-trained BERT model from Tensorflow.js to answer questions based on the content of a given passage.',
      icon: 'align-justify',
      htmlCode: qna.html,
      cssCode: qna.css,
      javaScriptCode: qna.javascript,
      isAvailable: true,
    },
    {
      name: 'Text Toxicity Detection',
      alias: 'Toxicity',
      url: 'https://github.com/tensorflow/tfjs-models/tree/master/toxicity',
      description: 'Detect whether text contains toxic content such as threatening language, insults, obscenities, identity-based hate, or sexually explicit language.',
      icon: 'thumbs-down',
      htmlCode: textToxicityDetection.html,
      cssCode: textToxicityDetection.css,
      javaScriptCode: textToxicityDetection.javascript,
      isAvailable: true,
    },
  ],
};
