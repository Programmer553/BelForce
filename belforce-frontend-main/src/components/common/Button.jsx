function Button({ children, onClick, variant = 'primary', ...props }) {
  const baseStyles = { padding: '0.5rem 1rem', cursor: 'pointer', border: 'none', borderRadius: 4 };
  const variants = {
    primary: { background: '#333', color: 'white' },
    secondary: { background: '#eee', color: '#333' },
  };
  const style = { ...baseStyles, ...variants[variant] };

  return (
    <button style={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
