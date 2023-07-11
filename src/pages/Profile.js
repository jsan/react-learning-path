import { getImageUrl } from './utils.js';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Profile = (props, size=50)  => { 
    console.log("Aqui:"+props.awards);
  return (
    <div style={{ padding:20, maxWidth: 800, minWidth: 100 }}>
        <div style={{ 
            border: '1px solid black' ,
            WebkitBorderRadius: 20,
            padding:20,
            backgroundColor: 'lightgray'
        }}>
          <h2>{props.attributos.nome}</h2>
          <img
            className="avatar"
            src={getImageUrl(props.attributos.imageId)}
            alt={props.attributos.nome}
            width={props.size}
            height={props.size}
            style={{
                border: '4px solid white' ,
                WebkitBorderRadius:50,
            }}
          />
          <ul>
            <li>
                <b>Profession: </b> 
                {props.attributos.profession}
            </li>
            <li>
                <b>Awards: {props.awards.length}</b> 
                ({props.awards.join(', ')}) 
            </li>
            <li>
                <b>Discovered: </b>
                {props.attributos.discovered}
            </li>
          </ul>
            {props.children}
            {/* {props.isPacked ? <del>ola</del> : <del>tchau</del>} */}
            {props.isPacked && <p><del>ola</del></p>}
        </div>
    </div>
  )}

const Title = () => 
<>
    <div style={{ paddingLeft:20, height: 40}}>
        <h1>Notable Scientists </h1>
    </div>
    <div style={{ paddingLeft:20}}>
        (working with const variable components)
    </div>
    </>
const GalleryScients = () => 
    <div>
         <Profile 
            awards={[
                'Miyake Prize for geochemistry',
                'Tanaka Prize'
            ]}
            size={100}
            isPacked={true} 
            attributos= 
            {
                {
                    nome: 'Maria Skłodowska-Curie',
                    imageId: 'szV5sdG',
                    profession: 'physicist and chemist',
                    discovered: 'polonium (element)'
                }
            }
        >
               <Button>My button</Button>
        </Profile>
        <Profile 
            awards={[
                'Miyake Prize for geochemistry',
                'Tanaka Prize'
            ]}
            
            size={100}
            isPacked={false} 
            attributos= 
            {
                {
                    nome: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2',
                    profession: 'geochemist',
                    discovered: 'a method for measuring carbon dioxide in seawater'
                }
            }
        />
    </div>

export {Title}
export {GalleryScients}
