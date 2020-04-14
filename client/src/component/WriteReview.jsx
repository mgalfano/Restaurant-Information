import React from 'react';
import $ from 'jquery';
import Star from './Star.jsx';
import styles from '../../dist/style.css';

// have not refactor the 1-5 stars
class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0,
      input: ''
    };
    this.handleHoverRating = this.handleHoverRating.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleinput = this.handleinput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.updateReviewFormStatus();
    $.ajax({
      method: 'POST',
      // url: '/restaurant',
      url: '/api/restaurants',
      data: JSON.stringify({rating: this.state.rating, comment: this.state.input, name: this.props.name}),
      contentType: 'application/json',
      success: (data) => {
        console.log('successfully post',data);
        $.ajax({
          method: 'GET',
          url: '/api/restaurants',
          dataType: 'json',
          success: (data) => {
            console.log('this is my ajax call from write review', data);
            this.props.updateResInfoState(data);
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log('encounter error' ,err);
      }
    });
  }

  handleinput(event){
    console.log(event.target.value);
    this.setState({ input: event.target.value});
  }

  handleRating(value) {
    this.setState({ rating: value });
  }

  handleHoverRating(value) {
    this.setState({ hoverRating: value });
  }

  render() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      let styleClass = 'star_rating_blank';
      if ((this.state.hoverRating > i) && (this.state.hoverRating === 1)) {
        styleClass = 'star_rating_1';
      } else if ((this.state.hoverRating > i) && (this.state.hoverRating === 2)) {
        styleClass = 'star_rating_2';
      } else if ((this.state.hoverRating > i) && (this.state.hoverRating === 3)) {
        styleClass = 'star_rating_3';
      } else if ((this.state.hoverRating > i) && (this.state.hoverRating === 4)) {
        styleClass = 'star_rating_4';
      } else if ((this.state.hoverRating > i) && (this.state.hoverRating === 5)) {
        styleClass = 'star_rating_5';
      }
      stars.push(
        <Star
          key={i}
          styleClass={styleClass}
          onClick={() => {
            this.handleRating(i + 1);
          }}
          onMouseEnter={() => { this.handleHoverRating(i + 1); }}
          // eslint-disable-next-line no-unused-expressions
          onMouseLeave={() => { this.state.rating ? this.handleHoverRating(this.state.rating) : this.handleHoverRating(0); }}
        />,
      );
    }

    return (
      <div className={styles.modal_content_review}>
        <div className={styles.x_button} onClick={this.props.updateReviewFormStatus}>&times;</div>
        <h1>{this.props.name}</h1>
        <div className={styles.Write_Review_Star}>
          {stars}
        </div>
        <textarea onChange={this.handleinput} className={styles.comment} placeholder="your comment here" />
        <button onClick={this.handleSubmit} className={styles.commentSubmit}>Post Review</button>
      </div>

    );
  }
}


export default WriteReview;
