import React from 'react';

interface ButtonContinuarProps {
  onClick?: () => void; 
  href?: string; 
}

const ButtonContinuar: React.FC<ButtonContinuarProps> = ({ onClick, href }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
      {href ? (
        // Se `href` for fornecido, renderize o botão como um link
        <a href={href} style={{ textDecoration: 'none' }}>
          <button
            onClick={onClick}
            style={{
              fontSize: 25,
              borderWidth: 0,
              borderRadius: 10,
              backgroundColor: 'orangered',
              width: '50%',
              height: 50,
              color: 'white',
              alignSelf: 'center',
            }}
          >
            Continuar
          </button>
        </a>
      ) : (
        // Caso contrário, renderize o botão padrão
        <button
          onClick={onClick}
          style={{
            fontSize: 25,
            borderWidth: 0,
            borderRadius: 10,
            backgroundColor: 'orangered',
            width: '50%',
            height: 50,
            color: 'white',
            alignSelf: 'center',
          }}
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default ButtonContinuar;
