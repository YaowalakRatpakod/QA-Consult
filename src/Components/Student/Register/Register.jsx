import { React, useState, useEffect} from "react";
import { useNavigate } from "react-router";
import register from '../../../Picture/register.png'

function Register() {
  const navigate = useNavigate();
  const initialValues = {fullname:"", phone:"", email:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "กรุณาใส่ชื่อ-นามสกุล!";
    }
    if (!values.email) {
      errors.email = "กรุณาใส่อีเมล!";
    } else if (!regex.test(values.email)) {
      errors.email = "กรุณาใส่อีเมลให้ถูกต้อง!";
    }
    if (!values.password) {
      errors.password = "กรุณาใส่รหัสผ่าน";
    }else if (values.password.length < 4) {
      errors.password = "รหัสผ่านควรมากกว่า 4 ตัว";
    } else if (values.password.length > 10) {
      errors.password = "รหัสผ่านไม่ควรเกิน 10 ตัว";
    }
    return errors;
  }


  // const [newUser, setNewUser] = useState({
  //   'full_name': '',
  //   'tel': '',
  //   'email': '',
  //   'password': '',
  // });
  // // Change Element Value
  // const handleChange = (event) => {
  //   setNewUser({
  //     ...newUser,
  //     [event.target.name]: event.target.value
  //   });
  // }
  // console.log();
  // Submit Form
  // const submitForm = () => {
  //   const registerFormData = new FormData();
  //   registerFormData.append("full_name", newUser.full_name)
  //   registerFormData.append('tel', newUser.tel);
  //   registerFormData.append('email', newUser.email);
  //   registerFormData.append('password', newUser.password);

  //   axios.
  // }
  return (
    <div className='bg-[#091F59] h-screen flex justify-between '>
      <div className='bg-[#f8fafc] h-full w-[104rem] grid justify-items-center rounded-r-lg' >
        <div className='font-bold text-4xl text-[#091F59] pt-14'>Q&A Consult</div>
        <div className='font-regular text-xs text-[#7E7878]'>ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>
        <div className='relative my-0'>
         {/* check ได้ว่ากรอกข้อมูลขึ้นถูกมั้ย  */}
          <pre>{ JSON.stringify(formValues, undefined,2)}</pre> 
          <div className='font-regular text-sm text-[#091F59]'>ชื่อ-นามสกุล
    
            <input type="text" name="fullname" value={formValues.fullname}
            onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
          <p>{formErrors.fullname}</p>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>คณะ
            <select id="countries" class="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:">
              <option selected></option>
              <option value="ICT">เทคโนโลยีสารสนเทศและการสื่อสาร</option>
            </select>
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>สาขา
            <select id="countries" class="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:">
              <option selected></option>
              <option value="SE">สาขาวิชาวิศวกรรมซอฟต์แวร์</option>
              <option value="CS">สาขาวิชาวิทยาการคอมพิวเตอร์</option>
              <option value="CPE">สาขาวิชาวิศวกรรมคอมพิวเตอร์</option>
              <option value="IT">สาขาวิชาเทคโนโลยีสารสนเทศ</option>
              <option value="BS">สาขาวิชาภูมิสารสนเทศศาสตร์</option>
              <option value="BBA">สาขาวิชาธุรกิจดิจิทัล</option>
              <option value="CG">สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย</option>
              <option value="BSC">สาขาวิชาวิทยาการข้อมูลและการประยุกต์</option>
              <option value="ICTE">สาขาวิชาเทคโนโลยีสารสนเทศและสาขาวิชาภาษาอังกฤษ</option>
            </select>
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>เบอร์โทร
            <input type="Phone" name="phone" value={formValues.phone}
            onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>อีเมล
            <input type="Email" name="email" value={formValues.email}
            onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
          <p>{formErrors.email}</p>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>รหัสผ่าน
            <input type="Password" name="password" value={formValues.password} 
            onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
          <p>{formErrors.password}</p>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>ยืนยันรหัสผ่าน
            <input type="Password" name="password" value={formValues.password} 
            onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
          <p>{formErrors.password}</p>
        </div>
        <div className='relative my-0'>
          <div className='font-medium text-sm text-[#091F59]'>ตารางเรียน
            <input className="block w-72 py-2.3 px-0 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>
            </input>
          </div>
        </div>
        <div className='registersubmit'>
          <button onSubmit={handleSubmit} onClick={() => navigate ("/")} type="button" class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">ลงทะเบียน</button>
        </div>


      </div>
      <div className='product flex items-center justify-center w-full h-full bg-[#091F59] '>
        <img className='w-72 h-72' src={register} alt="product" />
      </div>

    </div>
  )
}

export default Register;
