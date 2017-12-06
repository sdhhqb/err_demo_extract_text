import React from 'react';
import Loadable from 'react-loadable';
import {Route} from 'react-router-dom';
import Loading from '../../Loading';

const loadableCompC = Loadable({
    loader: () => import('./CompC'),
    loading: Loading
});

class AsyncWrapperB extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.path}`} component={loadableCompC}/>
      </div>
    );
  }
}
export default AsyncWrapperB;