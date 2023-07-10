// import Banana from './Gallery/profile.js'; // import from an export defautl: any name I want
import { GalleryScients } from './Gallery/Profile.js'; // import from export normal: must match names
import { Title } from './Gallery/Profile.js'; // import from export normal: must match names

export default function Gallery() {
  return (
    <>
      <Title />
      <GalleryScients />
    </>
  );
}

