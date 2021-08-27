import React, { Component } from "react";
import s from "../ImageGallery/ImageGallery.module.css";
import Modal from "../Modal/Modal";

export default class ImageGallery extends Component {
  state = {
    isOpenModal: false,
    bigUrl: "",
  };

  handleClikBigImg = (ev) => {
    this.setState({
      bigUrl: ev.target.dataset.bigurl,
    });
    this.togleModalShow();
  };

  togleModalShow = () => {
    this.setState((prevState) => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { children } = this.props;

    return (
      <>
        <ul className={s.ImageGallery} onClick={this.handleClikBigImg}>
          {children}
        </ul>
        {this.state.isOpenModal && (
          <Modal props={this.state.bigUrl} showModal={this.togleModalShow} />
        )}
      </>
    );
  }
}
