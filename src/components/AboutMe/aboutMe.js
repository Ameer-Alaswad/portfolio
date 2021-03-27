import React from 'react';
import './aboutMe.css';

export default function AboutMe() {
    return (
        <div className='about-me-container'>
            <section>
                <h1>
                    Greetings, I am Ameer. :) a Web Developer living in Berlin.
                </h1>
            </section>
            <section>
                <div>
                    <h2>
                        I am a full stack web developer with a strong passion
                        for coding , I started as a self-taught , and after a
                        couple of online courses and weekend workshops I fully
                        committed to learning and joined an on-site intensive
                        bootcamp to get more familiar with the cutting edge
                        technologies and industry standards. I am eager to be a
                        part of a motivated team to bring fresh ideas and grow
                        together.
                    </h2>
                    <p>
                        {' '}
                        <strong>Frontend Tech :</strong> React, Vue, jQuery,
                        Handlebars, CSS
                    </p>
                    <p>
                        {' '}
                        <strong> Backend Tech :</strong> Node.js, Express,
                        MongoDB, SQL
                    </p>
                </div>
            </section>
        </div>
    );
}
