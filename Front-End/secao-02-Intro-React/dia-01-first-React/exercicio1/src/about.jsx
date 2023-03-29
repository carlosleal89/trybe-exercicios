import React, {Component} from "react";

// class AboutMe extends Component {
//     render() {
//         const name = <h1>Carlos Leal</h1>;
//         const about = <p>Tenho 33 anos.</p>;
//         const title = <h2>Minhas habilidades</h2>;
//         const habilities = <ul><li>JavaScript</li><li>DOM</li><li>React</li></ul>
//         return <div>
//             {name}
//             {about}
//             {title}
//             {habilities}
//         </div>
//     }
// }

// class AboutMe extends Component {
//     render() {        
//         return <div>
//             <h1>Carlos Leal</h1>
//             <p>Tenho 33 anos.</p>
//             <h2>Minhas habilidades</h2>
//             <ul>
//                 <li>JavaScript</li>
//                 <li>DOM</li>
//                 <li>React</li>
//                 <li>CSS</li>
//             </ul>         
//         </div>
//     }
// }
// export default AboutMe;

class AboutMe extends Component {
    render() {        
        const nomes = ['carlos', 'maria', 'pompom'];
        return (
            <ul className="hello">
                {nomes.map((nome) => <li> Hello {nome}</li>)}
            </ul>
        )
    }
}
export default AboutMe;