import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/** 생일폼 컴포넌트 스타일 */
const BirthdayWrap = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const Selected = styled.select`
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
`;

const BirthdayForm: React.FC = () => {
  // 현재 날짜의 연도, 월, 일을 초기값으로 설정
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString(); // 연도
  const currentMonth = (currentDate.getMonth() + 1).toString(); // 월 (0부터 시작하므로 +1 필요)
  const currentDay = currentDate.getDate().toString(); // 일

  // 연도, 월, 일을 위한 상태 변수 초기화
  const [selectedYear, setSelectedYear] = useState<string>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<string>(currentDay);
  const [dayOptions, setDayOptions] = useState<string[]>([]);

  // 100년 범위의 연도와 12개월 범위의 월 생성
  const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  // 월과 연도가 변경될 때 실행되는 효과
  useEffect(() => {
    if (selectedYear && selectedMonth) {
      // 선택된 월과 연도에 따라 가능한 일 수 계산
      const daysInMonth = new Date(parseInt(selectedYear, 10), parseInt(selectedMonth, 10), 0).getDate();
      const newDays = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
      setDayOptions(newDays);
      setSelectedDay(newDays[0]); // 일을 초기값으로 설정
    }
  }, [selectedYear, selectedMonth]);

  return (
    <BirthdayWrap>
      <Selected id="year" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Selected>
      <label htmlFor="year">년</label>
      <Selected
        id="month"
        value={selectedMonth}
        onChange={(e) => {
          const month = e.target.value;
          setSelectedMonth(month);
        }}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Selected>
      <label htmlFor="month">월</label>
      <Selected id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        {dayOptions.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </Selected>
      <label htmlFor="day">일</label>
    </BirthdayWrap>
  );
};

export default BirthdayForm;
