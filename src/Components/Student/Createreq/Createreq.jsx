import React, { useState } from 'react'
import Header from '../../Layout/Header/Header'

function Createreq() {
    const [name, setName] = useState("")
    const [topicid, setTopicId] = useState("")
    const [topic, setTopic] = useState("")
    const [detail, setDetail] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState(null)

    return (
        <div>
            <Header />
            <div className='ltr'>
                <div className='ms-48 p-4  text-white'>รายการขอคำปรึกษา</div>
                
            </div>
            <div className='xl:container mx-auto mb-32'>
            <div className='mx-40 p-2  text-white'>รายละเอียด</div>
                <div className='flex justify-center'></div>
                <div className='px-4 sm:w-2/3 lg:w1/2 mx-auto'>
                    <div className='rounded-lg shadow-lg bg-white -mt-35 py-4 md:py30 px-4 md:px-5'>
                    <div className="text-[#F2F0DE] bg-[#091F59] focus:outline-none font-bold text-xs px-4 py-2.5">รายละเอียดการขอคำปรึกษา</div>
                        <div className='text-black px-1 py-1' name='name' value={name} onChange={(e) => setName(e.target.value)}>ชื่อ-นามสกุล : <span>เยาวลักษณ์ ราชปรากฎ</span></div>
                        <div className='text-black px-1 py-1'>เบอร์โทร : <span>0612548848</span></div>
                        <div className='text-black px-1 py-1'>คณะ : <span>เทคโนโลยีสารสนเทศและการสื่อสาร</span></div>
                        <div className='text-black px-1 py-1'>สาขา : <span>วิศวกรรมซอฟต์แวร์</span></div>
                        <div className='px-1 py-1' value={topicid} onChange={(e) => setTopicId(e.target.value)}>รหัสหัวข้อ:
                            <select id="countries" class="w-25 py-2.3 px-2 py-1 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:">
                                <option selected>เลือกรหัสหัวข้อ...</option>
                                <option value="ADM01">ADM01</option>
                                <option value="ADM02">ADM02</option>
                                <option value="ADM03">ADM03</option>
                                <option value="REG04">REG04</option>
                                <option value="REG05">REG05</option>
                                <option value="UP01">UP01</option>
                                <option value="UP02">UP02</option>
                                <option value="UP03">UP03</option>
                                <option value="UP03.1">UP03.1</option>
                                <option value="UP05">UP05</option>
                                <option value="UP06">UP06</option>
                                <option value="UP07">UP07</option>
                                <option value="UP08">UP08</option>
                                <option value="UP09">UP09</option>
                                <option value="UP10">UP10</option>
                                <option value="UP11">UP11</option>
                                <option value="UP13">UP13</option>
                                <option value="UP14">UP14</option>
                                <option value="UP17">UP17</option>
                                <option value="UP18">UP18</option>
                                <option value="UP20.1">UP20.1</option>
                                <option value="UP24">UP24</option>
                                <option value="UP25">UP25</option>
                                <option value="UP29">UP29</option>
                                <option value="UP30">UP30</option>
                            </select>
                        </div>
                        <div className='px-1 py-1' value={topic} onChange={(e) => setTopic(e.target.value)}>หัวข้อ:
                            <select id="countries" class="py-1 w-50 py-2.3 px-2 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:">
                                <option selected>เลือกหัวข้อ...</option>
                                <option value="ADM01">สมัครโครงการรับนิสิตกลับเข้าศึกษาในมหาวิทยาลัยพะเยา (รีรหัส)</option>
                                <option value="ADM02">คำร้องขอส่งใบรับรองแพทย์</option>
                                <option value="ADM03">คำร้องส่งข้อมูลผลการสอบ TPAT5 ความถนัดครุศาสตร์-ศึกษาศาสตร์</option>
                                <option value="REG04">คำร้องขอรับผลการเรียนรายวิชาในหมวดวิชาศึกษาทั่วไป</option>
                                <option value="REG05">คำร้องขอพัฒนาผลการเรียนรายวิชาในหมวดวิชาศึกษาทั่วไป</option>
                                <option value="UP01">คำร้องทั่วไป</option>
                                <option value="UP02">คำร้องขอใบรับรอง</option>
                                <option value="UP03">คำร้องขอใบรายงานผลการศึกษา (Transcript)</option>
                                <option value="UP03.1">คำร้องขอใบรายงานผลการศึกษา (Digital Transcript)</option>
                                <option value="UP05">คำร้องขอเพิ่มรายวิชาหลังกำหนด</option>
                                <option value="UP06">คำร้องขอลงทะเบียนเรียนมากกว่า/น้อยกว่าเกณฑ์</option>
                                <option value="UP07">คำร้องขออนุมัติเทียบรายวิชา</option>
                                <option value="UP08">คำร้องขอถอนรายวิชา โดยได้รับอักษร W</option>
                                <option value="UP09">คำร้องขอเทียบโอนรายวิชา</option>
                                <option value="UP10">คำร้องขอย้ายคณะ/หลักสูตร/แผนการเรียน</option>
                                <option value="UP11">คำร้องขอเปลี่ยนชื่อ ชื่อสกุล ยศ และอื่นๆ</option>
                                <option value="UP13">คำร้องขอลาพักการศึกษา</option>
                                <option value="UP14">คำร้องขอลาออกจากการศึกษา</option>
                                <option value="UP17">คำร้องขอลงทะเบียนเรียนพร้อมฝึกงาน/การศึกษาอิสระ/วิทยานิพนธ์</option>
                                <option value="UP18">คำร้องขอผ่อนผันการชำระค่าลงทะเบียนเรียน</option>
                                <option value="UP20.1">คำร้องยื่นความประสงค์ขอลงทะเบียนเรียนรายวิชา</option>
                                <option value="UP24">คำร้องขอสำเร็จการศึกษา</option>
                                <option value="UP25">คำร้องขอยื่นสำเร็จการศึกษาล่าช้ากว่ากำหนด</option>
                                <option value="UP29">คำร้องขอเรียนก่อนแผนการศึกษา</option>
                                <option value="UP30">คำร้องขอถอนรายวิชาศึกษาทั่วไป (GE-Online)</option>
                            </select>
                        </div>
                        <div class='px-1 py-1'>วันที่:
                            <input type="date" className='form-control form-control-lg px-1 py-1'
                                name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div class='px-1 py-1'>รายละเอียด</div>
                        <input type="text" className='form-control form-control-lg px-1 py-1'
                            placeholder='กรอกรายละเอียดเพิ่มเติม...' name='detail' value={detail} onChange={(e) => setDetail(e.target.value)} />
                        <div class='px-1 py-2'>แนบเอกสารเพิ่มเติม : 
                        <input className="pl-2 w-72 pr-4 py-2.3 px-0 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>
                        </input>
                        </div>
            
                        <button type="button" className="text-[#091F59] bg-[#F2F0DE] hover:bg-white focus:outline-none focus:ring-1 focus:ring-black-30 font-bold rounded-full text-xs px-5 py-2.5 text-center dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">สร้างรายการ</button>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Createreq
