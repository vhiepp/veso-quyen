import React, { useEffect, useState } from 'react'
import { auth } from '../configs/firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verifyCode, setVerifyCode] = useState('')

  useEffect(() => {
    setUpRecaptcha()
  }, [])

  const setUpRecaptcha = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit()
      },
    })
  }

  const handleSignIn = async () => {
    window.confirmationResult
      .confirm(verifyCode)
      .then((result) => {
        // User signed in successfully.
        const user = result.user

        console.log({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          phone: user.phoneNumber,
        })
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      })
  }

  const handleSentVerifyCode = async () => {
    console.log('a')
    const appVerifier = await window.recaptchaVerifier

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      })
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <input
          className="border-2"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          onClick={handleSentVerifyCode}
          id="sign-in-button"
        >
          Gửi mã xác thực
        </button>
      </div>
      <div>
        <input
          className="border-2"
          type="tel"
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value)}
        />
        <button onClick={handleSignIn}>OK</button>
      </div>
    </div>
  )
}
