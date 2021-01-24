import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";


const extraContent = (movieParam, deleteMovie) => {
  return (
    <div className="ui two buttons">
      <Button animated='vertical' as={Link} to={`/movie/edit/${movieParam.id}`}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name='edit outline' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick={() => deleteMovie(movieParam.id)}>
        <Button.Content visible>Delete</Button.Content>
        <Button.Content hidden>
          <Icon name='trash alternate' />
        </Button.Content>
      </Button>
    </div>
  )
}


const MovieCard = ({ propsMovie, deleteMovie }) => (
  <Card
    image={propsMovie.cover}
    header={propsMovie.title}
    description={propsMovie.explain}
    extra={extraContent(propsMovie, deleteMovie)}
  />
)

export default MovieCard



//'https://react.semantic-ui.com/images/avatar/large/elliot.jpg' 