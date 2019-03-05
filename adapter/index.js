import {ImageMeta} from './imageMeta';
import {ImageConverterAdapter} from './adapter';
import {ImageConverter} from './imageConverter';

const image = {
  path: 'https://web-artcraft.com/someimage.gif'
};

// Проблема
// const imageWithMeta = new ImageMeta(ImageConverter);

// const result = imageWithMeta.addMetaToJPG(image);

// Решение
const imageWithMeta = new ImageMeta(ImageConverterAdapter);

const result = imageWithMeta.addMetaToJPG(image);

console.log(result);