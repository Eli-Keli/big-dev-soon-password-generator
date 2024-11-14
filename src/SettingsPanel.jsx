/* eslint-disable react/prop-types */
import ToggleButton from './components/ToggleButton';

const SettingsPanel = ({
    includeLowercase, setIncludeLowercase,
    includeUppercase, setIncludeUppercase,
    includeNumbers, setIncludeNumbers,
    includeSymbols, setIncludeSymbols
}) => {
    return (
        <div>
            <h2 className='text-[12px] text-gray-500 mb-3 uppercase'>Settings</h2>
            <div className="flex flex-col space-y-2">
                <label className="flex items-center justify-between bg-gray-800 p-3 rounded-2xl">
                    <span className="ml-2">Include uppercase letters</span>
                    <ToggleButton isChecked={includeUppercase} setIsChecked={setIncludeUppercase} />
                </label>
                <label className="flex items-center justify-between bg-gray-800 p-3 rounded-2xl">
                    <span className="ml-2">Include lowercase letters</span>
                    <ToggleButton isChecked={includeLowercase} setIsChecked={setIncludeLowercase} />
                </label>
                <label className="flex items-center justify-between bg-gray-800 p-3 rounded-2xl">
                    <span className="ml-2">Include numbers</span>
                    <ToggleButton isChecked={includeNumbers} setIsChecked={setIncludeNumbers} />
                </label>
                <label className="flex items-center justify-between bg-gray-800 p-3 rounded-2xl">
                    <span className="ml-2">Include symbols</span>
                    <ToggleButton isChecked={includeSymbols} setIsChecked={setIncludeSymbols} />
                </label>
            </div>
        </div>
    );
}

export default SettingsPanel;