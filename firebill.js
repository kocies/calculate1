function calculateElectricityBill() {
    // ดึงค่าจากช่อง input
    var units = parseFloat(document.getElementById("units").value);
    var ft = 39.72;  // ค่า ft ที่กำหนด
    var serviceCharge = 8.19; // ค่าบริการรายเดือน
    var vatRate = 0.07; // อัตราภาษี VAT 7%

    // ตรวจสอบจำนวนหน่วยที่กรอก
    if (isNaN(units) || units <= 0) {
        alert('กรุณากรอกจำนวนหน่วยไฟฟ้าที่ถูกต้อง');
        return;
    }

    // ตารางอัตราค่าไฟฟ้า (ไม่รวมค่าบริการและภาษี VAT)
    var totalUnitsCost = 0;
    var remainingUnits = units;

    // คำนวณค่าไฟตามหน่วย
    if (units >= 1 && units <= 15) {
        totalCost = units * 2.3488;
    } else if (units >= 16 && units <= 25) {
        totalCost = units * 2.9882;
    } else if (units >= 26 && units <= 35) {
        totalCost = units * 3.2405;
    } else if (units >= 36 && units <= 100) {
        totalCost = units * 3.6237;
    } else if (units >= 101 && units <= 150) {
        totalCost = units * 3.7171;
    } else if (units >= 151 && units <= 400) {
        totalCost = units * 4.2218;
    } else if (units > 400) {
        totalCost = units * 4.4217;
    }

    //คำนวนค่ายูนิต
    var totalallunits = totalCost + serviceCharge

    // คำนวณค่า FT
    var FT = (units * ft) / 100 ; // เพิ่มค่า FT

    //นำค่าไฟฟ้าบวกกับค่าบริการ + ค่าไฟฟ้าผันแปล * ภาษี 7%
    var tatol = (totalallunits + FT) * vatRate

    //
    var totalB = totalallunits + FT + tatol


    // แสดงผลลัพธ์
    document.getElementById('result').textContent = `ค่าไฟฟ้า: ${totalB.toFixed(2)} บาท สำหรับ ${units} หน่วย`;
}


