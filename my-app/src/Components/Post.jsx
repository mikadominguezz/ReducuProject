import React, { useState } from 'react';
import Heart from "react-heart";
import Comment from './Comment';

function Posts() {
    const [active, setActive] = useState(false);

    return (
        <div>
            <Comment imageUrl={"/Images/IMG_8262602D684D-1.jpeg"} />
        </div>
    );
}

export default Posts;
