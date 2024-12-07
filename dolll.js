const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn'); // ปุ่มแปลงยังสามารถใช้ได้
const result = document.getElementById('result');
const convertedAmount = document.getElementById('convertedAmount');

// ตารางอัตราแลกเปลี่ยน (hardcoded rates)
const exchangeRates = {
    USD: { THB: 34.04, JPY: 148.76, KRW: 1300.5 },
    THB: { USD: 0.029, JPY: 4.37, KRW: 38.21 },
    JPY: { USD: 0.0067, THB: 0.23, KRW: 8.57 },
    KRW: { USD: 0.00077, THB: 0.026, JPY: 0.12 }
};

// ฟังก์ชันแปลงค่าเงิน
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!amount || amount <= 0) {
        result.textContent = 'กรุณาใส่จำนวนเงินที่ถูกต้อง';
        convertedAmount.value = '';
        return;
    }

    // ตรวจสอบอัตราแลกเปลี่ยน
    if (exchangeRates[from] && exchangeRates[from][to]) {
        const rate = exchangeRates[from][to];
        const converted = (amount * rate).toFixed(2);

        // แสดงผลลัพธ์
        convertedAmount.value = converted;
        result.textContent = `${amount.toLocaleString()} ${from} = ${converted} ${to}`;
    } else {
        result.textContent = 'ไม่พบข้อมูลอัตราแลกเปลี่ยน';
        convertedAmount.value = '';
    }
}

// เพิ่ม Event Listener สำหรับการเปลี่ยนแปลงค่าในช่องกรอกจำนวนเงิน และการเลือกสกุลเงิน
amountInput.addEventListener('input', convertCurrency);  // เมื่อกรอกจำนวนเงิน
fromCurrency.addEventListener('change', convertCurrency);  // เมื่อเลือกสกุลเงินต้นทาง
toCurrency.addEventListener('change', convertCurrency);  // เมื่อเลือกสกุลเงินปลายทาง
