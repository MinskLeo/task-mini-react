import * as React from 'react';
import FullscreenWrapper from 'App/Components/FullscreenWrapper';
import Div from 'App/Components/Div';
import styles from './styles.module.css';
import TextBlock from 'App/Components/TextBlock';

import Navbar from 'App/Components/Navbar';
import TextInput from 'App/Components/Form/TextInput/index';

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
        <Div className={styles.body}>
          <Div className={styles.contentPart}>
            <Div className={styles.centeredContainer}>
              <Div className={styles.sidePart}>
                {tasksAdded.map((item, index) => {
                  return <Div className={[styles.taskCard, styles.taskCardMini]}>
                    <TextBlock type='header' className={styles.taskCardMiniHeader}>{item.taskword}</TextBlock>
                    <TextBlock type='noteItalic'>{item.description}</TextBlock>
                  </Div>
                })}
              </Div>
              <Div className={[styles.contentPart, styles.contentPartMini]}>
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Description'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
                <TextInput
                  value=''
                  placeholder='Title'
                />
              </Div>
            </Div>
          </Div>
          <Div className={styles.sidePart}>
            {tasks.map( (item, index) => {
              return <Div className={styles.taskCard}>
                <TextBlock type='header'>{item.taskword}</TextBlock>
                <TextBlock type='noteItalic'>{item.description}</TextBlock>
              </Div>
            })}
          </Div>
        </Div>
      </FullscreenWrapper>
    );
  }
}

export default Dashboard;
