import React, { ReactNode } from 'react';
import { Route } from 'react-router';

import RootContainer from './RootContainer';

// ============================================================================
// Type definition
//
interface IOwnProps {
  content : React.ReactNode;
}
interface IOwnStates {}

interface IStates extends IOwnStates {}
interface IProps extends IOwnProps {}

// ============================================================================
// Class implementation
//
class RootRoute extends React.Component<IProps, IStates> {

  // ==========================================================================
  // Render
  //
  render() {
    return <Route render={(props) => this.renderContent(props)} />;
  }

  renderContent(props: any): React.ReactNode {
    const {content} = this.props;
    return (
      <RootContainer children={content} {...props} />
    );
  }
}

export default RootRoute;
