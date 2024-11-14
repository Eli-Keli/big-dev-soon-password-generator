/* eslint-disable react/prop-types */


const LengthSlider = ({ length, setLength }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <h2 className='text-[12px] text-gray-500 uppercase'>Character Length:</h2>
                <span className='text-xl text-purple-500'>{length}</span> {/* Current Value */}
            </div>
            <div className="flex gap-2 bg-gray-800 p-3 rounded-2xl">
                <span>12</span> {/* Min */}
                <input
                    type="range"
                    min="12"
                    max="32"
                    className="w-full accent-purple-500"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
                <span>32</span> {/* Max */}
            </div>
        </div>
    )
}

export default LengthSlider