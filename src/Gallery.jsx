import { useQuery } from '@tanstack/react-query';
import { url } from './api';
import axios from 'axios';
import { useGlobalContext } from './context';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return <h3>Loading Data Please Wait</h3>;
  }
  if (response.error) {
    return <h3> There was An Error</h3>;
  }
  const ImgArray = response.data.results;

  return (
    <div id="dotacont" className="image-container">
      {ImgArray.map((item) => {
        const des = item.alt_description.slice(0, 40) + '...';

        return (
          <div key={item.id} style={{ position: 'relative' }}>
            <img className="img" src={item?.urls?.regular} alt="" />
            <legend>{des}</legend>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
// Some bug in this
// return (
//   <div id="dotacont" className="image-container">
//     {ImgArry.map((img) => {
//       const dec = img.alt_description;
//       console.log(img);
//       return (
//         <div key={img.id} style={{ position: 'relative' }}>
//           <img
//             className="img"
//             alt={img.alt_description}
//             src={img.urls.regular}
//           ></img>
//           <legend>{dec.slice(0, 30) + '...'}</legend>
//         </div>
//       );
//     })}
//   </div>
// );
