import React from 'react';
import './SearchBox.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SearchBox = () => {
    return (
        <>
            <h1 className="search-heading">perplexity</h1>

            <div className="search-wrapper">

                {/* Search Bar Section */}
                <div className="search-bar-section">
                    <i className="pi pi-search search-icon" />
                    <InputText 
                        className="search-input" 
                        placeholder="Ask anything or @mention a Space" 
                    />
                </div>

                {/* Icons Section */}
                <div className="icons-section">
                    <div className="icons-left">
                        <Button icon="pi pi-times" className="p-button-text action-btn" />
                        <Button icon="pi pi-question-circle" className="p-button-text action-btn" />
                        <Button icon="pi pi-globe" className="p-button-text action-btn" />
                    </div>

                    <div className="icons-right">
                        <Button icon="pi pi-paperclip" className="p-button-text action-btn" />
                        <Button icon="pi pi-microphone" className="p-button-text action-btn" />
                        <Button icon="pi pi-cog" className="p-button-text action-btn" />
                        <Button icon="pi pi-volume-up" className="p-button-rounded send-btn" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBox;
