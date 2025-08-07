
import React from 'react';
import './Tags.css';
import { Button } from 'primereact/button';

const Tags = () => {
    const tags = ['Parenting', 'Troubleshoot', 'Perplexity 101', 'Health', 'Learn'];
    return (
        <div className="tags-container">
            {tags.map((tag, idx) => (
                <Button 
                    key={idx} 
                    label={tag} 
                    className="p-button-rounded p-button-secondary tag-btn"
                />
            ))}
        </div>
    );
};


export default Tags;
