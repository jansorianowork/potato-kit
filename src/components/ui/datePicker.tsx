import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
	selected,
	onChange,
	placeholder,
}: {
	selected: Date | null;
	onChange: (date: Date | null) => void;
	placeholder?: string;
}) => {
	return (
		<DatePicker
			selected={selected}
			onChange={onChange}
			placeholderText={placeholder || "Select date"}
			className="p-2 border rounded-md w-full"
			dateFormat="yyyy-MM-dd"
		/>
	);
};

export default CustomDatePicker;
