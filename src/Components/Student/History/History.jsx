import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header/Header'
import axios from 'axios';
import { Link } from "react-router-dom";

function History() {
  const [allRequest, setAllRequest] = useState([]);
  const getStatusInThai = (status) => {
    switch (status) {
      case 'Pending':
        return 'รอดำเนินการ';
      case 'Processing':
        return 'กำลังดำเนินการ';
      case 'Completed':
        return 'เสร็จสิ้น';
      case 'Appointment':
        return 'การนัดหมาย';
      default:
        return status;
    }
  };
  const getSectionInThai = (topic_section) => {
    switch (topic_section) {
      case "ADM01": 
        return "สมัครโครงการรับนิสิตกลับเข้าศึกษาในมหาวิทยาลัยพะเยา (รีรหัส)";
      case "ADM02":
        return "คำร้องขอส่งใบรับรองแพทย์";
      case "ADM03":
        return "คำร้องส่งข้อมูลผลการสอบ TPAT5 ความถนัดครุศาสตร์-ศึกษาศาสตร์";
      case"REG04":
        return "คำร้องขอรับผลการเรียนรายวิชาในหมวดวิชาศึกษาทั่วไป";
      case "REG05":
        return "คำร้องขอพัฒนาผลการเรียนรายวิชาในหมวดวิชาศึกษาทั่วไป";
      case  "UP01":
        return "คำร้องทั่วไป";
      case  "UP02": 
      return"คำร้องขอใบรับรอง";
      case  "UP03": 
      return"คำร้องขอใบรายงานผลการศึกษา (Transcript)";
      case  "UP03-1": 
      return"คำร้องขอใบรายงานผลการศึกษา (Digital Transcript)";
      case  "UP05":
        return"คำร้องขอเพิ่มรายวิชาหลังกำหนด";
      case  "UP06":
        return "คำร้องขอลงทะเบียนเรียนมากกว่า/น้อยกว่าเกณฑ์";
      case  "UP07":
        return "คำร้องขออนุมัติเทียบรายวิชา";
      case  "UP08":
        return "คำร้องขอถอนรายวิชา โดยได้รับอักษร W";
      case  "UP09":
        return "คำร้องขอเทียบโอนรายวิชา";
      case  "UP10":
        return "คำร้องขอย้ายคณะ/หลักสูตร/แผนการเรียน";
      case  "UP11":
        return "คำร้องขอเปลี่ยนชื่อ ชื่อสกุล ยศ และอื่นๆ";
      case  "UP12":
        return "คำร้องขอลาพักการศึกษา";
      case  "UP13":
        return "คำร้องขอลาออกจากการศึกษา";
      case  "UP14":
        return "คำร้องขอลงทะเบียนเรียนพร้อมฝึกงาน/การศึกษาอิสระ/วิทยานิพนธ์";
      case  "UP17":
        return "คำร้องขอผ่อนผันการชำระค่าลงทะเบียนเรียน";
      case  "UP18":
        return "คำร้องขอผ่อนผันการชำระค่าลงทะเบียนเรียน";
      case  "UP20-1":
        return "คำร้องยื่นความประสงค์ขอลงทะเบียนเรียนรายวิชา";
      case  "UP24":
        return "คำร้องขอสำเร็จการศึกษา";
      case  "UP29":
        return "คำร้องขอยื่นสำเร็จการศึกษาล่าช้ากว่ากำหนด";
      case  "UP30":
        return "คำร้องขอถอนรายวิชาศึกษาทั่วไป (GE-Online)";
    }
  }
  
  useEffect(() => {
    const fetchAllRequest = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user-consultation-requests-all/success/');
        setAllRequest(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error)
      }
    };
    fetchAllRequest();
  }, []);
  return (
    <div>
      <Header />
      <div className='ltr'>
        <div className='ms-48 p-4 text-medium text-black' >ประวัติคำถาม</div>
      </div>
      <div className='max-w-screen-xl flex flex-col items-center justify-around mx-auto p-4 '>
        <div className=''>
          <div class="relative overflow-x-auto rounded-md">
            <table class="w-full text-sm text-left rtl:text-right  text-black dark:text-black">
              <thead class="text-xs text-white uppercase bg-[#091F59] dark:bg-[#091F59] dark:text-white-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    รหัสหัวข้อ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อหัวข้อ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อผู้ขอคำปรึกษา
                  </th>
                  <th scope="col" class="px-6 py-3">
                    วันที่เสร็จสิ้น
                  </th>
                  <th scope="col" class="px-6 py-3">
                    สถานะ
                  </th>
                </tr>
              </thead>
              <tbody>
              {allRequest.map((request, index) => (
                    <tr class="bg-[#F2F1DF] border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">{request.topic_id}</th>
                    <td class="px-6 py-4">{getSectionInThai(request.topic_section)}</td>
                    <td class="px-6 py-4">{request.user}</td>
                    <td class="px-6 py-4">{new Date(request.received_date).toLocaleString('th-TH')}</td>
                    <td class="px-6 py-4"><Link to={`/completed/${request.id}`}>{getStatusInThai(request.status)}</Link></td>
                  </tr>
                  ))}  
              </tbody>
            </table>
          </div>

        </div>

      </div>


    </div>
  )
}

export default History
