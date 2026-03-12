import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Crud() {
    const [data, setdata] = useState({

        email: "",
        password: ""
    });

    const [newdata, setnewdata] = useState([]);
    const[deleteid,setdeletid]=useState(null);

    function handlechange(e) {
        setdata({ ...data, [e.target.id]: e.target.value });
    }

    function handlesubmit(e) {
        e.preventDefault();

        console.log(data)
        axios.post("https://69ad35d1b50a169ec87ee5ed.mockapi.io/Vaibhav", data)
            .then((res) => {
                console.log(data)
                alert("Data Saved SuccesFully !!!")
                getdata();
            });

        setdata({
            email: "",
            password: ""
        });

    }

    function getdata() {
        axios.get("https://69ad35d1b50a169ec87ee5ed.mockapi.io/Vaibhav")
            .then((res) => {
                console.log(res.data);
                setnewdata(res.data);
                alert("Data Get Successfully....");
            })


    }
    useEffect(() => {
        getdata();
    }, []);

    function deletedata(id) {

        axios.delete("https://69ad35d1b50a169ec87ee5ed.mockapi.io/Vaibhav/" + id)
            .then((res) => {
                console.log(res.data);
                getdata();
            })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={data.email} onChange={handlechange} type="text" class="form-control" id="email" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={data.password} onChange={handlechange} type="text" class="form-control" id="password" />
                        </div>
                        <button onClick={handlesubmit} type="submit" class="btn btn-primary">Submit</button>

                    </div>
                    <div className='col-6'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First</th>
                                    <th>Last</th>
                                    <th>Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newdata.map((eachdata, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td>{eachdata.email}</td>
                                                <td>{eachdata.password}</td>
                                                <td>
                                                    <button className='btn btn-primary ms-5'><i class="fa fa-pencil" aria-hidden="true" /></button>
                                                    <button onClick={() => deletedata(eachdata.id)} className='btn btn-danger'><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div class="modal fade" id="deleteModal" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h5 class="modal-title">Confirm Delete</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <div class="modal-body">
                                        Are you sure you want to delete this user?
                                    </div>

                                    <div class="modal-footer">
                                        <button class="btn btn-secondary" data-bs-dismiss="modal">No</button>

                                        <button
                                            class="btn btn-danger"
                                            data-bs-dismiss="modal"
                                            onClick={() => deletedata(deleteId)}
                                        >
                                            Yes Delete
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Crud