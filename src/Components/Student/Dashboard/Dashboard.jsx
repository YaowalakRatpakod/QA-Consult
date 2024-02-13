import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const getStatusInThai = (status) => {
    switch (status) {
      case "Pending":
        return "รอดำเนินการ";
      case "Processing":
        return "กำลังดำเนินการ";
      case "Completed":
        return "เสร็จสิ้น";
      case "Appointment":
        return "การนัดหมาย";
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
      case "REG04":
        return "คำร้องขอรับผลการเรียนรายวิชาในหมวดวิชาศึกษาทั่วไป";
      case "REG05":
        return "คำร้องขอพัฒนาผลการเรียนรายวิชาในหมวดวิชาศึกษาทั่วไป";
      case "UP01":
        return "คำร้องทั่วไป";
      case "UP02":
        return "คำร้องขอใบรับรอง";
      case "UP03":
        return "คำร้องขอใบรายงานผลการศึกษา (Transcript)";
      case "UP03-1":
        return "คำร้องขอใบรายงานผลการศึกษา (Digital Transcript)";
      case "UP05":
        return "คำร้องขอเพิ่มรายวิชาหลังกำหนด";
      case "UP06":
        return "คำร้องขอลงทะเบียนเรียนมากกว่า/น้อยกว่าเกณฑ์";
      case "UP07":
        return "คำร้องขออนุมัติเทียบรายวิชา";
      case "UP08":
        return "คำร้องขอถอนรายวิชา โดยได้รับอักษร W";
      case "UP09":
        return "คำร้องขอเทียบโอนรายวิชา";
      case "UP10":
        return "คำร้องขอย้ายคณะ/หลักสูตร/แผนการเรียน";
      case "UP11":
        return "คำร้องขอเปลี่ยนชื่อ ชื่อสกุล ยศ และอื่นๆ";
      case "UP12":
        return "คำร้องขอลาพักการศึกษา";
      case "UP13":
        return "คำร้องขอลาออกจากการศึกษา";
      case "UP14":
        return "คำร้องขอลงทะเบียนเรียนพร้อมฝึกงาน/การศึกษาอิสระ/วิทยานิพนธ์";
      case "UP17":
        return "คำร้องขอผ่อนผันการชำระค่าลงทะเบียนเรียน";
      case "UP18":
        return "คำร้องขอผ่อนผันการชำระค่าลงทะเบียนเรียน";
      case "UP20-1":
        return "คำร้องยื่นความประสงค์ขอลงทะเบียนเรียนรายวิชา";
      case "UP24":
        return "คำร้องขอสำเร็จการศึกษา";
      case "UP29":
        return "คำร้องขอยื่นสำเร็จการศึกษาล่าช้ากว่ากำหนด";
      case "UP30":
        return "คำร้องขอถอนรายวิชาศึกษาทั่วไป (GE-Online)";
    }
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // ดึง token จาก localStorage
        const accessToken = localStorage.getItem("access_token");

        // ใช้ token เพื่อดึงข้อมูลผู้ใช้จาก Django backend
        const response = await axios.get(
          "http://127.0.0.1:8000/api/user-consultation-requests/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response.data);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch user info", error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div>
      <Header />
      <div className="ltr">
        <div className="ms-48 p-4 text-medium text-black">รายการขอคำปรึกษา</div>
        <div className="ms-52 p-1">
          <button
            onClick={() => navigate("/createreq")}
            type="button"
            className="text-black bg-[#D1E4FF] shadow-lg hover:bg-[#D1E4FF]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
          >
            {/* <svg aria-hidden="true" class="w-10 h-3 me-2 -ms-1" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg"><img d="" fill="white" /></svg> */}
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 26.25H8.75V10.5H19.25V8.75H8.75C7.7875 8.75 7 9.5375 7 10.5V26.25C7 27.2125 7.7875 28 8.75 28H24.5C25.4625 28 26.25 27.2125 26.25 26.25V15.75H24.5V26.25Z"
                fill="black"
              />
              <path d="M12.25 14V15.75H19.25H21V14H12.25Z" fill="black" />
              <path d="M12.25 17.5H21V19.25H12.25V17.5Z" fill="black" />
              <path d="M12.25 21H21V22.75H12.25V21Z" fill="black" />
              <path
                d="M26.25 5.25H24.5V8.75H21V10.5H24.5V14H26.25V10.5H29.75V8.75H26.25V5.25Z"
                fill="black"
              />
            </svg>
            สร้างรายการขอคำปรึกษา
          </button>
        </div>
        <div className="max-w-screen-xl flex flex-col items-center justify-around mx-auto p-4 ">
          <div className="">
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
                      วันที่ยื่น
                    </th>
                    <th scope="col" class="px-6 py-3">
                      วันที่รับเรื่อง
                    </th>
                    <th scope="col" class="px-6 py-3">
                      สถานะ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* ใช้ map เพื่อแสดงรายการขอคำปรึกษาที่ได้รับมา */}
                  {Array.isArray(userInfo) &&
                    userInfo.map((request, index) => (
                      <tr
                        key={index}
                        class="bg-white border-b dark:bg-[#F2F1DF] dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                        >
                          {request.topic_id}
                        </th>
                        <td class="px-6 py-4">
                          {getSectionInThai(request.topic_section)}
                        </td>
                        <td class="px-6 py-4">{request.user.full_name}</td>
                        <td class="px-6 py-4">
                          {new Date(request.received_date).toLocaleString(
                            "th-TH"
                          )}
                        </td>
                        <td class="px-6 py-4">
                          {getStatusInThai(request.status) ===
                            "กำลังดำเนินการ" ||
                          getStatusInThai(request.status) === "Processing"
                            ? new Date(request.submission_date).toLocaleString(
                                "th-TH"
                              )
                            : null}
                        </td>
                        <td class="px-6 py-4">
                          {getStatusInThai(request.status) === "กำลังดำเนินการ" || getStatusInThai(request.status) === "Processing" ? (
                            <Link to={`/inprogress/${request.id}`}> {getStatusInThai(request.status)} </Link>
                          ) : getStatusInThai(request.status) === "เสร็จสิ้น" ? (
                            <Link to={`/completed/${request.id}`}> {getStatusInThai(request.status)} </Link>
                          ) : getStatusInThai(request.status) === "การนัดหมาย" ? (
                            <Link to={`/appointment/${request.id}`}> {getStatusInThai(request.status)} </Link>
                          ) : (
                            <Link to={`/waiting/${request.id}`}> {getStatusInThai(request.status)} </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
