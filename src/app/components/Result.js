import { h } from 'preact';

const imgStyle = {
    width: '100%',
    height: 'auto'
}

const divStyle = {
    maxWidth: '100%'
}

export default ({ url, title }) => {
    return (
        <div className="column column-33" style={divStyle}>
            <img src={url} style={imgStyle} alt={title}/>
        </div>
    )
}
