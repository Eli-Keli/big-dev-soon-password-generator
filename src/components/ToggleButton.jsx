/* eslint-disable react/prop-types */


const ToggleButton = ({ isChecked, setIsChecked }) => {

    return (
        <div className="relative inline-block w-11 h-5">
            <input
                type="checkbox"
                className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-purple-800 cursor-pointer transition-colors duration-300"
                defaultChecked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label htmlFor="switch-component-1" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-purple-800 cursor-pointer" />
        </div>
    );
}

export default ToggleButton