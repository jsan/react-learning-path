import React, { Component } from 'react';

import { getImageUrl } from './utils.js';

class ProfileClass extends Component {
    render () {
        return (
            <div style={{ padding:20, maxWidth: 800, minWidth: 100 }}>
            <div style={{ 
                border: '1px solid black' ,
                WebkitBorderRadius: 20,
                padding:20,
                backgroundColor: 'lightgray'
            }}>
              <h2>{this.props.attributos.nome}</h2>
              <img
                className="avatar"
                src={getImageUrl(this.props.attributos.imageId)}
                alt={this.props.attributos.nome}
                width={this.props.size}
                height={this.props.size}
                style={{
                    border: '4px solid white' ,
                    WebkitBorderRadius:50,
                }}
              />
              <ul>
                <li>
                    <b>Profession: </b> 
                    {this.props.attributos.profession}
                </li>
                <li>
                    <b>Awards: {this.props.awards.length}</b> 
                    ({this.props.awards.join(', ')}) 
                </li>
                <li>
                    <b>Discovered: </b>
                    {this.props.attributos.discovered}
                </li>
              </ul>
                {this.props.children}
            </div>
        </div>
        )
    }
}



const Title = () => 
    <div>
        <div style={{ paddingLeft:20, height: 40 }}>
            <h1>Notable Scientists</h1>
        </div>
        <div style={{ paddingLeft:20}}>
            (Working with class component)
        </div>
    </div>
const GalleryScients = () => 
    <div>
         <ProfileClass 
            awards={[
                    'Nobel Prize in Physics', 
                    'Nobel Prize in Chemistry', 
                    'Davy Medal, Matteucci Medal'
                  ]}
          
            size={100}
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
                <button>oi</button>
        </ProfileClass>
        <ProfileClass 
            awards={[
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize'
                  ]}
          
            size={100}
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
