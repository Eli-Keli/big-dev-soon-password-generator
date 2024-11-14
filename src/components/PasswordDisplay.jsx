/* eslint-disable react/prop-types */
import { Copy, RefreshCcw } from "lucide-react"

const PasswordDisplay = ({ password, passwordRef, copyToClipboard, generatePassword }) => {
    return (
        <div>
            <h2 className='text-[12px] text-gray-500 uppercase'>Generated Password</h2>
            {/* Replace with input */}
            <div className="relative">
                <input
                    ref={passwordRef}
                    type="text"
                    value={password}
                    className="w-full bg-gray-800 p-3 rounded-md"
                    readOnly
                />
                <Copy className="w-4 h-4 mx-auto cursor-pointer text-purple-500 absolute top-4 right-8" onClick={copyToClipboard} />
                <RefreshCcw className="w-4 h-4 mx-auto cursor-pointer text-purple-500 absolute top-4 right-3" onClick={generatePassword} />
            </div>
        </div>
    )
}

export default PasswordDisplay