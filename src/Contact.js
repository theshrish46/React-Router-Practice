import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate('/Home')
    }
  return (
    <>
    <section>
        <h1>Contact Page</h1>
        <button onClick={gotoHome}>Go to Home Page</button>
        <button onClick={() => {navigate(-1);}}>Go to Previous Page</button>
    </section>

    </>
  )
}

export default Contact
