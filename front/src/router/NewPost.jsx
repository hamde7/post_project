import {useState} from 'react';
import { MdFaceRetouchingNatural } from 'react-icons/md';
import { Form, Link, redirect } from 'react-router-dom';
import classes from '../components/NewPost.module.css';
import Modal from '../components/modal'
function NewPost(){
    return(
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">enter the body</label>
                    <textarea id="body" name="body" required rows={3} ></textarea>
                </p>
                <p>
                    <label htmlFor="name">your name</label>
                    <input type="text" name="auther" id="name"  required/>
                </p>
                <p className={classes.actions}>
                    <Link to=".."><button type='button' >Cancel</button></Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}
export default NewPost;

export async function  action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8000/posts' , {
        method :'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    return redirect('/');
}