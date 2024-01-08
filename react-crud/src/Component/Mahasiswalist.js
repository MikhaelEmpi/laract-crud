import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
function Mahasiswalist()
{ 
    const[mahasiswa, setMahasiswa]= useState([]);
    const navigate = useNavigate();
     
    useEffect( ()=>{
        const getMahasiswa= ()=>{
            fetch("http://127.0.0.1:8000/api/mahasiswas")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.mahasiswas)
                setMahasiswa(response.mahasiswas)
            })
            .catch(error=>{ console.log(error)});
        }
        getMahasiswa();
    },[]);
  
   
    const deleteMahasiswa = (id) => {
        axios.delete('http://127.0.0.1:8000/api/mahasiswadelete/'+id).then(function(response){
            console.log(response.data);
            alert("Mahasiswa successfully deleted");
            setTimeout(()=>{
                navigate('/mahasiswalist');
            }, 1000);
        });
    }
     
    return(
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4 mt-4">Mahasiswa List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">NPM</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Kelas</th>
                                <th scope="col">Jurusan</th>
                                <th scope="col">No HP</th>
                                <th scope="col">Image</th>
                                <th scope="col" width="200">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        mahasiswa.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{pdata.npm } </td>
                                            <td>{pdata.nama } </td>
                                            <td>{pdata.kelas } </td>
                                            <td>{pdata.jurusan } </td>
                                            <td>{pdata.no_hp } </td>
                                            <td><img src={`http://127.0.0.1:8000/storage/${pdata.image}`} alt="" height={100} width={90} /></td>
                                            <td>
                                                <Link to={`/editmahasiswa/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                                <button onClick={() => deleteMahasiswa(pdata.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                               
                                                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Mahasiswalist;