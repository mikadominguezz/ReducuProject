import React from 'react';
import MakePost from '../Components/MakePost';
import AxiosUser from '../Utils/AxiosUser';

function MakePostPage() {
    const handleSubmit = async (postData) => {
        console.log('Datos enviados al backend:', postData);
        try {
            const response = await AxiosUser.post('/comments', postData);
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al enviar el comentario:', error.response?.data || error.message);
        }
    };
    

    return (
        <MakePost
            onSubmit={handleSubmit}
            createdBy="user1"
            originalId={1}
            originalType="post"
        />
    );
}

export default MakePostPage;
