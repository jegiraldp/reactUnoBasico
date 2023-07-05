import PropTypes from 'prop-types';

export function Button({text, nombre}){
    return <button onClick={function () {
        alert('HOla mundo')
    }}>
        {text}- {nombre}
    </button>
}

Button.propTypes={
    text: PropTypes.string
}

Button.defaultProps={
    nombre:"Por defecto"
}