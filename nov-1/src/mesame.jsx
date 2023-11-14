
 const Mesame = (props) => {
    const fontZoma = props.size == 'big' ? '30px' : '20px';
    return (
        <h1 style={{
          fontSize:  fontZoma
        }}>
       {props.title}
       {props.size}
       </h1>
    )
    
}

export default Mesame