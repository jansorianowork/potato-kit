import * as React from "react";
import CustomDatePicker from "@/components/ui/datePicker";

const DatePickerStory = ({ placeholder }: { placeholder?: string }) => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <div className="date-picker-wrapper">
      <CustomDatePicker
        selected={date}
        onChange={setDate}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DatePickerStory;
