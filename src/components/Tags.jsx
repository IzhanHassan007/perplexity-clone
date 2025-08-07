import React from 'react';
import './Tags.css';
import { Button } from 'primereact/button';

const Tags = () => {
    const tags = [
        { label: 'Parenting', icon: 'pi pi-users' },
        { label: 'Troubleshoot', icon: 'pi pi-cog' },
        { label: 'Perplexity 101', icon: 'pi pi-question-circle' },
        { label: 'Health', icon: 'pi pi-heart' },
        { label: 'Learn', icon: 'pi pi-book' }
    ];

    return (
        <div className="tags-container">
            {tags.map((tag, idx) => (
                <Button
                    key={idx}
                    label={tag.label}
                    icon={tag.icon}
                    className="p-button-rounded p-button-secondary tag-btn"
                />
            ))}
        </div>
    );
};

export default Tags;
