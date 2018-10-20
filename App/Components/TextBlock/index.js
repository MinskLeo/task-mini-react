import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  children: any,
  type: 'header' | 'note' | 'subnote' | 'noteItalic' | 'email' | 'phone',
  className: string
}

class TextBlock extends React.PureComponent<Props> {
  render () {
    const { children, type, className } = this.props;
    let selectedStyle = '';
    switch (type) {
      case 'header':
        selectedStyle=styles.heading;
        break;
      case 'note':
        selectedStyle = styles.note;
        break;
      case 'subnote':
        selectedStyle = styles.subnote;
        break;
      case 'noteItalic':
        selectedStyle = styles.noteItalic;
        break;
      case 'email':
      case 'phone':
        selectedStyle = styles.contact;
        break;

      default: break;
    }

    if(type==='email' || type==='phone') {
      const link = type==='email' ? `mailto:${children}` : `tel:${children}`;

      return (
        <a href={link} className={`${selectedStyle} ${className}`}>
          {children}
        </a>
      );
    }
    
    return (
      <p className={`${selectedStyle} ${className}`}>
        {children}
      </p>
    );
  }
}

export default TextBlock;
