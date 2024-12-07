// ฟังก์ชันคำนวณดอกเบี้ย
function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value) || 0;
    const rate = parseFloat(document.getElementById("rate").value) || 0;

    if (principal <= 0 || rate <= 0) {
        document.getElementById("result").textContent = "กรุณากรอกข้อมูลให้ครบถ้วน";
        return;
    }

    // คำนวณดอกเบี้ย
    const interest = (principal * rate) / 100;

    // แสดงผลลัพธ์
    document.getElementById("result").textContent = `ผลลัพธ์ที่ได้: ${interest.toFixed(2)}`;
}

// เพิ่ม event listeners เพื่อแสดงผลทันทีเมื่อเปลี่ยนค่า
document.getElementById("rate").addEventListener("input", calculateInterest);
document.getElementById("principal").addEventListener("input", calculateInterest);
