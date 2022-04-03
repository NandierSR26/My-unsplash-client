import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchClearState, searchStartLoading } from '../actions/search';
import { uiOpenModal } from '../actions/ui';
import { useForm } from '../hooks/useForm';

export const Header = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        term: '',
    })

    const { term } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(term.length > 0){
            dispatch( searchStartLoading(term) );
        } else {
            dispatch( searchClearState() )
        }
    }
    
    const handleOpenModal = () => {
        dispatch( uiOpenModal() )
    }

    return (
        <header className="header">
            <div className="header-section">
                <div className="logo">
                    <img src="/assets/img/my_unsplash_logo.svg" alt="imagen" />
                </div>
                <form 
                    className="search-input"
                    onSubmit={handleSubmit}
                >
                    <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input 
                        type="text" 
                        className="input" 
                        name='term'
                        placeholder="Search by name"
                        onChange={ handleInputChange }
                    />
                </form>
            </div>

            <button
                className="btn-add-photo pointer"
                onClick={ handleOpenModal }
            >
                Add photo
            </button>
        </header>
    )
}
