// Cập nhật dữ liệu thời khóa biểu với 15 tuần học
const timetableData = [
  { period: '1', time: '07:00-07:50', notes: Array(15).fill('') },
  { period: '2', time: '07:50-08:40', notes: Array(15).fill('') },
  { period: '3', time: '08:50-09:40', notes: Array(15).fill('') },
  { period: '4', time: '09:50-10:40', notes: Array(15).fill('') },
  { period: '5', time: '10:40-11:30', notes: Array(15).fill('') },
  { period: '6', time: '13:30-14:20', notes: Array(15).fill('') },
  { period: '7', time: '14:20-15:10', notes: Array(15).fill('') },
  { period: '8', time: '15:20-16:10', notes: Array(15).fill('') },
  { period: '9', time: '16:10-17:00', notes: Array(15).fill('') }
];

// Hàm để hiển thị bảng thời khóa biểu
function renderTimetable() {
  const tbody = document.querySelector('#timetable tbody');
  tbody.innerHTML = '';

  timetableData.forEach((entry, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.period}</td>
      <td>${entry.time}</td>
      ${entry.notes.map((note, weekIndex) => {
        return `<td><input type="text" value="${note}" onchange="updateNote(${index}, ${weekIndex}, this.value)"></td>`;
      }).join('')}
    `;
    tbody.appendChild(row);
  });
}

// Hàm cập nhật ghi chú
function updateNote(periodIndex, weekIndex, value) {
  timetableData[periodIndex].notes[weekIndex] = value;
}

// Hàm lưu thay đổi vào LocalStorage
function saveChanges() {
  localStorage.setItem('timetableData', JSON.stringify(timetableData));
  alert('Thay đổi đã được lưu!');
}

// Hàm khôi phục thời khóa biểu từ LocalStorage
function loadSavedData() {
  const savedData = localStorage.getItem('timetableData');
  if (savedData) {
    timetableData.length = 0;
    timetableData.push(...JSON.parse(savedData));
  }
}

// Khởi tạo trang
window.onload = function() {
  loadSavedData();
  renderTimetable();
};
