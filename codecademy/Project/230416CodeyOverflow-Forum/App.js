import React from 'react';
import Card from './Card';
import { comments } from './commentData';

const App = () => {
return (
  <div>
    {comments.map((comment, index) => (
      <Card key={index} commentObject={comment} />
    ))}
  </div>
);
};

export default App;