import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  style: PropTypes.string,
  processing: PropTypes.bool,
  children: PropTypes.node,
};

export default function Button({ type = 'submit', className = '', processing, children, style }) {
  return (
    <button type={type} className="btn-primary" disabled={processing} style={style}>
      {children}
    </button>
  );
}
