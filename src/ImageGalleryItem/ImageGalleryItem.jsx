import React, { Component } from "react";
import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        {this.props.imgData.map((el) => {
          return (
            <li className={s.ImageGalleryItem} key={el.id}>
              <img
                src={el.webformatURL}
                alt={el.tags}
                data-bigurl={el.largeImageURL}
                className={s.ImageGalleryItemImage}
              />
            </li>
          );
        })}
      </>
    );
  }
}
