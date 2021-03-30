import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles

// Create Document Component
const Resume = () => (
    <iframe
        title='title'
        style={{ border: 'none', display: 'block', margin: '0 auto' }}
        src='resume.pdf'
        height='1165'
        width='787'
    />
);
export default Resume;
