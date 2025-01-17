import React, { FC } from "react";
import Panel from "./Panel";
import { BsCalendar } from "react-icons/bs";
import styles from "./YearFilter.module.css";

interface YearFilterProps {
  selectedYears: string[];
  setSelectedYears: (years: string[]) => void;
}

const YearFilter: FC<YearFilterProps> = ({ selectedYears, setSelectedYears }) => {
  const years = ["2024", "2023", "2022", "2021"];

  const handleYearToggle = (year: string) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter(y => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  return (
    <Panel
      title={
        <>
          <BsCalendar className="text-muted" /> Year Filter
        </>
      }
    >
      <div className={styles.yearFilterContainer}>
        {years.map(year => (
          <label key={year} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedYears.includes(year)}
              onChange={() => handleYearToggle(year)}
              className={styles.checkbox}
            />
            <span>{year}</span>
          </label>
        ))}
      </div>
    </Panel>
  );
};

export default YearFilter; 