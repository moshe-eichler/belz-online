import Head from 'next/head';

export default function sendMail() {
    return(
        <div>
            <form>
                <formGroup>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' />  
                </formGroup>
                <formGroup>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' />
                </formGroup>
                <formGroup>
                    <label htmlFor='message'>Message</label>
                    <input type='text' name='message' />
                </formGroup>
                <input type='submit'/>
            </form >
        </div>
    )
}
