function ProfileEle() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  function ProfileEla({props}) {
     console.log(props);
    return (
        <>
        <h1>{props.nome }</h1>
        <img src={props.foto} alt="Katherine Johnson" />;
    </>
    )
  }
  
  export default function GalleryTodos() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <ProfileEle />
        <ProfileEle />
        <ProfileEla />
      </section>
    );
  }

  export function GallerySoEla() {
        return (
          <section>
            <h1>Amazing scientists</h1>
            <ProfileEla 
                props = 
                {{
                    nome: "Jorge",
                    foto: 'https://i.imgur.com/QIrZWGIs.jpg'
                }}
                texto="vai"
            />
            <ProfileEla 
                props={{
                    nome: "Bel",
                    foto: "https://i.imgur.com/MK3eW3As.jpg"
                }}
            />
          </section>
        );
      
  }