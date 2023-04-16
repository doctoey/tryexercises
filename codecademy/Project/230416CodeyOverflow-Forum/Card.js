import React from 'react';
import Header from './Header';
import Body from './Body';

const Card = (props) => {
return (
  <div>
    <Header
      profileImg={props.commentObject.profileImg}
      username={props.commentObject.username}
    />
    <Body comment={props.commentObject.comment} />
  </div>
);
};

export default Card;