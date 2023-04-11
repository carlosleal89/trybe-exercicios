import React from "react";

class Infos extends React.Component {
    render() {
        const { name, email, handlerChange } = this.props;
        return(
            <>
                <input type="text" name="name" value={ name } onChange={ handlerChange } />
                {/* {console.log(name.length)}
                { !name ? 'Digite seu nome' : name.length > LIMITE_CHAR ? 'Nome muito grande' : ''} */}
                {/* exemplo de como usar expressões JS dentro do return  */}
                <input type="text" name="email" value={ email } onChange={ handlerChange } />
                {/* {console.log(name.length)}
                { !email ? 'Digite seu email' : email.length > LIMITE_CHAR ? 'email muito grande' : ''} */}
            </>
        )
    }
}

export default Infos