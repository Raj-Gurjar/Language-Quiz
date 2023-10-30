import React, { useEffect, useState } from 'react';
import '../styles/home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <section className="home_cls section_padding">
            <h1>Welcome to our Language Learning Portal</h1>
            <h2>Select a Language:</h2>
            <div className="language-options">
                <button><Link to="/quiz">English </Link>
                </button>
                <button><Link to="/quiz">Spanish </Link>
                </button>
                <button><Link to="/quiz">German </Link>
                </button>
                <button><Link to="/quiz">Hindi </Link>
                </button>

            </div>

        </section>
    );
};

export default Home;
