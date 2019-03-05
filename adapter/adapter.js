import { ImageConverter } from './imageConverter';

export class ImageConverterAdapter {

  static convertToJPG(image) {
    ImageConverter.convert(image, 'jpg')
  }

  static convertToPNG(image) {
    ImageConverter.convert(image, 'png')
  }

}