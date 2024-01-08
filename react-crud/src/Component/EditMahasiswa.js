import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
function EditMahasiswa()
{
    const navigate = useNavigate();
     
    const {id}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [inputs, setInputs] = useState([]);
    const [fileimage, setimage]= useState('');
     
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
     
    const uploadMahasiswa= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('npm', inputs.npm);
        formData.append('nama',inputs.nama);
        formData.append('kelas',inputs.kelas);
        formData.append('jurusan',inputs.jurusan);
        formData.append('no_hp',inputs.no_hp);
        formData.append('image', fileimage);
        const response= await axios.post("http://127.0.0.1:8000/api/mahasiswasupdate/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
        setMessage(response.data.message);
        console.log(response)
        setTimeout(()=>{
            navigate('/mahasiswalist');
        }, 2000);
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadMahasiswa();
 
   }
    
    useEffect(() => {
        getmahasiswa();
    }, []);
   
    function getmahasiswa() {
        axios.get('http://127.0.0.1:8000/api/mahasiswas/'+id).then(function(response) {
            console.log(response);
            setInputs(response.data.mahasiswa);
        });
    }
     
    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Edit Mahasiswa </h5> 
                <p className="text-success"><b>{ message }</b></p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">NPM </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.npm} className="form-control" name="npm" onChange={ handleChange}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Nama </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.nama} className="form-control" name="nama" onChange={ handleChange} />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Kelas </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.kelas} className="form-control" name="kelas" onChange={ handleChange} />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Jurusan </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.jurusan} className="form-control" name="jurusan" onChange={ handleChange} />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">No HP </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.no_hp} className="form-control" name="no_hp" onChange={ handleChange} />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Image</label>
                    <div className="col-sm-9">
                        <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width={300} />
                        <input type="file" className="form-control" onChange={(e)=>setimage(e.target.files[0])} />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default EditMahasiswa;