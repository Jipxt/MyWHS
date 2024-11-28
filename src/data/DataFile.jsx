// อันนี้รับเข้า
const receivedlist = [
    {
        "userId": 1,
        "id": 1,
        "productname": "พัสดุแบบกล่องขนาดเล็ก",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 2,
        "productname": "พัสดุแบบกล่องขนาดเล็ก",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 3,
        "productname": "พัสดุแบบกล่องขนาดกลาง",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 4,
        "productname": "พัสดุแบบกล่องขนาดใหญ่",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 5,
        "productname": "พัสดุแบบกล่องขนาดเล็ก (แตกหักง่าย)",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 6,
        "productname": "พัสดุแบบกล่องขนาดใหญ่ (แตกหักง่าย)",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 7,
        "productname": "พัสดุแบบซองขนาดเล็ก",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 8,
        "productname": "พัสดุแบบกล่องขนาดกลาง",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 9,
        "productname": "พัสดุแบบกล่องขนาดใหญ่",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 10,
        "productname": "พัสดุแบบกล่องขนาดกลาง (แตกหักง่าย)",
        "date": "11/11/2024",
        "appover": "ผู้จัดการ",
        "status": "อนุมัติ"
    }
]

export function fetchReceivedlist() {
    return receivedlist
}

//   อันนี้ส่งออก
const withdrawlist = [
    {
        "userId": 1,
        "id": 1,
        "productname": "พัสดุแบบกล่องขนาดเล็ก",
        "date": "12/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 2,
        "productname": "พัสดุแบบกล่องขนาดเล็ก",
        "date": "12/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 3,
        "productname": "พัสดุแบบกล่องขนาดกลาง",
        "date": "12/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 4,
        "productname": "พัสดุแบบกล่องขนาดใหญ่",
        "date": "13/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 5,
        "productname": "พัสดุแบบกล่องขนาดเล็ก (แตกหักง่าย)",
        "date": "13/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 6,
        "productname": "พัสดุแบบกล่องขนาดใหญ่ (แตกหักง่าย)",
        "date": "13/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 7,
        "productname": "พัสดุแบบซองขนาดเล็ก",
        "date": "13/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 8,
        "productname": "พัสดุแบบกล่องขนาดกลาง",
        "date": "14/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 9,
        "productname": "พัสดุแบบกล่องขนาดใหญ่",
        "date": "14/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 10,
        "productname": "พัสดุแบบกล่องขนาดกลาง (แตกหักง่าย)",
        "date": "15/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 11,
        "productname": "พัสดุแบบกล่องขนาดกลาง (แตกหักง่าย)",
        "date": "15/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 12,
        "productname": "พัสดุแบบกล่องขนาดใหญ่ (แตกหักง่าย)",
        "date": "15/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 13,
        "productname": "พัสดุแบบซองขนาดกลาง (แตกหักง่าย)",
        "date": "15/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 14,
        "productname": "พัสดุแบบซองขนาดกลาง (แตกหักง่าย)",
        "date": "17/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 15,
        "productname": "พัสดุแบบซองขนาดเล็ก (แตกหักง่าย)",
        "date": "17/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 16,
        "productname": "พัสดุแบบกล่องขนาดใหญ่ (แตกหักง่าย)",
        "date": "17/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 17,
        "productname": "พัสดุแบบซองขนาดเล็ก",
        "date": "17/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 18,
        "productname": "พัสดุแบบกล่องขนาดเล็ก",
        "date": "19/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 19,
        "productname": "พัสดุแบบซองขนาดใหญ่",
        "date": "19/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    },
    {
        "userId": 1,
        "id": 20,
        "productname": "พัสดุแบบกล่องขนาดเล็ก (แตกหักง่าย)",
        "date": "20/11/2024",
        "status": "เบิกแล้ว",
        "appover": "ผู้จัดการ",
        "statussecond": "อนุมัติ"
    }
]

export function fetchWithdrawlist() {
    return withdrawlist
}

//   ข้อมูลแผนกเกี่ยวข้อง
const agency = [
    {
        "userId": 1,
        "id": 1,
        "name": "แผนกไอที",
        "tel": "0809969607"
    },
    {
        "userId": 1,
        "id": 2,
        "name": "แผนกขนส่ง",
        "tel": "0811003805"
    },
    {
        "userId": 1,
        "id": 3,
        "name": "แผนกการตลาด",
        "tel": "0830630855"
    },
    {
        "userId": 1,
        "id": 4,
        "name": "สำนักงาน",
        "tel": "0852393608"
    },
    {
        "userId": 1,
        "id": 5,
        "name": "แผนกบริหาร",
        "tel": "0855620063"
    },
    {
        "userId": 1,
        "id": 6,
        "name": "แผนกบัญชี",
        "tel": "0893420505"
    },
    {
        "userId": 1,
        "id": 7,
        "name": "แผนกธุรการ",
        "tel": "0903316847"
    },
    {
        "userId": 1,
        "id": 8,
        "name": "แผนกโฆษณา",
        "tel": "0920030821"
    },
    {
        "userId": 1,
        "id": 9,
        "name": "แผนกประชาสัมพันธ์",
        "tel": "0937826394"
    },
    {
        "userId": 1,
        "id": 10,
        "name": "แผนกซ่อมบํารุง",
        "tel": "0980317669"
    }
]

export function fetchAgency() {
    return agency
}
