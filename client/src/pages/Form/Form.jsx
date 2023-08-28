import './Form.css'


export const Form = () => {

    return (
        <div>
            <form >

                <div className='input-section' >
                    <label className='label-name' >Nombre</label>
                    <input className='input' type="text" />
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Apellido</label>
                    <input className='input' type="text" />
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Nacionalidad</label>
                    <input className='input' type="text" />
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Imagen</label>
                    <input className='input' type="text" />
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section'>
                    <label className='label-name' >Fecha de Nacimiento</label>
                    <input className='input input-date' type="date" />
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section input-section-date' >
                    <label className='label-name' >Descripción:</label>
                    <textarea className='input' name="" id="" cols="30" rows="10"></textarea>
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Escuderías</label>
                    <input className='input' type="text" />
                </div>
                {true ? <br /> : <label className='error-message'>error</label>}

                <button>Submit</button>
            </form>
        </div>
    )

}