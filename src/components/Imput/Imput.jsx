export function Entrada({ type, onChange, placeholder }) {
    return (
        <>
            <input 
            type={type} 
            onChange={onChange} 
            placeholder={placeholder} 
            />
        </>
    );
  }
  