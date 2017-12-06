import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import Loading from '../Loading';

const LoadableAsyncWrapperB = Loadable({
  loader: () => import('./AsyncWrapperB'),
  loading: Loading
});

class AsyncWrapperA extends React.Component {
	render() {
		return (
			<div>
				<Route path={`${this.props.match.path}/wb`} component={LoadableAsyncWrapperB}></Route>
			</div>
		);
	}
}

export default AsyncWrapperA;