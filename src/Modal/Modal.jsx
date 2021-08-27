import React, { Component } from "react";
import s from "../Modal/Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.hendelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.hendelKeyDown);
  }

  hendelKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.showModal();
    }
  };

  hideModal = (e) => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.hideModal}>
        <div className={s.Modal}>
          <img src={this.props.props} alt="" />
        </div>
      </div>
    );
  }
}
