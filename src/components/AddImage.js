import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { imagesStartAdd, imagesStartLoading } from '../actions/images';
import { uiCloseModal } from '../actions/ui';
import { useForm } from '../hooks/useForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
    },
};

Modal.setAppElement('#root');

export const AddImage = () => {

    const dispatch = useDispatch();
    const { modalOpen } = useSelector( state => state.ui );

    const [ values, handleInputChange ] = useForm({
        label: '',
        img: '',
    })

    const { label, img } = values

    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            label,
            img
        }
        if( modalOpen ){
            dispatch( imagesStartAdd(data) );
            dispatch(uiCloseModal());
        }

    }

    return (
        <Modal
            isOpen={ modalOpen }
            onRequestClose={ closeModal }
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <form
                className="form-add-image"
                onSubmit={handleSubmit}
            >
                <h3>Add a new photo</h3>
                <label>Label</label>
                <input 
                    type="text" 
                    name="label" 
                    placeholder="Suspendisse elit massa" 
                    onChange={ handleInputChange }
                />

                <label>URL</label>
                <input 
                    type="text" 
                    name="img" 
                    placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..." 
                    onChange={ handleInputChange }
                />

                <div className="buttons">
                    <button className="btn-cancel">Cancel</button>
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </Modal>
    )
}
