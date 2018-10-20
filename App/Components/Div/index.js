import * as React from 'react';

type Props = {
  className?: string | Array,
  children: any,
  style?: Object | string
}

class Div extends React.PureComponent<Props> {
  render () {
    const { className, children, style } = this.props;
    let divClassName = '';

    if(typeof className==='object' && Array.isArray(className)) {
      className.forEach((item, index) => {
        if(typeof item==='string') {
          divClassName += item;
          if (index < className.length - 1) {
            divClassName += ' ';
          }
        }
      });
    } else {
      divClassName = className;
    }

    return (
      <div className={divClassName} style={style}>
        {children}
      </div>
    );
  }
}

export default Div;
