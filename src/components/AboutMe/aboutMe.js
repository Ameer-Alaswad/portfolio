import React from 'react';
import './aboutMe.css';
import ReactTypingEffect from 'react-typing-effect';

export default function AboutMe() {
    return (
        <div className='about-me-container'>
            <section id='greetings-container'>
                <ReactTypingEffect
                    text={[
                        'Greetings, I am Ameer.  a Web Developer living in Berlin. ',
                    ]}
                    cursor={' '}
                    speed={110}
                    eraseDelay={1000 * 60 * 120}
                    displayTextRenderer={(text, i) => {
                        return (
                            <h1>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                            style={{ color: 'gray' }}>
                                            {char}
                                        </span>
                                    );
                                })}
                            </h1>
                        );
                    }}
                />
            </section>
            <section className='about-me-info-container'>
                <div id='about-me-info'>
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
