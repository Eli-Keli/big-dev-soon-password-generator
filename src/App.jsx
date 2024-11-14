/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect, useRef } from 'react'

import GenerateButton from './components/GenerateButton'
import LengthSlider from './components/LengthSlider'
import PasswordDisplay from './components/PasswordDisplay'
import SettingsPanel from './SettingsPanel'

function App() {
  // Setup State variables
  const [length, setLength] = useState(20)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  // Password Generation Function
  const generatePassword = useCallback(() => {
    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+'

    // Create a character set based on the settings
    let characterSet = ''
    if (includeLowercase) characterSet += lowercase
    if (includeUppercase) characterSet += uppercase
    if (includeNumbers) characterSet += numbers
    if (includeSymbols) characterSet += symbols

    // Generate the password
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length)
      password += characterSet[randomIndex]
    }

    // Update the password state
    setPassword(password)
  }, [length, includeLowercase, includeUppercase, includeNumbers, includeSymbols])



  // Reference for the password field
  const passwordRef = useRef(null)



  // Copy to clipboard function
  const copyToClipboard = () => {
    passwordRef.current.select()
    document.execCommand('copy')
    setCopied(true)
  }


  // generate the password when the component mounts
  useEffect(() => {
    generatePassword()
  }, [generatePassword])


  return (
    <div className='min-h-screen flex items-center justify-center bg-purple-50'>
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Generate Password</h1>
        <div className="space-y-4">
          <PasswordDisplay password={password} passwordRef={passwordRef} copyToClipboard={copyToClipboard} generatePassword={generatePassword} />
          <LengthSlider length={length} setLength={setLength} />
          <SettingsPanel
            includeLowercase={includeLowercase}
            setIncludeLowercase={setIncludeLowercase}
            includeUppercase={includeUppercase}
            setIncludeUppercase={setIncludeUppercase}
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
            includeSymbols={includeSymbols}
            setIncludeSymbols={setIncludeSymbols}
          />
          <GenerateButton generate={generatePassword} />
        </div>
      </div>
    </div>
  )
}

export default App