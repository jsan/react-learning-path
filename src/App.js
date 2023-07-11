// import Banana from './pages/profile.js'; // import from an export defautl: any name I want
import { GalleryScients } from './pages/Profile.js'; // import from export normal: must match names
import { Title } from './pages/Profile.js'; // import from export normal: must match names

export default function Gallery() {
  return (
    <>
      <Title />
      <GalleryScients />
    </>
  );
}

