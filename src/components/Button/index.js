import classNames from 'classnames';
import './index.css';

export default function Button({ text, onClick, disabled = false }) {
  const className = classNames(
    'button-component',
    disabled && 'button-disabled'
  );

  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
}
