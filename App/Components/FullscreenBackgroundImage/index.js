import * as React from 'react';
import FullscreenWrapper from 'App/Components/FullscreenWrapper';
import styles from './styles.module.css';
import Div from 'App/Components/Div';

type Props = {
  source: string,
  children: any,
  style?: Object,
  className?: string | Array,
  maskColor?: string,
  maskStyle?: Object
}

class FullscreenBackgroundImage extends React.PureComponent<Props> {
  render () {
    const { children, source, style, className, maskColor, maskStyle } = this.props;


    return <FullscreenWrapper>
      <img src={source} className={styles.backgroundImage} alt='back' />
      <div className={styles.mask} style={{backgroundColor: maskColor, ...maskStyle}} />
      <Div style={style} className={[styles.content, className]}>
        {children}
      </Div>
    </FullscreenWrapper>
  }
}

export default FullscreenBackgroundImage;
