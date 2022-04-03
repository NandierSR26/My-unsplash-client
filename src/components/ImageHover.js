import React from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';

export const ImageHover = ({ image, visibility }) => {
    const { _id, img, date, label } = image;
    const classname = `detalles-hover ${visibility}`;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Una imagen Eliminada No Se Puede Recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // eliminar en la rest API
                clienteAxios.delete(`/delete-image/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire(
                                'Eliminado!',
                                res.data.mensaje,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    

    return (
        <div className={classname} >
            <button
                className="btn-delete"
                onClick={() => handleDelete(_id)}
            >
                Delete
            </button>
            <p>{label}</p>
        </div>
    )
}
