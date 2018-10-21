import * as React from 'react';
import styles from './styles.module.css';

import TextBlock from 'App/Components/TextBlock';
import Navbar from 'App/Components/Navbar';
import TextInput from 'App/Components/Form/TextInput/index';
import FullscreenWrapper from 'App/Components/FullscreenWrapper';
import Div from 'App/Components/Div';
import AnimatedWrapper from 'App/Components/AnimatedWrapper';

class Dashboard extends React.Component {
  state = {
    tasks: [
      {
        _id: 0,
        taskword: 'OPARYSH-0',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      },
      {
        _id: 1,
        taskword: 'OPARYSH-1',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      },
      {
        _id: 2,
        taskword: 'OPARYSH-2',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      },
      {
        _id: 3,
        taskword: 'OPARYSH-3',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      }
    ],
    tasksAdded: [
      {
        _id: 0,
        taskword: 'OPARYSH-0',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      },
      {
        _id: 1,
        taskword: 'OPARYSH-1',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      },
      {
        _id: 2,
        taskword: 'OPARYSH-2',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      },
      {
        _id: 3,
        taskword: 'OPARYSH-3',
        title: 'My first task',
        description: 'This is first task',
        role: 'React'
      }
    ]
  }

  render () {
    const { tasks, tasksAdded } = this.state;

    return (
        <FullscreenWrapper className={styles.wrapper}>
          <Navbar />
        <AnimatedWrapper>
          <Div className={styles.body}>
            <Div className={styles.contentPart}>

            </Div>
            <Div className={styles.sidePart}>
              {tasks.map((item, index) => {
                return <Div className={styles.taskCard}>
                  <TextBlock type='header'>{item.taskword}</TextBlock>
                  <TextBlock type='noteItalic'>{item.description}</TextBlock>
                </Div>
              })}
            </Div>
          </Div>
        </AnimatedWrapper>

        </FullscreenWrapper>
    );
  }
}

export default Dashboard;
