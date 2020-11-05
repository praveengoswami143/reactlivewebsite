import React, { useState } from 'react';

const Contact = () => {
    const [Data, setData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        message: "",
    });

    const InputEvent = (event) =>{
        const {name,value} = event.target;

        setData((preVal) =>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${Data.fullname}. My mobile number is ${Data.mobile} and my email Id is ${Data.email}.and here i want to say that ${Data.message}.`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={Data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile No.</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="mobile" value={Data.mobile} onChange={InputEvent} placeholder="Enter Mobile No." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={Data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={Data.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;