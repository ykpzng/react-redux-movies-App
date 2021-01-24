import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Image, Message } from 'semantic-ui-react';
import InlineError from "./InlineError";
import { Redirect } from "react-router-dom";


export default class NewMovieForm extends Component {

  state = {
    id: this.props.willEditmovie ? this.props.willEditmovie.id : "",
    title: this.props.willEditmovie ? this.props.willEditmovie.title : "",
    cover: this.props.willEditmovie ? this.props.willEditmovie.cover : "",
    errors: {},
    redirect: false
  }

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired,
  }

  // Props değeri değiştiğinde tetiklenen fonksiyon kullanmalıyız
  // Sayfa yenilenince props değişikliğini algılaması için
  componentWillReceiveProps(nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie.title && movie.title !== this.state.title) {
      this.setState({ title: movie.title, cover: movie.cover })
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = () => {
    const errors = this.validate();
    this.setState({ errors, redirect: true });

    const _id = this.state.id || this.props.newMovie.movie.id;

    if (Object.keys(errors).length === 0) {
      if (!_id) {
        this.props.onNewMovieSubmit(this.state);
      } else {
        this.props.onUpdateMovieSubmit({ ...this.state, _id })
      }
    }

  }

  validate = () => {
    const valMsgObj = {};
    if (!this.state.title) valMsgObj.title = "Can't be blank...";
    if (!this.state.cover) valMsgObj.cover = "Can't be blank...";
    return valMsgObj;
  }
  render() {
    const { errors } = this.state;

    const formContent = (
      <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>   {/*Semantik-ui özelliği. loading*/}
        <Form.Field error={!!errors.title}> {/* Bolean a çevirmek için !!, vermeden de oluyor*/}
          <label>Movie Title</label>
          <input id="title"
            name="title"
            value={this.state.title}
            placeholder='Movie Title'
            onChange={this.handleChange}
          />
          {errors.title && <InlineError message={errors.title} />}

        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover Url</label>
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            placeholder='Cover Url'
            onChange={this.handleChange}
          />
          {errors.cover && <InlineError message={errors.cover} />}
        </Form.Field>
        <Form.Field>
          <Image src={this.state.cover} size='small' />
        </Form.Field>
        <Button color='teal' type='submit'>Submit</Button>
        {this.props.newMovie.error.response &&
          <Message negative>
            <Message.Header>We're sorry </Message.Header>
            <p>WebAPI has expired...</p>
          </Message>
        }  {/*Sol taraf true ise çalış demektir*/}
      </Form>
    );

    return (
      //Form yüklenirse filmler sayfasına gider, değilse form yüklenir
      <div>
        {this.props.newMovie.fetched && this.state.redirect ? <Redirect to="/movies" /> : formContent}
      </div>
    )
  }
}
