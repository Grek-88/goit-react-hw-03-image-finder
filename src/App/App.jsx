import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import s from "../App/App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import LoaderMore from "../Loader/Loader";

export default class App extends Component {
  state = {
    query: null,
    imgData: null,
    loading: false,
    page: 1,
    error: null,
    isOpenModal: false,
    bigurl: "",
  };

  submitForm = (dataQuery) => {
    this.setState({ query: dataQuery });
  };

  componentDidMount() {}

  fetchData = () => {
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=22269453-01e35d719392ba61f98a14ac3&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(
            "По такому запросу картинок не найдено. Введите другой запрос."
          )
        );
      })
      .then((imgData) => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          imgData: prevState.imgData
            ? [...prevState.imgData, ...imgData.hits]
            : imgData.hits,
          loading: false,
        }));
      })
      .catch((error) => this.setState({ error }));
  };

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    if (prevState.query !== this.state.query) {
      this.setState({ imgData: null, page: 1 });
      this.fetchData();
    }
  }

  getNewImg = () => {
    this.fetchData();
  };

  togleModalShow = (ev) => {
    if (!this.state.isOpenModal) {
      this.setState({ bigurl: ev.target.dataset.bigurl });
    }
    this.setState((prevState) => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render({ imgData, loading, error } = this.state) {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.submitForm} />
        {error && <h3>{error.message}</h3>}
        {imgData && imgData.length === 0 && (
          <h3>По такому запросу картинок не найдено. Введите другой запрос.</h3>
        )}
        {!imgData && loading && <LoaderMore />}
        {imgData && imgData.length > 0 && (
          <>
            <ImageGallery
              images={this.state.imgData}
              onClick={this.togleModalShow}
            />
            {this.state.isOpenModal && (
              <Modal
                showModal={this.togleModalShow}
                props={this.state.bigurl}
              />
            )}
            {loading ? <LoaderMore /> : <Button onClick={this.getNewImg} />}
          </>
        )}
      </div>
    );
  }
}
