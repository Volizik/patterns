export class ImageMeta {

  constructor(imageConverter) {
    this.converter = imageConverter
  }

  addMetaToJPG(image) {
    const convertedImage = this.converter.convertToJPG(image);
    convertedImage.meta = 'some meta for jpg';
    return convertedImage;
  }

  addMetaToPNG(image) {
    const convertedImage = new this.converter.convertToPNG(image);
    convertedImage.meta = 'some meta for png';
    return convertedImage;
  }

}