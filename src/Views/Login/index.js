import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './style.css'
import Movie from '../../img/Movie.jpg'


// style and redirect to movies page

const LoginContainer = () => {
    const { register, handleSubmit, formState, setFocus } = useForm();
    const { errors, isDirty, dirtyFields, submitCount, isValid } = formState
    const [incredibleBigWall, setIncredibleBigWall] = useState(true)
    const [visibleModal, setVisibleModal] = useState(false)
    const Navigate = useNavigate();

    const onSubmit = data => {
        if (isValid && incredibleBigWall) {
            setVisibleModal(true)
            Navigate('/movies-list');
        }
    };

    useEffect(() => {
        const firstError = Object.keys(errors).reduce((field, a) => { return !!errors[field] ? field : a }, null);
        if (firstError) {
            setFocus(firstError);
        }
    }, []);

    const Modal = () => {
        return (
            <div style={{ position: "relative", alignSelf: "center", justifyContent: "center", textAlign: "center", padding: 50, border: "1px solid black", borderRadius: 25 }}>
                <div>Ils reagissent bizarrement ces 2 inputs nan ? </div>
                <div>Un peu de css serait le bienvenue je pense :)</div>
                <div style={{ marginTop: 30 }}>Et si tu te sent chaud tu pourrais peut-être régler le problème de focus ?!</div>
                <button style={{ marginTop: 20 }} onClick={() => setVisibleModal(false)}>Avec grand plaisir, j'adore react</button>
            </div>)
    }

    const LabelizeInput = ({ inputStyle, name, defaultValue, register, dirtyFields, errors, required }) => {
        return (
            <div style={inputStyle.inputContainer}>
                <label className={!dirtyFields?.[name] ? "coucou" : "coucou"} onClick={() => setFocus(name)}>{name}</label>
                <input placeholder={name} style={inputStyle} defaultValue={defaultValue} {...register(name, { required: required })} />
                {errors?.[name] && <span style={{ fontSize: 14, color: "#ff3838" }}>Le champ {name} est obligatoire</span>}
            </div>
        )
    }

    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center", background: "#FFF5EE" }}>
            {visibleModal && <Modal />}
            {!visibleModal && <div style={{ position: "relative", alignSelf: "center", justifyContent: "center", textAlign: "center", padding: 50, border: "1px solid black", borderRadius: 25, letterSpacing: '2.5px' }}>
                <div style={{ padding: "0 30px", position: "absolute", top: -20, left: "25%", right: "25%", backgroundColor: "#fff", color: '#ff3838' }}><strong>IT'S TIME TO CHOOSE YOUR MOVIE</strong></div>
                <img src={Movie} alt="Movie" style={{ width: "30vh", height: "30vh" }} />
                <form style={{ display: "flex", flexDirection: "column", minWidth: 300 }} onSubmit={handleSubmit(onSubmit)}>
                    <LabelizeInput inputStyle={inputStyle} name="email" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true} />
                    <LabelizeInput inputStyle={inputStyle} name="mot de passe" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true} />
                    <div className="frame">
                        <button className="custom-btn btn-4">
                            <span>Access the site</span>
                        </button></div>
                </form>
            </div>
            }
        </div>
    )
}

const inputStyle = {
    inputContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
        backgroundColor: "transparent",
        zIndex: 2,
    },
    padding: "0 10px",
    height: 30,

}

export default LoginContainer