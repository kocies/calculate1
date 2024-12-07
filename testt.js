// ฟังก์ชันคำนวณเปอร์เซ็นต์
function calculatePercentage() {
    const inputValue = document.getElementById('inputValue').value;
    const inputValue1 = document.getElementById('inputValue1').value;

    // ตรวจสอบการกรอกข้อมูล
    if (inputValue === "" || inputValue1 === "" || isNaN(inputValue) || isNaN(inputValue1)) {
        document.getElementById('result').textContent = "กรุณากรอกข้อมูลให้ครบถ้วน";
        return;
    }

    // คำนวณเปอร์เซ็นต์
    const percentage = (inputValue / inputValue1) * 100;

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = `${inputValue} เท่ากับ ${percentage}% ของ ${inputValue1}.`;
}

// เพิ่ม event listeners เพื่อให้คำนวณและแสดงผลทันทีเมื่อมีการกรอกข้อมูล
document.getElementById('inputValue').addEventListener('input', calculatePercentage);
document.getElementById('inputValue1').addEventListener('input', calculatePercentage);
