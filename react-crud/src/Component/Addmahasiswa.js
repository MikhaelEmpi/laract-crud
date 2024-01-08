import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addmahasiswa() {
    const navigate = useNavigate();

  const [txtnpm, setnpm] = useState("");
  const [txtnama, setnama] = useState("");
  const [txtkelas, setkelas] = useState("");
  const [txtjurusan, setjurusan] = useState("");
  const [txtno_hp, setno_hp] = useState("");
  const [fileimage, setimage] = useState("");
  const [message, setMessage] = useState("");

    const uploadMahasiswa = async () => {
      console.log(fileimage);
      const formData = new FormData();
      formData.append("npm", txtnpm);
      formData.append("nama", txtnama);
      formData.append("kelas", txtkelas);
      formData.append("jurusan", txtjurusan);
      formData.append("no_hp", txtno_hp);
      formData.append("image", fileimage);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/mahasiswas",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response) {
        setMessage(response.message);
        alert("Data successfully created.");
        setTimeout(() => {
          navigate("/mahasiswalist");
        }, 1000);
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadMahasiswa();
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Add Mahasiswa </h5>
            <p className="text-warning">{message}</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">NPM </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setnpm(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Nama </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setnama(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Kelas </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setkelas(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Jurusan </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setjurusan(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">No HP </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setno_hp(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Image</label>
                <div className="col-sm-9">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setimage(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Addmahasiswa;
