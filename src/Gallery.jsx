import { useQuery } from '@tanstack/react-query';
import { url } from './api';
import axios from 'axios';

const Gallery = () => {
  const resp = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  const ImgArry = resp.data || [];
  console.log(ImgArry);

  return (
    <div id="dotacont" className="image-container">
      {ImgArry.map((img) => {
        const dec = img.alt_description;
        console.log(img);
        return (
          <div key={img.id} style={{ position: 'relative' }}>
            <img
              className="img"
              alt={img.alt_description}
              src={img.urls.regular}
            ></img>
            <legend>{dec.slice(0, 30) + '...'}</legend>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
