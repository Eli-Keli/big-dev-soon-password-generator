/* eslint-disable react/prop-types */


const GenerateButton = ({ generate }) => {
    return (
        <button
            onClick={generate}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md w-full"
        >
            Generate Password
        </button>
    )
}

export default GenerateButton