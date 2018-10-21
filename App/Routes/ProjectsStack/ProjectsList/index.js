import * as React from 'react';
import Div from 'App/Components/Div';
import AnimatedWrapper from 'App/Components/AnimatedWrapper';
import FullscreenWrapper from 'App/Components/FullscreenWrapper';
import Navbar from 'App/Components/Navbar';
import CenteredContainer from 'App/Components/CenteredContainer';

type Props = {

}

class ProjectsList extends React.Component<Props> {
  state = {
    projects: [
      {
        _id: 0,
        creator: 'MinskLeo',
        description: 'This is OPARYSH project'
      },
      {
        _id: 1,
        creator: 'MinskLeo',
        description: 'This is TaskMini project'
      }
    ]
  }

  render () {
    return (
      <FullscreenWrapper style={{ justifyContent: 'flex-start' }}>
        <Navbar />
        <AnimatedWrapper>
          <CenteredContainer>
              <h1>Projects</h1>
          </CenteredContainer>
          
        </AnimatedWrapper>
      </FullscreenWrapper>
    );
  }
}

export default ProjectsList;
