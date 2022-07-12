import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul className={style.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
