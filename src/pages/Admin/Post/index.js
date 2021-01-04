import React, { useEffect, useState} from 'react'
import Axios from 'axios';
import './style.css'
import { useHistory } from 'react-router-dom';


const Post = () => {
  const [loading, setLoading] = useState(false)

    Axios.defaults.withCredentials = true;
    let history = useHistory();

    const [ selectedFiles, setSelectedFiles ] = useState([]);
    const [image, setImage] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      setImage((prev) => prev.concat(e.target.files));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
    }
    // console.log(image);
	};

	const renderPhotos = (source) => {
		// console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} className="result"/>;
		});
  };
  
  const upload = () => {
    setLoading(true);
    const formData = new FormData();
    var images = image.length;
    console.log(images);
    for(var a = 0; a<images; a++)
    {
     formData.append("file"+a, image[a]); 
    formData.append("upload_preset", "nuimbgfa");
    Axios.post(
      `https://api.cloudinary.com/v1_1/egipegi/image/upload`,
      formData
    )
    .then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3001/product", {
        // title: title,
        // description: description,
        image: fileName,
        // author: localStorage.getItem("username"),
      }).then(() => {
        setLoading(false);
      });
    });
  }
  };

    useEffect(() => {
        Axios.get("http://localhost:3001/auth/login").then((response) => {
          if (response.data.loggedIn === false) {
            history.push("/admin/login");
          } 
          // console.log(response.data.loggedIn)
        })
      }, [])
    return (
        <div className="post">
            <div className="wrap-post">
                <div className="card-post">
                    <label>Nama Produk</label>
                    <input type="text" placeholder="Masukan nama produk..." className="inp-post" />
                    <label>Unggah Foto</label>
                        <input type="file" id="file" multiple onChange={handleImageChange} />
                          <label htmlFor="file" className="file-post">
                          <i class="fas fa-camera"></i> <b> Add Photos</b>
                          </label>
                        <div className="render-result">{renderPhotos(selectedFiles)}</div>
                    <label>Keterangan</label>
                    <textarea placeholder="Deskripsi" className="d-post" />
                    <button className="btn-post" onClick={upload} disabled={loading} >
                      {loading && <><i class="fas fa-spinner fa-pulse"></i> Submit ...</>}
                      {!loading && 'Submit'}
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Post
