import React, { useState } from 'react'

function Crud() {

    const[data,setdata]=useState({
        name:"",
        lastname:""
    });

    function handleChange(e){
        setdata({...data,[e.target.id]:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(data.name);
        console.log(data.lastname);



        setdata({
            name:"",
            lastname:""
        });
    };

    return (
        <>
            <div className='container mt-5'>

                <h1>CRUD</h1>
                <div className='row mt-5'>

                    <div className='col-6'>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">First Name</label>
                                <input value={data.first_name} onChange={handleChange}  type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                               
                            </div>
                            <div class="mb-3">
                                <label  for="exampleInputPassword1" class="form-label">Last Name</label>
                                <input value={data.last_name} onChange={handleChange} type="text" class="form-control" id="lastname" />
                            </div>
                          
                            <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                        <h1>{(data.name)} {(data.lastname)}</h1>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crud;