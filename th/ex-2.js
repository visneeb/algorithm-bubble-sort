/* 
ให้เขียน Function ที่ชื่อว่า sortedByScore ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ studentsInfo
        1. studentsInfo เป็น Array ของ Objects ที่บรรจุข้อมูลนักเรียน โดย Object แต่ละอันจะมี Key 3 ตัวได้แก่ firstname , lastname และ score 
    - Function นี้จะเรียงลำดับ Object ภายใน Array ตามคะแนนสอบจากมากไปน้อย โดยใช้ Bubble Sort Algorithm และ Return studentsInfo ออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ดังนี้
*/

// Start coding here

function sortedByScore(studentsInfo) {
  const n = studentsInfo.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (studentsInfo[j].score < studentsInfo[j + 1].score) {
        const temp = studentsInfo[j];
        studentsInfo[j] = studentsInfo[j + 1];
        studentsInfo[j + 1] = temp;
      }
    }
  }
  return studentsInfo;
}

const studentsInfo = [
  { firstname: "John", lastname: "Doe", score: 85 },
  { firstname: "Jane", lastname: "Smith", score: 92 },
  { firstname: "James", lastname: "Johnson", score: 78 },
  { firstname: "Emily", lastname: "Davis", score: 88 },
];

const result = sortedByScore(studentsInfo);
console.log(result);
/*
  [
    { firstname: 'Jane', lastname: 'Smith', score: 92 },
    { firstname: 'Emily', lastname: 'Davis', score: 88 },
    { firstname: 'John', lastname: 'Doe', score: 85 },
    { firstname: 'James', lastname: 'Johnson', score: 78 }
  ]
  */
