import "./ContactMe.css";
import { useState } from "react";


export function ContactMe() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        window.location.href = `mailto:Javierburgara150@yahoo.com?subject=${name}: submitted from contact form&body=${message}`; 
    }

  return (
    <form className="form-container" onSubmit={handleSubmit} method="POST" id="contact-me">
        <h1 className="h1">Contact Me</h1>
    <div className="form-group">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Name"
                    required
                   value={name}
                   onChange={(e)=> setName(e.target.value)}
                />
            </div>
        </div>
    </div>
    <div className="form-group hidden">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <input
                    type="email"
                    name="_replyto"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Your email"
                    required
                />
            </div>
        </div>
    </div>
    <div className="form-group hiddenRight">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <textarea
                    name="message"
                    className="form-control form-control-lg"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write your message..."
                    required
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                />
            </div>
        </div>
    </div>
    <div className="row text-md-right text-sm-center">
        <div className="col-12 col-sm-12 col-md-6 mx-auto">
            <button
                type="submit"
                className="btn btn-primary mb-2 hidden">
                Submit
            </button>
        </div>
    </div>
</form>
  );
}
