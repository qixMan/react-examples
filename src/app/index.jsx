import React from 'react';

import Card from './components/Card/index.jsx';
import './index.scss'

const App = ({cards}) => {
  return (
      <div className="app"> 
        {
          cards.map(({todos, title}, idx) => 
            <Card 
              className="card" 
              key={idx} 
              todos={todos}
              title={title}
            />
          )
        }
      </div>

  );
};

export default App;