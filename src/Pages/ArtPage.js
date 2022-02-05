import ArtPosts from "../Components/ArtPosts";
import "../CSS/Art.css";

function ArtPage() {
  return (
    <div className="art">
      <ArtPosts />
    </div>
  );
  // const [selectedFile, setSelectedFile] = useState({})

  // // const postFile = async () => {
  // //     try {
  // //         await axios.post("http://localhost:3001/upload", data);
  // //         // console.log(res.statusText)
  // //     } catch (err) {
  // //         console.log(err)
  // //     }
  // // }

  // const handleChange = (event) => {
  //     setSelectedFile(event.target.files[0])
  //     console.log(event.target.files[0])

  // }

  // const onClickHandler = () => {
  //     const data = new FormData()
  //     data.append('file', selectedFile)
  //     axios.post("http://localhost:3001/upload", data, {})
  //         .then(res => { console.log(res.status.Text) })
  // }
  // return (
  //     <div className="art">
  //         <ArtPosts />

  //         <label for="avatar">Upload Your Latest and Greatest Fan Art:</label>

  //         <input type="file"
  //             id="anime_art" name="anime_art"
  //             accept="image/png, image/jpeg"
  //             onChange={handleChange}
  //         ></input>

  //         <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>

  //     </div>

  // )
}
export default ArtPage;
