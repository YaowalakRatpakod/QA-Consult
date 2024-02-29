import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header/Headeroffice";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function DetailsAppointmentOF() {
  const { id } = useParams(); // ใช้ hook useParams เพื่อดึงค่า id จาก URL
  const [requestInfo, setRequestInfo] = useState(null);
  const [appointment, setAppointment] = useState(null);
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
    const fetchRequestInfo = async () => {
      try {
        // ดึง token จาก localStorage
        const accessToken = localStorage.getItem("access_token");

        // ใช้ token เพื่อดึงข้อมูลผู้ใช้จาก Django backend
        const response = await axios.get(
          `http://127.0.0.1:8000/api/user-consultation-requests-all/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response.data);
        setRequestInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch request info", error);
      }
    };
    fetchRequestInfo();
  }, [id]);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        // ดึง token จาก localStorage
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/appointments/?consultation_request_id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Appointments:", response.data);
        setAppointment(response.data);
      } catch (error) {
        console.error("Failed to fetch appointment:", error);
      }
    };

    fetchAppointment();
  }, [id]);

  if (!requestInfo) {
    return <div>Loading...</div>; // แสดง Loading ขณะที่รอข้อมูลจาก API
  }

  return (
    <div>
      <Header />
      <div className="ltr">
        <div className="flex flex-row  ms-28 p-4 text-medium text-black">
          การนัดหมาย{" "}
        </div>
        <Link to="/dashboardOF">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute top-24 right-32 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-around ">
        {/* <div className='flex justify-center w-full'></div> */}
        <div className="mx-auto w-4/5 h-full  ">
          <div className="rounded-lg shadow-lg border border-black bg-white -mt-35 pb-px pr-px md:py30  md:px-5 ">
            <div className="flex">
              <div className="text-[#F2F0DE] w-1/2 bg-[#091F59] rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5">
                การนัดหมาย
              </div>
              <div className="text-[#F2F0DE] w-1/2 bg-white rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5">
                {" "}
              </div>
            </div>

            <div className="flex mt-6 mb-1 ml-10 text-black font-semibold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" h-3 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>{" "}
              รายละเอียด
            </div>

            <div className="bg-yellow-100 rounded-md mx-2 my-4 py-4 px-7">
              <div className="flex">
                <div className="">
                  <div
                    className="text-black px-7 py-1 font-medium text-sm"
                    name="name"
                  >
                    ชื่อ-นามสกุล :{" "}
                    <span className="bg-white rounded-sm p-1">
                      {requestInfo.user}
                    </span>
                  </div>
                  <div className="text-black px-7 py-1 font-medium text-sm">
                    คณะ :{" "}
                    <span className="bg-white rounded-sm p-1">
                      เทคโนโลยีสารสนเทศและการสื่อสาร
                    </span>
                  </div>
                  <div className="px-7 py-1 font-medium text-sm">
                    รหัสหัวข้อ:{" "}
                    <span className="bg-white rounded-sm p-1">
                      {requestInfo.topic_id}
                    </span>
                  </div>
                  <div class="px-7 py-1 font-medium text-sm">
                    วันที่:{" "}
                    <span className="bg-white rounded-sm p-1">
                    {new Date(requestInfo.received_date).toLocaleDateString('th-TH', { year: 'numeric', month: 'numeric', day: 'numeric'}
                      )}
                    </span>{" "}
                  </div>
                </div>
                <div className="">
                  <div className="text-black px-7 py-1 font-medium text-sm">
                    เบอร์โทร :{" "}
                    <span className="bg-white rounded-sm p-1">0612548848</span>
                  </div>
                  <div className="text-black px-7 py-1 font-medium text-sm">
                    สาขา :{" "}
                    <span className="bg-white rounded-sm p-1">
                      วิศวกรรมซอฟต์แวร์
                    </span>
                  </div>
                  <div className="px-7 py-1 font-medium text-sm">
                    หัวข้อ:{" "}
                    <span className="bg-white rounded-sm p-1">
                      {getSectionInThai(requestInfo.topic_section)}
                    </span>
                  </div>
                </div>
              </div>

              <form>
                <div class="px-7 py-1 font-medium text-sm">
                  รายละเอียด
                  <p className="bg-white w-full h-20 mr-10 rounded-md  font-medium text-sm form-control form-control-lg px-1 py-1">
                    {requestInfo.details}
                  </p>
                </div>
                {appointment && (
                  <div>
                    {appointment.map((item, index) => (
                      <div key={index}>
                        <div
                          className="text-black px-7 py-1 font-medium text-sm"
                          name="name"
                        >
                          นัดหมายวันที่ :{" "}
                          <span className="bg-white rounded-sm p-1">
                          {new Date(item.appointment_date).toLocaleDateString('th-TH', { year: 'numeric', month: 'numeric', day: 'numeric'}
                      )}
                          </span>
                        </div>
                        <div className="text-black px-7 py-1 font-medium text-sm">
                          สถานที่ :{" "}
                          <span className="bg-white rounded-sm p-1">
                            {item.location}
                          </span>
                        </div>
                        <div className="px-7 py-1 font-medium text-sm">
                          เวลาที่นัดหมาย :{" "}
                          <span className="bg-white rounded-sm p-1">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsAppointmentOF;
